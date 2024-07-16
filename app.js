import _ from "./libs/atomic_/core.js";
import $ from "./libs/atomic_/shell.js";
import dom from "./libs/atomic_/dom.js";
import {reg} from "./libs/cmd.js";
import {levels} from "./levels.js";
import {dests} from "./sokoban.js";
import * as s from "./sokoban.js";

const div = dom.tag('div');

const params = new URLSearchParams(location.search),
      level = _.maybe(params.get("level"), parseInt, _.add(_, -1)) || 0;

const data = _.get(levels, level);
const next = _.get(levels, level + 2);
const prev = _.get(levels, level - 1);
const el = dom.sel1("#sokoban");
const board = dom.sel1("#board", el);
const lvl = dom.sel1("#lvl", el);
const src = dom.sel1("#source", el);

dom.text(dom.sel1("title"), `Level ${level + 1} | Sokoban`);
dom.text(dom.sel1("span", lvl), level + 1);

const $state = _.chain(data, s.add({dests}), s.verify, $.atom);
const $hist = $.hist($state);
const $solved = $.map(s.solved, $state);
const $keys = $.chan(document, "keydown");

reg({$state, $hist, $solved, s});

function which(keys, shift = false){
  return _.filter(function(e){
    return _.includes(keys, e.key) && e.shiftKey === shift;
  });
}

const noUp = $.sub($keys, which(["ArrowUp"]), function(e){
  e.preventDefault();
  $.swap($state, s.up);
});
const noDown = $.sub($keys, which(["ArrowDown"]), function(e){
  e.preventDefault();
  $.swap($state, s.down);
});
const noLeft = $.sub($keys, which(["ArrowLeft"]), function(e){
  e.preventDefault();
  $.swap($state, s.left);
});
const noRight = $.sub($keys, which(["ArrowRight"]), function(e){
  e.preventDefault();
  $.swap($state, s.right);
});

$.sub($keys, which(["ArrowUp", "ArrowLeft"], true), function(e){
  e.preventDefault();
  if (prev){
    location.search = `?level=${level}`;
  }
});
$.sub($keys, which(["ArrowDown", "ArrowRight"], true), function(e){
  e.preventDefault();
  if (next){
    location.search = `?level=${level + 2}`;
  }
});
$.sub($keys, which(["Escape"]), function(e){
  e.preventDefault();
  location.reload(true);
});

$.sub($solved, _.filter(_.identity), function(){ //kill controls once solved
  noUp();
  noDown();
  noLeft();
  noRight();
  dom.addClass(document.body, "solved");
});

$.sub($hist, function([curr, prior]){
  const {worker, crates, fixtures, source} = curr;
  const [x, y] = worker;
  if (prior) {
    if (curr.crates !== prior.crates) {
      $.eachIndexed(function(idx, crate){
        const [x, y] = crate;
        const old = _.get(prior.crates, idx);
        if (_.notEq(crate, old)) {
          $.doto(dom.sel1(`[data-what='crate'][data-x='${old[0]}'][data-y='${old[1]}']`, board),
            dom.attr(_, "data-x", x),
            dom.attr(_, "data-y", y));
        }
      }, curr.crates);
    }
    if (curr.worker !== prior.worker) {
      $.doto(dom.sel1("[data-what='worker']", board),
        dom.attr(_, "data-x", x),
        dom.attr(_, "data-y", y));
    }
  } else {
    dom.attr(src, "href", source);

    const lay = _.chain(fixtures, s.contents, _.mapa(function({what, coords}){
      const [x, y] = coords;
      const below = s.locate(fixtures, [x, y + 1]);
      const above = s.locate(fixtures, [x, y - 1]);
      const w = what === "building" ? (below === "building" ? what : "back-building") : what === "water" ? (_.includes(["ground", "dest"], above) ? "ground-water" : what) : what;
      return div({"data-what": w, "data-x": x, "data-y": y});
    }, _));

    const rows = _.count(fixtures),
          cols = _.chain(fixtures, _.first, _.count);

    $.doto(board,
      dom.attr(_, "data-rows", rows),
      dom.attr(_, "data-cols", cols));

    dom.html(board,
      _.chain(lay,
        _.append(_, _.mapa(function([x, y]){
          return div({"data-what": "crate", "data-x": x, "data-y": y})
        }, crates)),
        _.append(_, div({"data-what": "worker", "data-x": x, "data-y": y})),
      ));

    board.style["display"] = "block";
  }
});
