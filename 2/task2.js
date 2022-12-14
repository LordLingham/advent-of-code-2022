const { example, input } = require("./input.js");
const turns = input.split("\n");
const resultScoreMap = {
    X: 0,
    Y: 3,
    Z: 6,
};
const moveScoreMap = {
    X: 1,
    Y: 2,
    Z: 3,
};
const selectionMap = {
    A: { beats: "Z", draws: "X", loses: "Y" },
    B: { beats: "X", draws: "Y", loses: "Z" },
    C: { beats: "Y", draws: "Z", loses: "X" },
};
// Alternative object, but hard to read
// const selectionMap = {
//     A: { X: "Z", Y: "X", Z: "Y" },
//     B: { X: "X", Y: "Y", Z: "Z" },
//     C: { X: "Y", Y: "Z", Z: "X" },
// };
let score = 0;
turns.forEach((turn) => {
    const [oppSelection, desiredResult] = turn.split(" ");
    const lookup = selectionMap[oppSelection];
    score += resultScoreMap[desiredResult];

    let move;
    if (desiredResult === "X") {
        move = lookup.beats;
    } else if (desiredResult === "Y") {
        move = lookup.draws;
    } else {
        move = lookup.loses;
    }
    score += moveScoreMap[move];

    // Alternative scoring with the other (harder to read) selectionMap
    //score += moveScoreMap[lookup[desiredResult]];
});
console.log(score);
