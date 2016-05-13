function show() {
    var time = (new Date()).toTimeString().slice(0,8);
    console.log(time);
}
setInterval(show, 500);
console.log('Press ^C to stop');

process.on('SIGINT', function () {
  console.log('SIGINT detected. Finishing...');
  process.exit(1);
});