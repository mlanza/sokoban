export const b = "building";
export const g = "ground";
export const w = "water";
export const x = "dest";
export const _ = "void";
export const levels = [];

/*
levels.push({
  worker: [],
  crates: [],
  fixtures: [
  ]
})
*/

levels.push({
  worker: [6,6],
  crates: [[3,4],[4,4],[5,4],[7,3]],
  fixtures: [
    [_, b, b, b, b, b, b, b, _, _],
    [_, b, g, g, g, g, g, b, _, _],
    [b, b, g, w, w, w, g, b, b, b],
    [b, g, g, w, g, g, g, g, g, b],
    [b, g, g, x, x, x, x, g, g, b],
    [b, g, g, b, g, w, g, b, b, b],
    [b, b, b, b, g, g, g, g, b, _],
    [_, _, _, b, g, g, g, g, b, _],
    [_, _, _, b, b, b, b, b, b, _]
  ]
})


levels.push({
  worker: [1,6],
  crates: [[2,2],[4,4],[6,4],[6,5]],
  fixtures: [
    [b, b, b, b, _, _, _, _, _],
    [b, g, g, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, g, b],
    [b, g, g, b, g, g, g, g, b],
    [b, b, g, b, g, b, g, b, b],
    [b, g, x, x, x, x, g, g, b],
    [b, g, g, g, b, g, g, g, b],
    [b, b, b, b, b, b, b, b, b]
  ]
});


levels.push({
  worker: [8,2],
  crates: [[2,2],[5,2],[7,2],[2,4]],
  fixtures: [
    [b, b, b, b, b, b, b, _, _, _],
    [b, g, x, g, g, x, b, b, b, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, b, g, w, g, g, g, w, g, b],
    [_, b, x, w, w, x, w, w, g, b],
    [_, b, g, g, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b, b, b]
  ]
})


levels.push({
  worker: [6,2],
  crates: [[3,4],[4,3],[5,4]],
  fixtures: [
    [_, _, b, b, b, b, b, b],
    [_, _, b, x, x, g, g, b],
    [b, b, b, b, b, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, g, w, w, g, b],
    [_, _, b, g, g, g, x, b],
    [_, _, b, b, b, b, b, b]
  ]
});

levels.push({
  worker: [7,1],
  crates: [[2,2],[3,5],[6,4],[7,6]],
  fixtures: [
    [_, _, _, _, _, b, b, b, b, _],
    [b, b, b, b, b, b, g, g, b, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, g, b, g, b, b, g, b, g, b],
    [b, g, b, g, g, b, g, b, g, b],
    [b, g, b, g, g, b, g, b, g, b],
    [b, g, b, g, g, b, g, g, g, b],
    [b, g, b, b, g, b, g, b, b, b],
    [b, g, g, x, x, x, x, g, b, _],
    [b, b, b, b, g, b, b, g, b, _],
    [_, _, _, b, g, g, g, g, b, _],
    [_, _, _, b, b, b, b, b, b, _]
  ]
});

levels.push({
  worker: [2,6],
  crates: [[2,2],[4,2],[3,3],[2,5],[3,5]],
  fixtures: [
    [b, b, b, b, b, b, b, _],
    [b, g, g, g, g, g, b, _],
    [b, g, g, g, g, g, b, b],
    [b, g, x, g, x, g, g, b],
    [b, b, x, x, x, g, b, b],
    [b, g, g, g, g, g, b, _],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b],
  ]
});

levels.push({
  worker: [9,1],
  crates: [[3,7],[10,7],[12,4]],
  fixtures: [
    [b, b, b, b, _, _, _, _, b, b, b, _, _, _, _],
    [b, x, g, b, b, b, _, _, b, g, b, _, _, _, _],
    [b, x, g, g, g, b, b, b, b, g, b, b, b, b, _],
    [b, x, g, g, g, g, g, b, b, g, b, g, g, b, _],
    [b, b, b, g, b, g, g, g, g, g, g, g, g, b, _],
    [_, _, b, g, g, g, b, g, b, b, b, b, g, b, b],
    [_, b, b, g, b, g, b, g, g, g, g, g, g, g, b],
    [_, b, g, g, b, g, b, g, b, g, g, g, g, g, b],
    [_, b, g, g, g, g, g, g, g, g, g, g, b, b, b],
    [_, b, b, b, b, b, b, b, b, b, b, b, b, _, _]
  ]
});
