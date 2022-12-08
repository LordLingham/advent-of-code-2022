const { example, input } = require("./input.js");

const rucksacks = example.split("\n");
let score = 0;
rucksacks.forEach((rucksack) => {
    const size = Math.ceil(rucksack.length / 2);
    const compartment1 = rucksack.slice(0, size).split("");
    const compartment2 = rucksack.slice(size, rucksack.length).split("");

    const foundChars = {};
    compartment1.forEach((char) => (foundChars[char] = 1));
    const repeatChar = compartment2.find((char) => foundChars[char]);
    const charCode = repeatChar.charCodeAt(0);
    const charValue = charCode >= 97 ? charCode - 96 : charCode - 38;

    score += charValue;
});
console.log(score);
