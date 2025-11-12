// Levels from the "Thinking Rabbit" collection, also known as "Boxxle".
// Source: https://usercontent.one/wp/sokoban.dk/wp-content/uploads/2016/02/Thinking-Rabbit-Original-Plus-Extra.txt

const b = "building";
const g = "ground";
const w = "water";
const x = "dest";
const bb = "back-building";
const gw = "ground-water";
const _ = "void";

export const levels = [];

levels.push({
  worker: [8, 11],
  crates: [[2, 5], [3, 8], [4, 6], [4, 8], [7, 2], [7, 5]],
  fixtures: [
    [_,_,_,_,b,b,b,b,b,_,_,_,_,_,_,_,_,_,_,_],
    [_,_,_,_,b,g,g,g,b,_,_,_,_,_,_,_,_,_,_,_],
    [_,_,_,_,b,g,g,g,b,_,_,_,_,_,_,_,_,_,_,_],
    [_,_,b,b,b,g,g,g,b,b,_,_,_,_,_,_,_,_,_,_],
    [_,_,b,g,g,g,g,g,g,b,_,_,_,_,_,_,_,_,_,_],
    [b,b,b,g,b,g,b,b,g,b,g,g,g,b,b,b,b,b,b,b],
    [b,g,g,g,b,g,b,b,g,b,b,b,b,b,g,g,x,x,b,_],
    [b,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,x,x,b,_],
    [b,b,b,b,b,g,b,b,b,g,b,g,b,b,g,g,x,x,b,_],
    [_,_,_,_,b,g,g,g,g,g,b,b,b,b,b,b,b,b,b,_],
    [_,_,_,_,b,b,b,b,b,b,b,_,_,_,_,_,_,_,_,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [10, 8],
  crates: [[3, 11], [4, 3], [4, 5], [4, 9], [5, 3], [5, 5], [5, 9], [6, 3], [6, 5], [6, 9], [7, 11]],
  fixtures: [
    [_,_,b,b,b,b,b,b,b,b,b,b,b,_,_,_,_,_],
    [_,_,b,g,g,g,g,g,g,g,g,g,b,_,_,_,_,_],
    [_,_,b,g,b,b,b,b,b,b,b,g,b,_,_,_,_,_],
    [b,b,b,b,b,g,b,g,g,g,b,g,b,b,b,b,b,_],
    [b,g,g,g,g,g,b,g,g,g,b,g,b,g,g,g,b,_],
    [b,g,g,g,g,g,b,b,b,b,b,g,b,b,b,g,b,_],
    [b,g,g,g,g,g,b,g,g,g,b,g,g,g,g,g,b,_],
    [b,b,b,b,g,b,b,b,b,b,b,g,b,b,b,b,b,b],
    [_,_,_,b,g,x,x,x,x,x,x,g,b,g,g,g,g,b],
    [_,_,_,b,g,x,x,x,x,x,x,g,b,b,b,b,g,b],
    [_,_,_,b,g,x,x,x,x,x,x,g,g,g,g,g,g,b],
    [_,_,_,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [4, 12],
  crates: [[3, 3], [3, 5], [3, 7], [3, 9], [4, 4], [4, 8], [5, 3], [5, 5], [5, 7], [5, 9]],
  fixtures: [
    [_,_,_,b,b,b,b,b,b,b,b,b,b,_,_],
    [_,_,_,b,g,g,g,g,g,g,g,g,b,_,_],
    [_,_,_,b,g,b,b,b,b,b,b,g,b,_,_],
    [_,_,_,b,g,b,g,b,g,b,g,b,b,_,_],
    [_,_,_,b,g,b,g,b,g,b,g,b,_,_,_],
    [b,b,b,b,b,b,b,g,b,g,b,g,b,b,b],
    [b,g,g,g,g,g,g,g,b,g,b,g,b,g,b],
    [b,g,g,x,x,x,x,x,b,g,b,g,g,g,b],
    [b,b,b,x,x,x,x,x,b,b,b,b,b,b,b],
    [_,_,b,x,x,x,x,x,b,_,_,_,_,_,_],
    [_,_,b,b,b,b,b,b,b,_,_,_,_,_,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [5, 8],
  crates: [[3, 3], [4, 5], [4, 7], [5, 3], [5, 4], [5, 6], [5, 7], [6, 5], [6, 7]],
  fixtures: [
    [b,b,b,b,b,b,b,b,b,b],
    [b,g,g,g,g,g,g,g,g,b],
    [b,g,g,b,b,b,g,b,g,b],
    [b,g,g,b,g,g,g,b,g,b],
    [b,g,g,b,g,b,g,b,g,b],
    [b,g,g,b,g,g,g,g,g,b],
    [b,g,g,b,b,b,b,b,b,b],
    [b,g,g,g,g,g,g,g,b],
    [b,x,x,x,x,x,x,x,b],
    [b,x,x,x,x,x,x,x,b],
    [b,b,b,b,b,b,b,b,b,b]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [1, 1],
  crates: [[2, 2], [2, 4], [2, 6], [3, 2], [3, 4], [3, 6], [4, 2], [4, 4], [4, 6]],
  fixtures: [
    [b,b,b,b,b,b,b,b],
    [b,g,g,g,g,g,g,b],
    [b,g,b,b,b,b,g,b],
    [b,g,b,g,g,b,g,b],
    [b,g,b,b,b,b,g,b],
    [b,g,g,g,g,g,g,b],
    [b,b,b,b,b,b,b,b]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [12, 8],
  crates: [[2, 13], [3, 10], [5, 12], [6, 4], [8, 5], [8, 7], [9, 3], [9, 5], [9, 7], [10, 3], [11, 4]],
  fixtures: [
    [_,_,_,_,_,_,_,_,_,_,_,_,b,b,b,b,b,b,b,b,b,b],
    [_,_,_,_,_,_,_,_,_,_,_,_,b,g,g,g,g,g,g,g,g,b],
    [_,_,_,_,_,_,_,_,_,b,b,b,b,b,b,g,b,b,b,g,g,b],
    [_,_,_,_,_,_,_,_,_,b,g,g,g,b,b,g,g,g,b,g,g,b],
    [_,_,_,_,_,_,_,_,_,b,g,g,g,g,g,g,b,b,b,g,g,b],
    [_,_,_,_,_,_,b,b,b,b,b,b,b,b,b,b,b,g,g,g,b,b],
    [_,_,_,_,_,_,b,g,g,g,g,g,g,g,g,g,g,g,g,g,b,_],
    [_,b,b,b,b,b,b,b,b,b,g,g,g,b,b,b,b,b,g,b,b,b],
    [_,b,g,g,g,g,g,g,g,g,g,g,b,x,x,x,x,b,b,b,b,_],
    [_,b,g,g,g,g,g,b,b,b,b,b,b,x,x,x,x,b,_,_,_],
    [_,b,b,b,b,b,b,b,b,_,_,_,_,b,x,x,x,x,b,_,_,_],
    [_,_,_,_,_,_,_,_,_,_,_,_,_,b,b,b,b,b,b,b,b,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [8, 12],
  crates: [[2, 10], [3, 6], [3, 12], [4, 6], [5, 4], [5, 12], [6, 4], [6, 12], [7, 6]],
  fixtures: [
    [_,_,_,_,_,_,_,_,b,b,b,b,b,b,b,_,_],
    [_,_,_,_,_,_,_,_,b,g,g,g,g,g,b,_,_],
    [_,_,_,_,b,b,b,b,b,b,g,g,g,g,b,b,b],
    [_,_,_,_,b,g,g,g,g,g,g,b,b,b,b,g,b],
    [_,_,_,_,b,g,g,g,b,b,b,b,g,g,g,g,b],
    [_,b,b,b,b,b,g,b,b,g,g,g,g,b,b,b,b],
    [_,b,g,g,g,g,g,b,g,g,b,b,g,g,b,_,_],
    [_,b,g,g,b,b,b,b,b,g,b,b,g,g,b,b,_],
    [b,b,b,b,g,g,g,g,g,g,g,g,g,g,b,_,_],
    [b,g,x,x,x,x,x,b,b,b,b,b,b,b,b,_,_],
    [b,g,x,x,x,x,x,b,_,_,_,_,_,_,_,_,_],
    [b,g,x,x,x,x,x,b,_,_,_,_,_,_,_,_,_],
    [b,b,b,b,b,b,b,b,_,_,_,_,_,_,_,_,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [1, 2],
  crates: [[2, 4], [2, 5], [2, 6], [3, 5], [4, 4], [4, 6], [5, 5]],
  fixtures: [
    [_,_,_,_,_,b,b,b,b,b,b,_],
    [b,b,b,b,b,b,g,g,g,g,b,_],
    [b,g,g,g,g,g,g,b,b,g,b,_],
    [b,g,g,b,b,b,b,g,g,g,b,b],
    [b,b,b,b,g,g,g,g,b,b,g,b],
    [_,_,_,b,g,b,b,b,b,g,g,b],
    [_,_,_,b,g,g,b,g,g,g,b,b],
    [_,_,_,b,g,g,g,g,b,g,b,_],
    [_,_,_,b,b,b,b,b,b,b,b,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [4, 6],
  crates: [[2, 7], [3, 4], [3, 6], [3, 9], [6, 7], [7, 4], [7, 6], [7, 9]],
  fixtures: [
    [b,b,b,b,b,b,b,b,b,b,b,b,_,_],
    [b,g,g,g,g,g,b,g,g,g,g,g,b,_],
    [b,g,g,b,g,g,g,g,b,g,g,g,b,_],
    [b,g,g,b,b,b,g,b,b,b,g,g,b,_],
    [b,g,g,b,g,g,g,b,g,g,g,g,b,_],
    [b,g,g,b,g,b,b,g,g,b,g,g,b,_],
    [b,b,b,b,g,b,x,b,b,b,b,g,b,b],
    [b,x,x,x,g,g,x,g,g,g,x,x,x,b],
    [b,b,b,b,b,b,x,b,b,b,b,b,b,b],
    [_,_,_,_,b,g,g,g,g,b,_,_,_,_],
    [_,_,_,_,b,b,b,b,b,b,_,_,_,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});

levels.push({
  worker: [1, 8],
  crates: [[2, 4], [3, 3], [3, 4], [4, 4]],
  fixtures: [
    [_,_,_,_,_,_,_,_,b,b,b,b,b,b,b,b,_,_,_,_],
    [_,_,_,_,_,_,_,_,b,g,g,g,g,g,g,b,_,_,_,_],
    [_,_,_,_,_,_,_,_,b,g,b,b,b,b,g,b,_,_,_,_],
    [_,_,_,_,_,_,_,_,b,g,g,b,g,g,g,b,_,_,_,_],
    [b,b,b,b,b,b,b,b,b,b,g,b,b,b,g,b,b,b,b,b],
    [b,g,g,g,g,g,g,b,b,g,g,g,b,g,g,g,g,g,g,b],
    [b,g,g,g,g,g,g,g,b,g,b,b,b,b,g,b,b,b,g,b],
    [b,g,g,b,b,b,g,b,g,g,b,x,x,x,g,b,g,g,g,b],
    [b,b,b,b,b,b,g,b,b,b,b,x,x,x,b,b,b,b,b,b],
    [_,_,_,_,b,g,g,g,b,g,g,g,g,g,b,_,_,_,_,_],
    [_,_,_,_,b,g,g,g,b,b,b,b,b,b,b,_,_,_,_,_],
    [_,_,_,_,b,g,g,g,b,_,_,_,_,_,_,_,_,_,_,_],
    [_,_,_,_,b,b,b,b,b,_,_,_,_,_,_,_,_,_,_,_]
  ],
  source: "http://origsoko.blogspot.com/2014/05/the-variants-compared.html"
});
