const { example, input } = require("./input.js");

const charMap = {};
let start = 0;
let rally = 0;
for (let i = 0; i < example.length; i++) {
    const char = example[i];
    const lastPosition = charMap[char] > -1 ? charMap[char] : -5;

    if (lastPosition == -5 || (lastPosition > -1 && lastPosition < i - 4)) {
        rally += 1;
        if (rally == 4) {
            console.log(i + 1, example.substring(start, start + 4));
            break;
        }
    } else {
        // duplicate
        start = Math.max(lastPosition + 1, start);
        rally = i - start + 1;
    }
    charMap[char] = i;
}
