const b = "building";
const g = "ground";
const w = "water";
const x = "dest";
const bb = "back-building";
const gw = "ground-water";
const _ = "void";

export const levels = [];

levels.push({
  "worker": [6, 6],
  "crates": [
    [4, 2],
    [4, 3],
    [2, 4],
    [4, 6]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b, b, b],
    [b, x, x, g, g, g, g, g, g, b],
    [b, x, x, g, g, g, b, g, g, b],
    [b, g, g, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, g, b, _],
    [b, b, b, b, b, g, b, g, b, _],
    [_, _, b, g, g, g, g, g, b, _],
    [_, _, b, g, g, g, g, g, b, _],
    [_, _, b, b, b, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [1, 2],
  "crates": [
    [2, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [4, 6]
  ],
  "fixtures": [
    [_, b, b, b, b, _],
    [b, b, g, g, b, _],
    [b, g, g, g, b, _],
    [b, b, g, g, b, b],
    [b, b, g, g, g, b],
    [b, x, g, g, g, b],
    [b, x, x, g, x, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [1, 4],
  "crates": [
    [3, 2],
    [2, 4],
    [5, 5]
  ],
  "fixtures": [
    [_, b, b, b, b, b, _, _],
    [_, b, g, g, b, b, b, _],
    [_, b, g, g, g, g, b, _],
    [b, b, b, g, b, g, b, b],
    [b, g, b, g, b, g, g, b],
    [b, x, g, g, g, b, g, b],
    [b, x, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 4],
  "crates": [
    [2, 2],
    [4, 3],
    [6, 3],
    [7, 3],
    [5, 4]
  ],
  "fixtures": [
    [_, b, b, b, b, b, b, b, _, _],
    [_, b, g, g, g, g, g, b, b, b],
    [b, b, g, b, b, b, g, g, g, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, g, x, g, b, g, g, g, b, b],
    [b, b, x, x, b, g, g, g, b, _],
    [_, b, b, b, b, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [8, 1],
  "crates": [
    [3, 4],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [3, 8],
    [5, 8],
    [6, 8]
  ],
  "fixtures": [
    [_, _, _, _, _, _, _, b, b, b, b],
    [_, _, _, _, _, _, _, b, g, g, b],
    [_, _, _, b, b, b, b, b, g, g, b],
    [b, b, b, b, g, g, g, g, g, g, b],
    [b, g, g, g, x, b, b, b, g, b, b],
    [b, g, b, g, b, g, g, g, g, b, b],
    [b, g, b, g, g, g, g, b, x, g, b],
    [b, g, b, g, g, g, g, g, b, g, b],
    [b, g, x, b, g, g, g, g, b, g, b],
    [b, b, g, g, g, g, b, g, b, g, b],
    [_, b, g, b, b, b, x, g, g, g, b],
    [_, b, g, g, g, g, g, b, b, b, b],
    [_, b, b, b, b, b, b, b, _, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [1, 2],
  "crates": [
    [2, 1],
    [2, 2],
    [4, 2],
    [3, 3]
  ],
  "fixtures": [
    [_, b, b, b, b, b],
    [b, b, g, g, b, _],
    [b, g, g, g, b, _],
    [b, b, g, g, b, b],
    [b, b, g, g, g, b],
    [b, x, g, g, g, b],
    [b, x, x, g, x, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [2, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, _],
    [b, g, g, g, b, _],
    [b, g, g, g, b, _],
    [b, g, g, b, b, b],
    [b, x, x, x, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, x, x, x, g, g, b],
    [b, g, g, g, g, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 2],
  "crates": [
    [2, 2],
    [4, 3],
    [5, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, g, b, g, b, g, b, b, g, b],
    [b, g, g, g, g, g, b, g, g, b],
    [b, b, b, g, b, g, b, g, b, b],
    [b, g, g, g, b, g, b, g, b, _],
    [b, g, b, b, b, g, b, g, b, _],
    [b, x, x, x, x, g, g, g, b, _],
    [b, b, b, b, b, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 6],
  "crates": [
    [2, 2],
    [4, 2],
    [6, 2],
    [3, 5],
    [5, 5]
  ],
  "fixtures": [
    [_, _, b, b, b, b, b, b],
    [_, b, b, g, g, g, g, b],
    [b, b, g, g, g, g, g, b],
    [b, g, g, b, g, b, b, b],
    [b, g, g, g, g, g, b, _],
    [b, x, x, x, x, x, b, _],
    [b, g, g, g, g, g, b, _],
    [b, b, b, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, b, g, g, b],
    [b, g, g, g, g, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, x, b, b, b],
    [_, _, b, g, g, b, _],
    [_, _, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [5, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, b, b, b, b, g, b],
    [b, g, g, x, x, x, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 4],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [2, 2],
    [4, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [2, 3],
    [3, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, b, b, g, b],
    [b, g, g, x, x, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [3, 2],
    [5, 2],
    [3, 4],
    [5, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, x, g, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, x, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, g, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 2],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2],
    [3, 3],
    [4, 3],
    [5, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, g, g, b],
    [b, g, x, x, x, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [2, 3],
    [5, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, x, g, g, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [3, 3],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, g, g, b],
    [b, g, x, x, g, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, g, b, b, b],
    [_, _, b, g, g, b, _, _],
    [_, _, b, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 5],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 5],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, x, b, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, b, g, g, g, b],
    [b, b, g, g, g, b, b, b],
    [b, g, g, g, g, g, b, _],
    [b, b, b, b, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [2, 3],
    [6, 3],
    [2, 4],
    [6, 4],
    [3, 5],
    [5, 5]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, x, g, g, g, x, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, x, x, x, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2],
    [3, 3],
    [4, 3],
    [5, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2],
    [3, 3],
    [4, 3],
    [5, 3],
    [3, 4],
    [4, 4],
    [5, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, x, x, x, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, b, g, b, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, b, g, b, g, b],
    [b, g, b, g, b, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, b, g, b, g, b],
    [b, g, b, g, b, g, b],
    [b, g, b, g, b, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, b, b],
    [b, g, b, _, _, _, _],
    [b, g, b, _, _, _, _],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, g, b],
    [_, _, _, _, b, g, b],
    [_, _, _, _, b, g, b],
    [_, _, _, _, b, g, b],
    [_, _, _, _, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 2],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, g, x, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, g, b, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, b, g, b, g, b],
    [b, g, b, g, b, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 2],
  "crates": [
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [5, 2],
    [6, 2],
    [4, 3]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, g, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [6, 2],
    [3, 3],
    [5, 3],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, g, g, g, x, b],
    [b, g, g, x, g, x, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 2],
  "crates": [
    [3, 3],
    [4, 3],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, b, b, b, g, b],
    [b, g, g, x, x, g, b],
    [b, b, g, x, x, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [3, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, x, b, b],
    [_, _, b, g, b, _],
    [_, _, b, b, b, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b],
    [_, _, b, g, b, _, _],
    [_, _, b, b, b, _, _]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [2, 3],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [2, 4],
    [3, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [3, 3],
  "crates": [
    [2, 2],
    [4, 2],
    [2, 3],
    [4, 3],
    [2, 4],
    [4, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b],
    [b, g, g, g, g, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, x, g, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
levels.push({
  "worker": [4, 4],
  "crates": [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4]
  ],
  "fixtures": [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  "source": "https://bardmask.itch.io/boxxle-remake"
});
