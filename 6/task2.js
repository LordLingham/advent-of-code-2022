const { example, input } = require("./input.js");

const charMap = {};
let start = 0;
let rally = 0;
for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const lastPosition = charMap[char] > -1 ? charMap[char] : -15;

    if (lastPosition == -15 || (lastPosition > -1 && lastPosition < i - 14)) {
        rally += 1;
        if (rally == 14) {
            console.log(i + 1, input.substring(start, start + 14));
            break;
        }
    } else {
        // duplicate
        start = Math.max(lastPosition + 1, start);
        rally = i - start + 1;
    }
    charMap[char] = i;
}
