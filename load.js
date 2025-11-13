import _ from "./libs/atomic_/core.js";
import $ from "./libs/atomic_/shell.js";

const b = "building";
const g = "ground";
const w = "water";
const x = "dest";
const bb = "back-building";
const gw = "ground-water";
const v = "void";

function name(idx){
  return `Level ${idx + 1}`;
}

const ILevel = _.protocol({
  name,
  load: null
});

function BoundLevel(name, width, height, data){
  this.name = name;
  this.width = width;
  this.height = height;
  this.data = data;
}

$.doto(BoundLevel, _.implement(ILevel, {load}));

function boundLevel(name, width, height, data){
  return new BoundLevel(name, width, height, data);
}

function fixt(width, height){
  return _.toArray(_.repeat(height, _.toArray(_.repeat(width, v))));
}

function load({width, height, data}){
  const fixtures = fixt(width, height);
  return _.chain(data,
    _.split(_, "\r\n"),
    _.reducekv(function(memo, row, line) {
      return _.reducekv(function(memo, col, item){
        switch(item){
          case "1": //floor
            return _.assocIn(memo, ["fixtures", row, col], g);
          case "2": //goal
            return _.assocIn(memo, ["fixtures", row, col], x);
          case "3": //crate on goal
            return _.chain(memo,
              _.update(_, "crates", _.conj(_, [row, col])),
              _.assocIn(_, ["fixtures", row, col], x));
          case "4": //worker on floor
            return _.assoc(memo, "worker", [row, col]);
          case "5": //building
              return _.assocIn(memo, ["fixtures", row, col], b);
          case "6": //worker on goal
            return _.chain(memo,
              _.assoc(_, "worker", [row, col]),
              _.assocIn(_, ["fixtures", row, col], x));
          case "0": //box on floor
            return _.chain(memo,
              _.update(_, "crates", _.conj(_, [row, col])),
              _.assocIn(_, ["fixtures", row, col], g));
          default:
            throw new Error("Unrecognized level data");
        }
      }, memo, line);
    }, {worker: [], crates: [], fixtures}, _));
}

const text = await Deno.readTextFile(new URL('./levels/boxxle-data.txt', import.meta.url));
const re =
/^===\s*LEVEL:\s*(?<name>.+?)\s*===\r?\n(?<width>\d+)\r?\n(?<height>\d+)\r?\n(?<data>(?:.*\S.*(?:\r?\n(?!\r?\n)|$))+)(?=\r?\n\r?\n|\r?\n(?=^===\s*LEVEL:)|$)/gm;

const levels = _.chain(text, _.reFindAll(re, _), _.mapa(function({groups}){
  const {name, width, height, data} = groups;
  return boundLevel(name, parseInt(width), parseInt(height), data);
}, _), _.butlast, _.mapa(ILevel.load, _));

$.log({levels})
