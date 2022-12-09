const { example, input } = require("./input.js");
const lines = input.split("\n");

const path = [];
const dirMap = { "/": { size: 0, name: "/" } };
let currentDirName = "";
let currentDirMap = {};
const max_size = 100000;

lines.forEach((output) => {
    const parts = output.split(" ");
    if (parts.length == 3) {
        const dirName = parts[2];
        if (dirName == "..") {
            path.pop();
        } else {
            path.push(dirName);
            currentDirMap = path.reduce((obj, path) => {
                obj[path] = obj[path] || { size: 0, name: path };
                return obj[path];
            }, dirMap);
            currentDirName = dirName;
        }
    } else if (parts[0] !== "$" && parts[0] !== "dir") {
        const size = parseInt(parts[0]);
        currentDirMap.size += size;
    }
});

const maximumSpace = 70000000;
const updateSpace = 30000000;
let total_size = 0;
const allDirSizes = [];
getDirSize = function (dir) {
    let deepDirSize = dir["size"] || 0;
    Object.keys(dir).forEach((prop) => {
        if (typeof dir[prop] == "object") {
            deepDirSize += getDirSize(dir[prop]);
        }
    });
    if (dir["size"]) {
        total_size += dir["size"];
    }
    if (dir.name) {
        allDirSizes.push({
            name: dir.name,
            size: deepDirSize,
        });
    }
    return deepDirSize;
};
getDirSize(dirMap);
const spaceAvailable = maximumSpace - total_size;
const spaceToClear = updateSpace - spaceAvailable;
const matches = allDirSizes
    .filter((dir) => dir.size >= spaceToClear)
    .sort((a, b) => a.size - b.size);
console.log(matches[0].size);
