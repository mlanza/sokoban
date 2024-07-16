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
  worker: [6,4],
  crates: [[3,3],[3,4],[4,4],[3,6]],
  fixtures: [
    [_, b, b, b, b, _, _, _],
    [_, b, g, g, b, b, b, b],
    [_, b, g, g, b, g, g, b],
    [_, b, g, x, g, g, g, b],
    [b, b, g, x, x, g, g, b],
    [b, g, g, w, x, b, b, b],
    [b, g, g, g, g, g, b, _],
    [b, g, g, b, g, g, b, _],
    [b, b, b, b, g, g, b, _],
    [_, _, _, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [6,6],
  crates: [[2,2],[2,5],[5,2],[5,5]],
  fixtures: [
    [b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, w, w, x, b, b],
    [b, b, x, w, w, x, g, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, g, b, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [4,5],
  crates: [[3,3],[3,4],[5,3],[5,4]],
  fixtures: [
    [_, _, _, b, b, b, b, b],
    [_, _, _, b, g, g, g, b],
    [b, b, b, b, g, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, x, x, x, w, g, g, b],
    [b, b, x, g, g, g, g, b],
    [_, b, g, g, b, g, g, b],
    [_, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [4,3],
  crates: [[3,2],[3,4],[5,2],[5,4]],
  fixtures: [
    [b, b, b, b, b, _, _, _, _],
    [b, g, g, g, b, b, b, b, _],
    [b, g, b, g, g, g, g, b, b],
    [b, g, b, x, g, x, g, g, b],
    [b, g, g, g, w, g, w, g, b],
    [b, g, g, x, g, x, g, g, b],
    [b, b, g, g, b, b, b, b, b],
    [_, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [9,2],
  crates: [[3,2],[7,2],[4,6],[6,5]],
  fixtures: [
    [b, b, b, b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, b, b, g, g, b],
    [b, g, g, g, g, x, x, g, x, g, b],
    [b, b, b, g, b, b, g, b, g, x, b],
    [_, _, b, g, g, b, g, b, g, b, b],
    [_, _, b, g, g, b, g, b, g, g, b],
    [_, _, b, g, g, g, g, g, g, g, b],
    [_, _, b, g, g, b, b, b, g, g, b],
    [_, _, b, b, b, b, _, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [4,5],
  crates: [[2,3],[2,5],[3,3],[6,5]],
  fixtures: [
    [_, _, _, _, b, b, b, b, b],
    [b, b, b, b, b, x, g, g, b],
    [b, g, g, g, g, g, g, g, b],
    [b, x, x, x, b, b, g, b, b],
    [b, b, g, g, b, b, g, g, b],
    [_, b, g, g, g, g, g, g, b],
    [_, b, g, b, b, b, b, g, b],
    [_, b, g, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [2,11],
  crates: [[2,9],[4,9],[5,8],[12,9]],
  fixtures: [
    [_, _, _, _, _, _, b, b, b, b, _, _, _, _, _],
    [_, _, _, _, _, _, b, g, g, b, _, _, _, _, _],
    [_, _, _, _, _, _, b, g, g, b, _, _, _, _, _],
    [_, _, _, _, _, _, b, g, g, b, _, _, _, _, _],
    [_, _, _, _, b, b, b, b, g, b, b, _, _, _, _],
    [_, _, _, b, b, g, g, b, g, g, b, _, _, _, _],
    [_, _, _, b, g, g, g, g, g, g, b, _, _, _, _],
    [_, _, _, b, g, g, b, b, g, b, b, b, b, b, b],
    [b, b, b, b, b, g, g, b, g, b, b, g, g, g, b],
    [b, x, x, g, g, g, g, b, g, g, x, x, g, g, b],
    [b, g, g, g, b, b, g, b, g, g, b, b, b, b, b],
    [b, b, b, b, b, g, g, b, b, g, b, b, _, _, _],
    [_, _, _, _, b, g, g, g, g, g, g, b, _, _, _],
    [_, _, _, _, b, b, b, b, g, g, g, b, _, _, _],
    [_, _, _, _, _, _, _, b, b, b, b, b, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
})


levels.push({
  worker: [2,7],
  crates: [[2,4],[5,4],[6,4],[6,3]],
  fixtures: [
    [_, b, b, b, b, b, b, b, _],
    [_, b, g, g, g, g, g, b, _],
    [_, b, x, w, w, g, g, b, b],
    [b, b, g, w, w, g, g, g, b],
    [b, g, g, g, g, g, g, g, b],
    [b, g, x, x, x, g, b, g, b],
    [b, g, g, b, b, b, b, g, b],
    [b, g, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,5],
  crates: [[2,4],[3,4],[4,4],[3,2]],
  fixtures: [
    [b, b, b, b, b, b, b],
    [b, x, g, x, g, g, b],
    [b, x, g, x, g, g, b],
    [b, b, g, b, g, b, b],
    [b, g, g, g, g, g, b],
    [b, g, g, g, g, g, b],
    [b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [7,5],
  crates: [[3,3],[4,2],[5,3],[4,5]],
  fixtures: [
    [_, _, _, _, _, _, _, _, _, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b, g, g, b],
    [b, g, g, g, g, g, g, g, x, x, x, g, b],
    [b, g, g, g, g, g, g, g, g, w, g, g, b],
    [b, b, b, b, g, b, b, b, b, g, x, g, b],
    [_, _, b, g, g, g, g, g, g, g, b, b, b],
    [_, _, b, g, g, g, b, b, b, b, b, _, _],
    [_, _, b, b, b, b, b, _, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [5,5],
  crates: [[5,2],[4,5],[6,4],[6,5]],
  fixtures: [
    [_, _, _, _, b, b, b, b, _, _],
    [b, b, b, b, b, x, g, b, _, _],
    [b, g, x, g, g, g, g, b, _, _],
    [b, g, x, x, b, g, g, b, b, b],
    [b, b, g, b, b, b, g, g, g, b],
    [_, b, g, g, g, g, g, g, g, b],
    [_, b, g, g, g, b, b, g, g, b],
    [_, b, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [2,1],
  crates: [[2,2],[2,3],[5,3],[5,4]],
  fixtures: [
    [b, b, b, b, b, _, _, _, _],
    [b, g, g, x, b, b, b, b, b],
    [b, g, g, x, b, b, g, g, b],
    [b, b, g, g, g, g, g, g, b],
    [_, b, x, x, b, g, g, g, b],
    [_, b, g, g, g, g, b, b, b],
    [_, b, g, g, b, b, b, _, _],
    [_, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [2,4],
  crates: [[2,3],[2,5],[3,4],[6,3]],
  fixtures: [
    [b, b, b, b, b, b, b, b, _],
    [b, g, g, g, b, g, g, b, _],
    [b, g, g, g, g, g, g, b, b],
    [b, b, g, b, b, x, x, g, b],
    [_, b, g, g, g, x, b, g, b],
    [_, b, g, b, g, x, g, g, b],
    [_, b, g, g, g, b, b, b, b],
    [_, b, b, b, b, b, _, _, _]
  ]
});

levels.push({
  worker: [5,3],
  crates: [[3,2],[4,2],[5,2],[4,5]],
  fixtures: [
    [b, b, b, b, b, b, b, b],
    [b, g, x, b, g, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, b, g, g, g, b],
    [b, x, x, x, g, b, b, b],
    [b, g, g, g, g, b, _, _],
    [b, b, b, g, g, b, _, _],
    [_, _, b, b, b, b, _, _]
  ]
})


levels.push({
  worker: [6,8],
  crates: [[2,2],[5,2],[3,5],[5,6]],
  fixtures: [
    [_, b, b, b, b, b, _, _, _],
    [_, b, g, g, g, b, b, b, _],
    [_, b, g, w, g, g, g, b, b],
    [b, b, g, g, x, x, x, g, b],
    [b, g, g, b, b, x, g, g, b],
    [b, g, g, g, g, g, b, b, b],
    [b, g, g, b, b, g, g, b, _],
    [b, b, b, b, b, g, g, b, _],
    [_, _, _, _, b, g, g, b, _],
    [_, _, _, _, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,4],
  crates: [[3,3],[3,5],[4,3],[4,5]],
  fixtures: [
    [_, _, b, b, b, b, b, b],
    [_, _, b, g, x, x, g, b],
    [_, _, b, g, b, g, g, b],
    [b, b, b, g, x, x, g, b],
    [b, g, g, g, b, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ]
})


levels.push({
  worker: [6,7],
  crates: [[2,2],[2,4],[4,6],[5,7]],
  fixtures: [
    [b, b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, x, g, b],
    [b, g, g, b, b, b, b, g, b],
    [b, b, g, g, g, g, g, g, b],
    [_, b, x, x, g, g, x, b, b],
    [b, b, g, b, g, b, b, b, _],
    [b, g, g, b, g, g, g, b, _],
    [b, g, g, g, g, g, g, b, _],
    [b, g, g, b, g, g, b, b, _],
    [b, b, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,2],
  crates: [[2,2],[4,2],[3,3],[3,4]],
  fixtures: [
    [_, b, b, b, b, b, b, b],
    [b, b, g, x, g, g, g, b],
    [b, g, g, x, g, g, g, b],
    [b, g, b, x, b, g, b, b],
    [b, g, g, g, g, g, b, _],
    [b, b, g, x, g, b, b, _],
    [_, b, g, g, g, b, _, _],
    [_, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [8,3],
  crates: [[2,9],[3,8],[4,7],[5,6]],
  fixtures: [
    [_, _, _, _, _, _, b, b, b, b, b],
    [_, _, _, _, _, b, b, g, g, g, b],
    [_, _, _, _, _, b, g, g, g, g, b],
    [_, _, _, _, b, b, x, w, g, b, b],
    [_, _, _, b, b, g, x, w, g, g, b],
    [_, _, b, b, x, g, x, g, g, g, b],
    [_, b, b, g, g, g, g, b, g, g, b],
    [b, b, g, g, g, g, b, b, b, b, b],
    [b, g, g, g, g, b, b, _, _, _, _],
    [b, g, g, g, b, b, _, _, _, _, _],
    [b, g, g, b, b, _, _, _, _, _, _],
    [b, b, b, b, _, _, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [5,2],
  crates: [[4,2],[6,2],[6,3],[6,4]],
  fixtures: [
    [_, b, b, b, b, _, _, _, _, _],
    [_, b, g, g, b, b, b, b, b, _],
    [_, b, x, g, g, g, g, g, b, _],
    [b, b, x, w, w, g, g, g, b, _],
    [b, g, x, x, w, w, g, g, b, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, b, b, b, b, b, g, g, g, b],
    [_, _, _, _, _, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [1,3],
  crates: [[2,2],[2,3],[2,4],[6,2]],
  fixtures: [
    [_, b, b, b, b, b, b, _, _],
    [b, b, g, g, g, g, b, b, b],
    [b, g, x, w, w, g, g, g, b],
    [b, g, x, g, g, g, x, g, b],
    [b, g, x, g, g, w, g, b, b],
    [b, b, b, g, g, g, g, b, _],
    [_, _, b, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [5,7],
  crates: [[4,5],[4,6],[5,6],[6,6]],
  fixtures: [
    [_, _, b, b, b, b, _, _, _],
    [_, _, b, g, g, b, b, b, b],
    [b, b, b, g, g, g, g, g, b],
    [b, g, g, g, g, w, w, g, b],
    [b, g, w, x, x, g, w, g, b],
    [b, g, w, w, x, g, w, g, b],
    [b, g, g, g, x, g, g, g, b],
    [b, b, b, b, g, g, b, b, b],
    [_, _, _, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [4,1],
  crates: [[2,6],[3,4],[3,5],[3,6]],
  fixtures: [
    [_, _, _, b, b, b, b],
    [b, b, b, b, g, g, b],
    [b, x, x, x, g, g, b],
    [b, g, b, b, g, g, b],
    [b, g, g, g, x, b, b],
    [b, b, g, g, g, b, b],
    [_, b, g, g, g, g, b],
    [_, b, g, g, g, g, b],
    [_, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [3,2],
  crates: [[2,3],[2,4],[2,5],[4,3]],
  fixtures: [
    [b, b, b, b, _, _],
    [b, g, g, b, b, b],
    [b, g, g, g, g, b],
    [b, g, g, g, x, b],
    [b, b, g, b, g, b],
    [b, g, g, x, g, b],
    [b, g, g, x, g, b],
    [b, b, g, x, g, b],
    [_, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,1],
  crates: [[3,3],[3,5],[4,5],[5,3]],
  fixtures: [
    [_, _, b, b, b, b, _, _],
    [_, _, b, g, g, b, b, b],
    [_, _, b, g, x, g, g, b],
    [b, b, b, g, g, g, g, b],
    [b, g, g, g, b, g, b, b],
    [b, g, x, g, x, g, g, b],
    [b, b, g, g, x, g, g, b],
    [_, b, b, b, b, b, b, b]
  ]
})


levels.push({
  worker: [4,4],
  crates: [[3,2],[4,3],[7,3],[4,5]],
  fixtures: [
    [b, b, b, b, _, b, b, b, b, b, _],
    [b, g, g, b, b, b, g, g, g, b, _],
    [b, g, g, g, g, g, g, g, g, b, _],
    [b, g, g, b, g, b, b, g, b, b, _],
    [b, b, g, b, g, g, g, g, g, b, _],
    [_, b, g, b, g, b, g, b, g, b, b],
    [_, b, g, b, g, x, g, x, g, g, b],
    [_, b, g, g, g, g, w, g, g, g, b],
    [_, b, g, g, b, x, g, x, b, b, b],
    [_, b, b, b, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [4,4],
  crates: [[2,3],[2,5],[4,3],[4,5]],
  fixtures: [
    [_, _, b, b, b, b, b, b, b],
    [_, _, b, g, g, g, g, g, b],
    [b, b, b, g, b, b, b, g, b],
    [b, g, g, g, g, g, b, g, b],
    [b, x, x, x, g, x, b, g, b],
    [b, g, g, g, g, g, b, g, b],
    [b, b, b, g, b, b, b, g, b],
    [_, b, g, g, g, g, g, g, b],
    [_, b, g, g, g, b, b, b, b],
    [_, b, b, b, b, b, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [1,4],
  crates: [[2,4],[3,5],[4,6],[5,7]],
  fixtures: [
    [_, b, b, b, b, _, _, _, _, _],
    [_, b, g, g, b, b, b, b, b, b],
    [_, b, g, g, g, g, g, g, g, b],
    [b, b, g, w, w, w, w, g, g, b],
    [b, g, x, g, w, w, w, g, b, b],
    [b, g, g, x, g, w, w, g, b, _],
    [b, b, g, g, x, g, w, g, b, b],
    [_, b, b, g, x, g, w, g, g, b],
    [_, _, b, b, g, g, g, g, g, b],
    [_, _, _, b, b, b, b, g, g, b],
    [_, _, _, _, _, _, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [14,8],
  crates: [[7,6],[9,6],[11,6],[13,6]],
  fixtures: [
    [b, b, b, b, b, b, b, b, _, _, _, _, _, _, _, _],
    [b, g, g, b, g, g, g, b, _, _, _, _, _, _, _, _],
    [b, g, g, g, g, g, g, b, _, _, _, _, _, _, _, _],
    [b, g, g, b, b, g, b, b, _, _, _, _, _, _, _, _],
    [b, b, g, b, b, g, g, b, b, b, b, b, b, b, b, b],
    [_, b, g, b, b, g, g, b, g, g, g, g, g, g, g, b],
    [_, b, g, b, b, g, g, g, g, g, g, g, g, g, g, b],
    [b, b, g, b, b, b, g, b, b, b, b, b, b, b, g, b],
    [b, g, x, g, g, x, g, x, g, x, g, g, g, g, g, b],
    [b, g, g, g, b, b, b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, _, _, _, _, _, _, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [4,3],
  crates: [[2,3],[3,3],[5,3],[3,5]],
  fixtures: [
    [b, b, b, b, b, _, _, _, _],
    [b, x, g, x, b, b, b, b, b],
    [b, g, g, x, g, g, g, g, b],
    [b, b, g, g, g, g, g, g, b],
    [b, b, g, b, b, b, b, b, b],
    [b, g, g, g, g, b, b, _, _],
    [b, g, g, g, x, g, b, _, _],
    [b, b, b, g, g, g, b, _, _],
    [_, _, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,6],
  crates: [[2,3],[2,5],[3,7],[4,5]],
  fixtures: [
    [b, b, b, b, _, _, _],
    [b, g, g, b, b, b, _],
    [b, g, g, g, g, b, _],
    [b, g, g, g, g, b, _],
    [b, b, b, g, b, b, b],
    [b, g, g, g, g, g, b],
    [b, x, x, g, x, x, b],
    [b, g, g, g, g, g, b],
    [b, b, b, g, g, b, b],
    [_, _, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [],
  crates: [],
  fixtures: [
    [_, _, _, _, b, b, b, b, _],
    [b, b, b, b, b, g, g, b, _],
    [b, g, g, g, g, g, g, b, b],
    [b, g, g, x, b, x, g, g, b],
    [b, b, g, b, b, g, b, g, b],
    [_, b, g, x, g, x, g, g, b],
    [_, b, g, g, g, b, b, b, b],
    [_, b, b, b, b, b, _, _, _]
  ]
});

levels.push({
  worker: [3,1],
  crates: [[3,2],[4,2],[2,5],[4,5]],
  fixtures: [
    [_, _, b, b, b, b, _, _],
    [_, _, b, g, g, b, _, _],
    [_, b, b, g, g, b, _, _],
    [_, b, g, g, g, b, b, _],
    [b, b, x, b, x, g, b, _],
    [b, g, x, g, x, g, b, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, g, g, g, b],
    [_, _, _, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [3,3],
  crates: [[2,3],[4,2],[4,3],[4,4]],
  fixtures: [
    [b, b, b, b, b, b, _, _, _, _],
    [b, g, g, g, g, b, _, _, _, _],
    [b, g, g, x, g, b, b, b, b, b],
    [b, b, x, x, g, g, g, g, g, b],
    [b, b, g, x, g, b, g, g, g, b],
    [_, b, b, g, g, b, b, b, b, b],
    [_, _, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,6],
  crates: [[3,2],[3,3],[3,4],[3,5]],
  fixtures: [
    [_, _, _, _, _, b, b, b, b, b],
    [b, b, b, b, b, b, g, g, g, b],
    [b, g, g, g, g, g, g, g, g, b],
    [b, g, g, g, b, b, b, g, b, b],
    [b, b, x, g, x, g, x, g, x, b],
    [_, b, g, g, b, g, g, g, g, b],
    [_, b, g, g, b, b, b, b, b, b],
    [_, b, g, g, b, _, _, _, _, _],
    [_, b, b, b, b, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
})


levels.push({
  worker: [1,3],
  crates: [[2,3],[3,3],[3,5],[6,5]],
  fixtures: [
    [_, b, b, b, _, b, b, b, _],
    [b, x, g, b, b, b, g, x, b],
    [b, x, g, g, b, g, g, x, b],
    [b, g, g, g, b, g, g, g, b],
    [_, b, g, g, g, g, g, b, _],
    [b, g, g, g, b, g, g, g, b],
    [b, g, g, g, b, g, g, g, b],
    [_, b, b, b, _, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,1],
  crates: [[5,1],[4,2],[4,3],[4,4]],
  fixtures: [
    [b, b, b, b, b, b, b, b, b, _],
    [b, g, x, g, x, g, x, g, b, _],
    [b, g, b, g, g, g, g, g, b, _],
    [b, g, b, b, g, b, b, b, b, _],
    [b, g, g, g, g, g, g, b, b, _],
    [b, b, b, g, x, g, g, g, b, b],
    [_, _, b, b, b, g, g, g, g, b],
    [_, _, _, _, b, b, g, g, g, b],
    [_, _, _, _, _, b, b, b, b, b]
  ]
})


levels.push({
  worker: [9,1],
  crates: [[2,4],[5,2],[6,5],[9,3]],
  fixtures: [
    [_, b, b, b, b, b, b, b, b, b, b, b],
    [_, b, g, g, b, g, g, b, g, g, g, b],
    [_, b, g, g, x, g, g, b, g, g, g, b],
    [_, b, g, g, b, x, g, b, g, g, b, b],
    [b, b, g, g, b, g, x, b, g, g, b, _],
    [b, g, g, g, b, g, g, x, g, g, b, _],
    [b, g, g, g, b, g, g, b, g, g, b, _],
    [b, b, b, b, b, b, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});


levels.push({
  worker: [5,7],
  crates: [[2,4],[4,2],[6,4],[4,6]],
  fixtures: [
    [_, _, b, b, b, b, _, _, _],
    [_, _, b, g, g, b, _, _, _],
    [_, _, b, g, g, b, b, b, b],
    [b, b, b, x, g, x, g, g, b],
    [b, g, g, g, w, g, g, g, b],
    [b, g, g, x, g, x, b, b, b],
    [b, b, b, b, g, g, b, _, _],
    [_, _, _, b, g, g, b, _, _],
    [_, _, _, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [4,6],
  crates: [[2,2],[6,2],[2,6],[6,6]],
  fixtures: [
    [_, _, _, _, b, b, b, b, _],
    [b, b, b, b, b, g, g, b, _],
    [b, g, g, g, g, g, g, b, _],
    [b, g, g, x, w, x, g, b, _],
    [b, b, g, w, w, w, g, b, b],
    [_, b, g, x, w, x, g, g, b],
    [_, b, g, g, g, g, g, g, b],
    [_, b, g, g, b, b, b, b, b],
    [_, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [10,9],
  crates: [[8,8],[9,8],[10,8],[11,8]],
  fixtures: [
    [_, _, _, b, b, b, b, b, b, _, _, _, _, _],
    [_, _, _, b, g, g, g, g, b, b, b, b, b, _],
    [b, b, b, b, g, b, b, g, g, g, g, g, b, _],
    [b, g, g, g, g, x, b, g, b, b, g, g, b, _],
    [b, g, g, b, g, g, g, g, g, b, g, b, b, _],
    [b, b, g, b, b, g, b, g, g, b, g, b, _, _],
    [_, b, g, b, b, g, x, g, b, g, g, b, b, b],
    [_, b, g, g, g, x, x, b, g, g, g, g, g, b],
    [_, b, g, g, b, g, g, g, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b, g, g, g, g, b, b],
    [_, _, _, _, _, _, _, b, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2013/03/sokoban-lessons-four-boxes-with-rooms.html"
});

levels.push({
  worker: [3,1],
  crates: [[2,2],[3,2],[4,2],[5,2]],
  fixtures: [
    [_, b, b, b, b, b, _, _],
    [_, b, g, g, g, b, b, b],
    [b, b, g, g, g, g, g, b],
    [b, g, g, b, g, b, g, b],
    [b, g, g, x, x, x, x, b],
    [b, g, g, b, g, g, g, b],
    [b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [7,4],
  crates: [[4,4],[5,4],[6,4],[4,5]],
  fixtures: [
    [_, b, b, b, b, _, _, _, _],
    [_, b, g, g, b, b, b, _, _],
    [_, b, g, g, g, g, b, _, _],
    [b, b, g, g, g, g, b, b, b],
    [b, g, g, b, x, x, x, x, b],
    [b, g, g, g, g, g, b, g, b],
    [b, g, g, b, b, g, g, g, b],
    [b, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [7,8],
  crates: [[2,4],[3,4],[4,4],[5,4]],
  fixtures: [
    [_, _, _, b, b, b, b, b, b, b],
    [b, b, b, b, g, g, g, g, g, b],
    [b, g, g, g, g, g, g, b, g, b],
    [b, g, b, g, b, g, b, b, g, b],
    [b, g, g, g, g, g, b, g, g, b],
    [b, b, b, g, b, g, b, g, b, b],
    [b, g, g, g, b, g, b, g, b, _],
    [b, g, b, b, b, g, b, g, b, _],
    [b, x, x, x, x, g, g, g, b, _],
    [b, b, b, b, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [5,5],
  crates: [[6,9],[6,10],[8,5],[8,10]],
  fixtures: [
    [b, b, b, b, b, _, _, _, _, _, _],
    [b, g, g, g, b, _, _, b, b, b, b],
    [b, g, g, g, b, b, b, b, g, g, b],
    [b, b, g, g, x, x, x, x, g, g, b],
    [b, b, g, b, b, b, b, b, g, g, b],
    [b, g, g, b, g, g, g, b, g, b, b],
    [b, g, g, g, g, g, g, b, g, b, b],
    [b, b, g, g, b, g, b, b, g, g, b],
    [_, b, b, b, b, g, g, b, g, g, b],
    [_, _, _, _, b, g, g, b, g, g, b],
    [_, _, _, _, b, g, g, g, g, g, b],
    [_, _, _, _, b, b, b, b, g, g, b],
    [_, _, _, _, _, _, _, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [6,4],
  crates: [[2,2],[5,5],[7,5],[6,7]],
  fixtures: [
    [_, b, b, b, b, b, b, _, _, _, _],
    [_, b, g, g, g, g, b, _, _, _, _],
    [_, b, g, g, g, g, b, _, _, _, _],
    [b, b, g, b, g, b, b, b, b, _, _],
    [b, g, g, b, g, g, g, g, b, _, _],
    [b, g, g, g, g, g, b, g, b, b, b],
    [b, b, b, b, b, g, b, g, g, g, b],
    [_, _, _, b, g, x, x, x, x, g, b],
    [_, _, _, b, g, g, g, b, g, b, b],
    [_, _, _, b, b, b, g, g, g, b, _],
    [_, _, _, _, _, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [8,2],
  crates: [[6,2],[7,2],[9,2],[7,4]],
  fixtures: [
    [_, _, _, _, b, b, b, b, b, b, b, b, _, _],
    [_, _, _, _, b, g, x, x, x, x, g, b, _, _],
    [b, b, b, b, b, g, g, g, g, g, g, b, _, _],
    [b, g, g, g, b, b, g, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, g, g, g, g, g, g, b],
    [b, b, b, b, b, g, g, g, b, b, g, g, g, b],
    [_, _, _, _, b, b, b, g, g, b, b, b, b, b],
    [_, _, _, _, _, _, b, g, g, b, _, _, _, _],
    [_, _, _, _, _, _, b, g, g, b, _, _, _, _],
    [_, _, _, _, _, _, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [6,5],
  crates: [[2,3],[4,3],[5,4],[5,5]],
  fixtures: [
    [_, _, _, b, b, b, b, _],
    [b, b, b, b, g, b, b, b],
    [b, g, g, b, g, g, g, b],
    [b, g, g, x, x, x, x, b],
    [b, g, g, g, g, g, g, b],
    [b, b, b, b, b, g, g, b],
    [_, _, _, _, b, g, g, b],
    [_, _, _, _, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [7,4],
  crates: [[2,4],[3,4],[5,4],[5,2]],
  fixtures: [
    [_, b, b, b, b, b, b, b, b, b],
    [_, b, g, g, g, g, g, g, g, b],
    [b, b, g, w, w, g, b, b, g, b],
    [b, g, g, w, w, g, g, b, g, b],
    [b, g, g, g, x, x, x, x, g, b],
    [b, g, g, b, g, g, g, b, g, b],
    [b, b, g, b, b, b, b, b, g, b],
    [_, b, g, g, g, g, g, g, g, b],
    [_, b, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [1,6],
  crates: [[2,6],[3,6],[5,4],[5,5]],
  fixtures: [
    [_, _, b, b, b, b, b, b, b, b, b, b],
    [_, _, b, g, g, g, b, b, g, g, g, b],
    [_, b, b, g, x, x, x, x, g, g, g, b],
    [_, b, g, g, g, b, g, b, g, b, b, b],
    [_, b, g, g, g, g, g, b, g, b, _, _],
    [b, b, g, b, b, g, b, b, g, b, b, _],
    [b, g, g, g, g, g, g, g, g, g, b, _],
    [b, g, g, g, b, b, b, g, g, g, b, _],
    [b, b, b, b, b, _, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [3,3],
  crates: [[2,2],[2,3],[4,3],[8,3]],
  fixtures: [
    [b, b, b, b, b, _, b, b, b, b, _],
    [b, g, g, g, b, b, b, g, g, b, _],
    [b, g, g, g, b, x, x, x, x, b, b],
    [b, b, g, g, g, g, g, g, g, g, b],
    [_, b, g, g, g, b, b, g, g, g, b],
    [_, b, b, g, g, b, b, b, b, b, b],
    [_, _, b, b, b, b, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
})


levels.push({
  worker: [1,3],
  crates: [[3,2],[3,3],[4,4],[5,2]],
  fixtures: [
    [_, _, _, b, b, b, b, b, _],
    [b, b, b, b, g, g, g, b, b],
    [b, g, g, g, g, g, g, g, b],
    [b, g, g, g, g, b, b, g, b],
    [b, b, b, g, g, g, b, g, b],
    [_, b, b, g, b, g, b, g, b],
    [_, b, g, x, x, x, x, g, b],
    [_, b, g, g, g, g, g, b, b],
    [_, b, b, b, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [5,2],
  crates: [[2,2],[3,2],[4,2],[4,3]],
  fixtures: [
    [b, b, b, b, b, _, _],
    [b, g, g, g, b, b, b],
    [b, g, g, g, g, g, b],
    [b, g, w, g, g, g, b],
    [b, g, x, x, x, x, b],
    [b, b, b, g, g, g, b],
    [_, _, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [3,6],
  crates: [[3,2],[3,3],[3,4],[3,5]],
  fixtures: [
    [b, b, b, b, _, _, _],
    [b, g, g, b, b, b, b],
    [b, g, g, g, x, g, b],
    [b, g, g, g, x, g, b],
    [b, g, g, g, x, g, b],
    [b, b, b, g, x, b, b],
    [_, _, b, g, g, b, _],
    [_, _, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [3,5],
  crates: [[2,3],[3,3],[4,3],[5,3]],
  fixtures: [
    [_, _, b, b, b, b, _, _],
    [b, b, b, g, g, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, g, x, x, x, x, b],
    [b, b, b, g, g, g, g, b],
    [_, _, b, g, g, b, b, b],
    [_, _, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [3,6],
  crates: [[3,3],[3,4],[3,5],[4,3]],
  fixtures: [
    [_, _, b, b, b, b, b, b, b],
    [b, b, b, g, g, g, g, g, b],
    [b, g, g, g, b, b, b, g, b],
    [b, g, w, g, x, g, b, g, b],
    [b, g, g, g, x, g, b, g, b],
    [b, b, b, g, x, g, g, g, b],
    [_, _, b, g, x, g, b, b, b],
    [_, _, b, b, b, b, b, _, _]
  ]
});

levels.push({
  worker: [3,2],
  crates: [[5,5],[6,3],[6,6],[7,4]],
  fixtures: [
    [_, _, b, b, b, b, b, b, _, _],
    [_, b, b, g, g, g, g, b, _, _],
    [b, b, g, g, w, w, g, b, _, _],
    [b, g, g, b, g, g, g, b, b, b],
    [b, g, g, x, x, x, x, g, g, b],
    [b, g, g, b, g, g, g, g, g, b],
    [b, b, b, b, b, b, g, g, b, b],
    [_, _, _, _, _, b, g, g, b, _],
    [_, _, _, _, _, b, b, b, b, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
})


levels.push({
  worker: [3,9],
  crates: [[2,6],[3,8],[4,8],[5,8]],
  fixtures: [
    [_, _, _, _, _, _, b, b, b, b, _, _, _],
    [_, _, _, _, _, _, b, g, g, b, _, _, _],
    [b, b, b, b, b, b, b, g, g, b, b, b, b],
    [b, g, g, b, b, g, g, g, g, g, g, g, b],
    [b, g, g, g, g, g, b, x, x, x, x, g, b],
    [b, g, g, w, w, g, g, g, g, b, g, b, b],
    [b, b, g, w, g, g, g, b, g, g, g, b, _],
    [b, g, g, g, g, w, g, b, b, b, b, b, _],
    [b, g, g, g, g, g, g, b, _, _, _, _, _],
    [b, b, b, g, g, b, b, b, _, _, _, _, _],
    [_, _, b, b, b, b, _, _, _, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
})


levels.push({
  worker: [6,5],
  crates: [[2,3],[2,4],[6,3],[6,4]],
  fixtures: [
    [_, _, b, b, b, b, _, _, _],
    [_, b, b, g, g, b, _, _, _],
    [_, b, g, g, g, b, b, b, b],
    [b, b, g, g, x, x, x, x, b],
    [b, g, g, g, g, b, g, g, b],
    [b, g, g, g, g, b, g, g, b],
    [b, b, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [1,4],
  crates: [[2,4],[3,4],[4,4],[5,4]],
  fixtures: [
    [_, _, b, b, b, b, b, b, b, b, b],
    [_, _, b, g, g, g, g, g, g, g, b],
    [b, b, b, g, b, b, b, b, b, g, b],
    [b, g, g, g, b, g, g, g, b, g, b],
    [b, g, g, x, x, x, x, g, b, g, b],
    [b, b, g, g, g, g, g, g, b, g, b],
    [_, b, b, b, b, g, b, b, b, g, b],
    [_, _, _, _, b, g, g, g, g, g, b],
    [_, _, _, _, b, b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
})


levels.push({
  worker: [4,6],
  crates: [[3,5],[4,3],[4,5],[6,4]],
  fixtures: [
    [_, _, _, b, b, b, b, _, _],
    [_, _, _, b, g, g, b, _, _],
    [_, _, _, b, g, x, b, b, b],
    [_, _, _, b, g, x, g, g, b],
    [b, b, b, b, g, x, g, g, b],
    [b, g, g, g, g, x, b, b, b],
    [b, g, g, g, g, g, b, _, _],
    [b, b, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});



levels.push({
  worker: [2,6],
  crates: [[4,2],[4,3],[4,4],[4,5]],
  fixtures: [
    [b, b, b, b, b, b, _, _],
    [b, g, g, g, g, b, _, _],
    [b, g, w, w, g, b, b, b],
    [b, g, w, g, g, g, g, b],
    [b, g, x, x, x, x, g, b],
    [b, b, g, g, g, g, g, b],
    [_, b, g, w, g, b, b, b],
    [_, b, g, g, g, b, _, _],
    [_, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});


levels.push({
  worker: [9,8],
  crates: [[2,8],[4,8],[5,8],[6,8]],
  fixtures: [
    [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
    [b, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, b],
    [b, g, b, b, b, b, b, b, b, b, b, b, b, b, b, g, b],
    [b, g, b, g, g, g, g, g, g, g, g, g, g, g, b, g, b],
    [b, g, b, g, b, b, b, b, b, b, b, b, b, g, b, g, b],
    [b, g, b, g, b, g, g, g, g, g, g, g, b, g, b, g, b],
    [b, g, b, g, b, g, b, b, b, b, b, g, b, g, b, g, b],
    [b, g, b, g, b, g, b, g, g, g, b, g, b, g, b, x, b],
    [b, g, g, g, g, g, g, g, w, g, b, g, b, g, b, x, b],
    [b, b, b, g, b, g, b, g, g, g, b, g, b, g, b, x, b],
    [_, _, b, g, b, g, b, g, b, b, b, g, b, g, b, x, b],
    [_, _, b, g, b, g, g, g, g, g, g, g, g, g, b, g, b],
    [_, _, b, g, b, b, b, b, b, b, b, b, b, g, b, g, b],
    [_, _, b, g, g, g, g, g, g, g, g, g, g, g, g, g, b],
    [_, _, b, b, b, b, b, b, b, b, b, b, b, g, w, g, b],
    [_, _, _, _, _, _, _, _, _, _, _, _, b, g, g, g, b],
    [_, _, _, _, _, _, _, _, _, _, _, _, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [2,1],
  crates: [[1,2],[2,2],[3,2],[2,3]],
  fixtures: [
    [b, b, b, b, b, _],
    [b, g, g, g, b, _],
    [b, g, g, g, b, b],
    [b, g, g, g, g, b],
    [b, g, g, b, g, b],
    [b, x, x, x, x, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [4,5],
  crates: [[3,2],[4,2],[3,4],[3,5]],
  fixtures: [
    [_, b, b, b, b, _, _],
    [_, b, g, g, b, b, b],
    [_, b, g, x, g, g, b],
    [_, b, g, x, w, g, b],
    [b, b, g, x, g, g, b],
    [b, g, g, x, g, g, b],
    [b, g, g, g, b, b, b],
    [b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
})


levels.push({
  worker: [3,5],
  crates: [[2,3],[3,3],[4,3],[5,3]],
  fixtures: [
    [_, b, b, b, b, b, _, _],
    [_, b, g, g, g, b, _, _],
    [b, b, g, g, g, b, b, b],
    [b, g, g, g, g, g, g, b],
    [b, g, x, x, x, x, g, b],
    [b, b, g, g, g, b, b, b],
    [_, b, b, b, b, b, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

levels.push({
  worker: [4,2],
  crates: [[1,3],[2,3],[3,3],[2,5]],
  fixtures: [
    [b, b, b, b, b, b],
    [b, x, x, x, x, b],
    [b, g, g, g, g, b],
    [b, g, g, g, b, b],
    [b, g, w, g, g, b],
    [b, g, g, g, g, b],
    [b, g, g, g, g, b],
    [b, b, b, b, b, b]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
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
  ],
  source: "http://www.sokofun.de"
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
  ],
  source: "https://tse4.mm.bing.net/th?id=OIP.0wzcbuZd_Cgh2pgobqmg8QHaHv&pid=Api&f=1&ipt=cfd6d388eaebaae7532dab71fb5ce2235119d9237d5759b3af1f0154dba54acd&ipo=images"
});

levels.push({
  worker: [2,4],
  crates: [[4,5],[5,3],[5,4],[5,5]],
  fixtures: [
    [_, _, _, _, _, b, b, b, b, b],
    [b, b, b, b, b, b, g, g, g, b],
    [b, x, x, x, x, g, g, g, g, b],
    [b, g, b, b, b, g, b, g, b, b],
    [b, g, g, g, g, g, g, g, b, _],
    [b, b, g, g, g, g, g, b, b, _],
    [_, b, b, g, g, b, b, b, _, _],
    [_, _, b, b, b, b, _, _, _, _]
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

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
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
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
  ],
  source: "https://sokoban-jd.blogspot.com/2011/08/lines-four-boxes.html"
});

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
  ],
  source: "https://tse3.mm.bing.net/th?id=OIP.qseWHhg7wRgoIC2DcwHnwAHaIy&pid=Api&f=1&ipt=290055f6cfa666b19430afa96dca0b7423c777f755bf07afc92824168301456f&ipo=images"
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
  ],
  source: "https://images.launchbox-app.com/1e648b5b-c413-46c2-9d99-92482f17d1c1.jpg"
});
