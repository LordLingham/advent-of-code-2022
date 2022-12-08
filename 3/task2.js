const { example, input } = require("./input.js");
const rucksacks = example.split("\n");

let score = 0;
for (let i = 0; i < rucksacks.length; i += 3) {
    const groupMap = {};
    for (let j = 0; j < 3; j++) {
        const rucksackMap = {};
        const rucksack = rucksacks[i + j].split("");
        rucksack.every((char) => {
            if (!rucksackMap[char]) {
                rucksackMap[char] = 1;
                groupMap[char] = groupMap[char] ? groupMap[char] + 1 : 1;
            }
            if (groupMap[char] > 2) {
                const charCode = char.charCodeAt(0);
                const charValue =
                    charCode >= 97 ? charCode - 96 : charCode - 38;
                score += charValue;
                return false;
            } else {
                return true;
            }
        });
    }
    console.log(score);
}
