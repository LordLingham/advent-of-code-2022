const { example, input } = require("./input.js");

const turns = input.split("\n");

const selectionMap = {
    X: { points: 1, beats: "C", draws: "A" },
    Y: { points: 2, beats: "A", draws: "B" },
    Z: { points: 3, beats: "B", draws: "C" },
};

let score = 0;
turns.forEach((turn) => {
    const [oppSelection, mySelection] = turn.split(" ");
    const lookup = selectionMap[mySelection];
    score += lookup.points;
    if (lookup.beats === oppSelection) {
        score += 6;
    } else if (lookup.draws === oppSelection) {
        score += 3;
    }
});
console.log(score);
