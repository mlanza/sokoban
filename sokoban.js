import _ from "./libs/atomic_/core.js";
import * as l from "./levels.js";

export const init = _.get(l.levels, _);

export function tile(what, above, below){
 return what === l.b ? (below === l.b ? what : l.bb) : what === l.w ? (_.includes([l.g, l.x], above) ? l.gw : what) : what;
}

export function contents(fixtures){
  return _.flatten(_.mapIndexed(function(y, row){
    return _.mapIndexed(function(x, what){
      const coords = [x, y];
      return {what, coords};
    }, row);
  }, fixtures));
}

const ordered = _.sort(_.asc(_.first), _.asc(_.second), _);
export const dests = _.pipe(_.get(_, "fixtures"), contents, _.filter(({what}) => what === "dest", _), _.mapa(_.get(_, "coords"), _), ordered);

export function solved({crates, dests}){
  return _.eq(ordered(crates), dests);
}

function solvable({crates, dests}){
  return _.count(crates) === _.count(dests);
}

export function verify(state){
  if (!solvable(state)) {
    throw new Error("This map has a destinations to crates mismatch.");
  }
  return state;
}

export function add(stuff){
  return _.reducekv(function(state, key, f){
    return _.assoc(state, key, f(state));
  }, _, stuff);
}

export function locate(fixtures, coords){
  const [col, row] = coords;
  return _.getIn(fixtures, [row, col]);
}

function vertical(offset, [x, y], state){
  const {fixtures, crates} = state;
  const coords = [x, y + offset];
  const what = _.detect(_.eq(_, coords), crates) ? "crate" : locate(fixtures, coords);
  return {what, coords};
}

function horizontal(offset, [x, y], state){
  const {fixtures, crates} = state;
  const coords = [x + offset, y];
  const what = _.detect(_.eq(_, coords), crates) ? "crate" : locate(fixtures, coords);
  return {what, coords};
}

function upward(offset, coords, state){
  return vertical(-offset, coords, state);
}

const downward = vertical;

function leftward(offset, coords, state){
  return horizontal(-offset, coords, state);
}

const rightward = horizontal;

const clear = _.pipe(_.get(_, "what"), _.includes(["ground", "dest"], _));

function move(beyond) {
  return function(state){
    const {worker} = state;
    const beyond1 = beyond(1, worker, state);
    const beyond2 = beyond(2, worker, state);
    const may = (clear(beyond1) || clear(beyond2)) && !_.includes(["building", "water"], beyond1.what);
    const pushed = may && beyond1.what === "crate";
    return _.chain(state,
      may ? _.assoc(_, "worker", beyond1.coords) : _.identity,
      pushed ? _.update(_, "crates", function(crates){
        const idx = _.detectIndex(function(coords){
          return _.eq(coords,  beyond1.coords);
        }, crates);
        return idx !== null ? _.assoc(crates, idx, beyond2.coords) : crates;
      }) : _.identity);
    return state;
  }
}

export const up = move(upward);
export const down = move(downward);
export const left = move(leftward);
export const right = move(rightward);
