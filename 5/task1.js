const { example, input } = require("./input.js");
const [setup, steps] = input.split("\n\n");

const columns = {};
const setupLines = setup.split("\n");
const columnIdLine = setupLines.pop();
const columnIds = [...columnIdLine.matchAll(/(.{3})\s?/g)];
columnIds.forEach((id) => {
    columns[id[0].trim()] = [];
});

for (let i = setupLines.length - 1; i >= 0; i--) {
    const line = setupLines[i];
    const lineSpaces = [...line.matchAll(/(.{3})\s?/g)];
    lineSpaces.forEach((space, j) => {
        const item = space[1][1];
        if (item !== " ") {
            columns[j + 1].push(item);
        }
    });
}

const stepsLines = steps.split("\n");
stepsLines.forEach((step) => {
    let [_, X, A, B] = step.match(/move (\d+) from (\d+) to (\d+)/);
    X = parseInt(X);
    for (let i = 0; i < X; i++) {
        const crate = columns[A].pop();
        columns[B].push(crate);
    }
});
const topCrates = Object.values(columns).map((col) => col.pop());
console.log(topCrates.join(""));
