export const b = "building";
export const g = "ground";
export const w = "water";
export const x = "dest";
export const _ = null; //void
export const levels = [];

levels.push({
  worker: [2,6],
  crates: [[2,2],[4,2],[3,3],[2,5],[3,5]],
  fixtures: [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b, b],
    [b, g, g, g, g, g, b, b],
    [b, g, x, g, x, g, g, b],
    [b, b, x, x, x, g, b, b],
    [b, g, g, g, g, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b],
  ]
});
