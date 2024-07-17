import _ from "./libs/atomic_/core.js";
import * as l from "./levels.js";
export {tile} from "./levels.js";

export const init = _.get(l.levels, _);

export function contents(fixtures){
  return _.flatten(_.mapIndexed(function(y, row){
    return _.mapIndexed(function(x, what){
      const coords = [x, y];
      return {what, coords};
    }, row);
  }, fixtures));
}

const ordered = _.sort(_.asc(_.first), _.asc(_.second), _);
export const dests = _.pipe(_.get(_, "fixtures"), contents, _.filter(({what}) => l.isDest(what), _), _.mapa(_.get(_, "coords"), _), ordered);

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

function at(f){
  return function(offset, pos, {fixtures, crates}){
    const coords = f(pos, offset);
    const what = _.detect(_.eq(_, coords), crates) ? "crate" : locate(fixtures, coords);
    return {what, coords};
  }
}

const upward = at(function([x, y], offset){
  return [x, y - offset]
});

const downward = at(function([x, y], offset){
  return [x, y + offset]
});

const leftward = at(function([x, y], offset){
  return [x - offset, y]
});

const rightward = at(function([x, y], offset){
  return [x + offset, y]
});

const clear = _.pipe(_.get(_, "what"), l.empty);

function move(beyond) {
  return function(state){
    const {worker} = state;
    const beyond1 = beyond(1, worker, state);
    const beyond2 = beyond(2, worker, state);
    const may = (clear(beyond1) || clear(beyond2)) && !l.blocked(beyond1.what);
    const pushed = may && beyond1.what === "crate";
    return _.chain(state,
      may ? _.assoc(_, "worker", beyond1.coords) : _.identity,
      pushed ? _.update(_, "crates", function(crates){
        const idx = _.detectIndex(function(coords){
          return _.eq(coords,  beyond1.coords);
        }, crates);
        return idx !== null ? _.assoc(crates, idx, beyond2.coords) : crates;
      }) : _.identity);
  }
}

export const up = move(upward);
export const down = move(downward);
export const left = move(leftward);
export const right = move(rightward);
