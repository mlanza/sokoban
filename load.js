import _ from "./libs/atomic_/core.js";

const text = await Deno.readTextFile(new URL('./levels/boxxle-data.txt', import.meta.url));

console.log(text);
