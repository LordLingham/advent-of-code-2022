const { example, input } = require("./input.js");

function getHighestElfCalories(data, count) {
    const elves = data.split("\n\n");
    const elvesTotalCalories = [];
    elves.forEach((e) => {
        const snacks = e.split("\n");
        const totalCalories = snacks.reduce((total, calories) => {
            return total + parseInt(calories);
        }, 0);
        elvesTotalCalories.push(totalCalories);
    });
    const sortedElves = elvesTotalCalories.sort((a, b) => b - a);
    const topElves = sortedElves.splice(0, count);
    const totalOfXElves = topElves.reduce((total, calories) => {
        return total + parseInt(calories);
    }, 0);
    return totalOfXElves;
}
console.log(getHighestElfCalories(example, 3));
console.log(getHighestElfCalories(input, 3));
