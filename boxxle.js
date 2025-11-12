const b = "building";
const g = "ground";
const w = "water";
const x = "dest";
const bb = "back-building";
const gw = "ground-water";
const _ = "void";

export const levels = [];

levels.push({
  worker: [1, 1],
  crates: [[2, 2], [3, 2], [2, 3]],
  fixtures: [
    [b, b, b, b, b, g, g, g, g],
    [b, g, g, g, b, g, g, g, g],
    [b, g, g, g, b, g, b, b, b],
    [b, g, g, g, b, g, b, x, b],
    [b, b, b, g, b, b, b, x, b],
    [g, b, b, g, g, g, g, x, b],
    [g, b, g, g, g, b, g, g, b],
    [g, b, g, g, g, b, b, b, b],
    [g, b, b, b, b, b, g, g, g]
  ],
  source: "https://gamefaqs.gamespot.com/gameboy/585643-boxxle/faqs/52416"
});

levels.push({
  worker: [1, 1],
  crates: [[3, 2], [4, 3], [2, 4], [4, 6]],
  fixtures: [
    [b, b, b, b, b, b, b, b, b, b],
    [b, x, x, g, g, g, g, g, g, b],
    [b, x, x, g, g, g, b, g, g, b],
    [b, g, g, b, g, b, b, g, b, b],
    [b, g, g, g, g, g, g, g, b, g],
    [b, b, b, b, b, g, b, g, b, g],
    [g, g, b, g, g, g, g, g, b, g],
    [g, g, b, g, g, g, g, g, b, g],
    [g, g, b, b, b, b, b, b, b, g]
  ],
  source: "https://gamefaqs.gamespot.com/gameboy/585643-boxxle/faqs/52416"
});

levels.push({
  worker: [1, 2],
  crates: [[2, 2], [2, 3], [3, 4], [2, 5]],
  fixtures: [
    [g, b, b, b, b, g],
    [b, b, g, g, b, g],
    [b, g, g, g, b, g],
    [b, b, g, g, b, b],
    [b, b, g, g, g, b],
    [b, x, g, g, g, b],
    [b, x, x, g, x, b],
    [b, b, b, b, b, b]
  ],
  source: "https://gamefaqs.gamespot.com/gameboy/585643-boxxle/faqs/52416"
});

levels.push({
  worker: [2, 1],
  crates: [[3, 2], [2, 5], [5, 6]],
  fixtures: [
    [g, b, b, b, b, b, g, g],
    [g, b, g, g, b, b, b, g],
    [g, b, g, g, g, g, b, g],
    [b, b, b, g, b, g, b, b],
    [b, x, b, g, b, g, g, b],
    [b, x, g, g, g, b, g, b],
    [b, x, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  source: "https://gamefaqs.gamespot.com/gameboy/585643-boxxle/faqs/52416"
});

levels.push({
  worker: [2, 1],
  crates: [[2, 2], [4, 3], [6, 3], [5, 4]],
  fixtures: [
    [g, b, b, b, b, b, b, b, g, g],
    [g, b, g, g, g, g, g, b, b, b],
    [b, b, g, b, b, b, g, g, g, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, g, x, x, b, g, g, g, b, b],
    [b, b, x, x, b, g, g, g, b, g],
    [g, b, b, b, b, b, b, b, b, g]
  ],
  source: "https://gamefaqs.gamespot.com/gameboy/585643-boxxle/faqs/52416"
});
