'use strict';

var fs = require("fs");

function showStat(err, stats) {
	if (err) { throw err };
	console.log(stats);
}

fs.stat("stat.js", showStat);

console.log('########################### Last script\'s line ###########################');