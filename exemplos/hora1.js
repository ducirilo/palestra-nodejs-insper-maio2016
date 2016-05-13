function show() {
    var hora = (new Date()).toTimeString().slice(0,8);
    console.log(hora);
}

setInterval(show, 1000);
console.log('Press ^C to stop');