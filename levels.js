export const b = "building";
export const g = "ground";
export const w = "water";
export const x = "dest";
export const _ = "void";
export const levels = [];

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
