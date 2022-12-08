const { example, input } = require("./input.js");
const lines = input.split("\n");

const shiftPattern = /(\d+)-(\d+),(\d+)-(\d+)/;
let score = 0;
lines.forEach((l) => {
    const matches = l.match(shiftPattern);
    let [_, l1, u1, l2, u2] = matches;
    l1 = parseInt(l1);
    l2 = parseInt(l2);
    u1 = parseInt(u1);
    u2 = parseInt(u2);

    // Option A - more code, easier to follow.
    const range1 = u1 - l1;
    const range2 = u2 - l2;
    const spaceNeeded = range1 + range2;
    const spaceAvailable = Math.max(u1, u2) - Math.min(l1, l2);
    if (spaceNeeded >= spaceAvailable) {
        count = count + 1;
    }
    // Option B - less code, harder to read.
    // if (Math.max(l1, l2) <= Math.min(u1, u2)) {
    //     score += 1;
    // }
});
console.log(score);
