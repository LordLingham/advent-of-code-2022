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

    if ((l1 >= l2 && u1 <= u2) || (l2 >= l1 && u2 <= u1)) {
        score = score += 1;
    }
});
console.log(score);
