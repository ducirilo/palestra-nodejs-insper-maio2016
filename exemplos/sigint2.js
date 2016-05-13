function show() {
  var time = (new Date()).toTimeString().slice(0,8);
  console.log(time);
}
setInterval(show, 500);
console.log('Press ^C to finish');

process.on('SIGINT', function () {
  console.log('\tSIGINT detected.');
  process.on('SIGINT', function () {
    console.log('\tFinishing...');
    process.exit(1);
  });
});