const { example, input } = require("./input.js");
const lines = example.split("\n");

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
            }, dirMap);
            currentDirName = dirName;
        }
    } else if (parts[0] !== "$" && parts[0] !== "dir") {
        const size = parseInt(parts[0]);
        currentDirMap.size += size;
    }
});

let total_size = 0;
getDirSize = function (dir) {
    let dir_size = dir["size"];
    Object.keys(dir).forEach((prop) => {
        if (typeof dir[prop] == "object") {
            dir_size += getDirSize(dir[prop]);
        }
    });
    if (dir_size <= max_size) {
        total_size += dir_size;
    }
    return dir_size;
};
getDirSize(dirMap);
console.log(total_size);
