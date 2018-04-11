const filesystem = require("fs");

const najib = filesystem.readFileSync("./diary.txt", "utf8");

console.log(najib);
