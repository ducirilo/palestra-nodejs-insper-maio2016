'use strict';

var fs = require("fs");
//var _ = require("lodash");

function showStat(err, stats) {
	if (err) { throw err };
	console.log(stats);
	/*var pairs = _.toPairs(stats);
	console.log(pairs);*/
}

fs.stat("stat.js", showStat);

console.log('########################### Last script\'s line ###########################');