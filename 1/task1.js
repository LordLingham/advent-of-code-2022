const { example, input } = require("./input.js");
function getHighestElfCalories(data) {
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
    return sortedElves[0];
}
console.log(getHighestElfCalories(example));
console.log(getHighestElfCalories(input));
