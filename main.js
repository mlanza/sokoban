import _ from "./libs/atomic_/core.js";
import $ from "./libs/atomic_/shell.js";
import dom from "./libs/atomic_/dom.js";
import {reg} from "./libs/cmd.js";
import {dests} from "./sokoban.js";
import * as s from "./sokoban.js";
import * as c from "./component.js";

const div = dom.tag('div');

const params = new URLSearchParams(location.search),
      level = _.maybe(params.get("level"), parseInt, _.add(_, -1)) || 0;

const el = dom.sel1("#sokoban");
const board = dom.sel1("#board", el);
const lvl = dom.sel1("#lvl", el);
const src = dom.sel1("#source", el);

dom.text(dom.sel1("title"), `Level ${level + 1} | Sokoban`);
dom.text(dom.sel1("span", lvl), level + 1);

const $s = c.sokoban(level); //headless component!

reg({$s, s});

//wire up component
$.on($s, "reset", function(){
  dom.addClass(dom.sel1("#worker", board), "slump");

  setTimeout(function(){
    location.reload(true);
  },1000);
});

$.on($s, "next", function(){
  location.search = `?level=${level + 2}`;
});

$.on($s, "prev", function(){
  location.search = `?level=${level}`;
});

$.on($s, "solved", function(){
  dom.addClass(document.body, "solved");
});

$.sub($s, function([curr, prior]){
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
      $.doto(dom.sel1("#worker", board),
        dom.attr(_, "data-x", x),
        dom.attr(_, "data-y", y));
    }
  } else {
    dom.attr(src, "href", source);

    const lay = _.chain(fixtures, s.contents, _.mapa(function({what, coords}){
      const [x, y] = coords;
      return div({
        "data-what": s.tile(what, s.locate(fixtures, [x, y - 1]), s.locate(fixtures, [x, y + 1])),
        "data-x": x,
        "data-y": y
      });
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

    dom.attr(dom.sel1("[data-what='worker']", board), "id", "worker");

    board.style["display"] = "block";
  }
});

//wire up controls
const $keys = $.chan(document, "keydown");

function which(keys, shift = false){
  return _.filter(function(e){
    return _.includes(keys, e.key) && e.shiftKey === shift;
  });
}

$.sub($keys, which(["ArrowUp", "ArrowLeft"], true), function(e){
  e.preventDefault();
  $.trigger($s, "prev");
});

$.sub($keys, which(["ArrowDown", "ArrowRight"], true), function(e){
  e.preventDefault();
  $.trigger($s, "next");
});

$.sub($keys, which(["Escape"]), function(e){
  e.preventDefault();
  $.trigger($s, "reset");
});

function debounce(func, timeout){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function go(how){
  const stand = debounce(function(){
    dom.removeClass(dom.sel1("#worker", el), "walk");
  }, 250);
  return function(e){
    e.preventDefault();
    $.trigger($s, how);
    const worker = dom.sel1("#worker", el);
    dom.addClass(worker, "walk");
    _.includes(["left", "right"], how) && dom.attr(worker, "data-facing", how);
    stand();
  }
}

const unsub = $.does(
  $.sub($keys, which(["ArrowUp"]), go("up")),
  $.sub($keys, which(["ArrowDown"]), go("down")),
  $.sub($keys, which(["ArrowLeft"]), go("left")),
  $.sub($keys, which(["ArrowRight"]), go("right")));

$.on($s, "solved", unsub);
