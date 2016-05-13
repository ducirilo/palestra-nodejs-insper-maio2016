'use strict';

var fs = require("fs");

var meta = fs.statSync("stat.js");
console.log(meta);

console.log('########################### Last script\'s line ###########################');