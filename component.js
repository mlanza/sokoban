import _ from "./libs/atomic_/core.js";
import $ from "./libs/atomic_/shell.js";
import dom from "./libs/atomic_/dom.js";
import {dests, up, down, right, left} from "./sokoban.js";
import * as s from "./sokoban.js";

function Sokoban(levels, $state, $hist, $solved, next, prev){
  this.levels = levels;
  this.$state = $state;
  this.$hist = $hist;
  this.$solved = $solved;
  this.events = {reset: [], next: [], prev: []};
  this.can = {reset: true, next, prev};
}

function trigger(self, key, options){
  if (_.includes(["reset", "next", "prev"], key)) {
    const can = self.can[key];
    const obs = can ? self.events[key] : [];
    $.each(_.invoke(_, options), obs);
  } else {
    $.swap(self.$state, _.get({up, down, right, left}, key, _.identity));
  }
}

function on(self, key, callback){
  switch(key){
    case "solved":
      return $.sub(self.$solved, _.filter(_.identity), callback);
    case "reset":
    case "next":
    case "prev":
      self.events[key].push(callback);
      break;
  }
}

function sub(self, obs){
  return $.sub(self.$hist, obs);
}

$.doto(Sokoban,
  _.implement($.ISubscribe, {sub}),
  _.implement($.IEvented, {on, trigger}));

export function sokoban(levels, level){
  const init = _.get(levels, _);
  const $state = _.chain(init(level), s.add({dests}), s.verify, $.atom);
  return new Sokoban(levels, $state, $.hist($state), $.map(s.solved, $state), init(level + 2), init(level - 1));
}

export default sokoban;
