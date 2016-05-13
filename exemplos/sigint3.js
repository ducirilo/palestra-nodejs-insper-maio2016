function show() {
    var time = (new Date()).toTimeString().slice(0, 8);
    console.log(time);
}

process.argv.forEach(function (val, index, array) {
    console.log('Argument ' + index + ': ' + val);
});

console.log('Press ^C to finish');

if (process.argv[2] > 0)
    setInterval(show, 500);

function finish(lifes) {
    //console.log('lifes ===> ' + lifes);
    return function closure() {
        lifes--;
        console.log('\tSIGINT detected. You have ' + lifes + ' life(s) left');
        if (lifes <= 0) {
            console.log('Finishing...');
            process.exit(1);
        }
    }
}

process.on('SIGINT', finish(process.argv[2]));