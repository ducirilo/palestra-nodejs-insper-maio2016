function now() {
    return (new Date()).toTimeString().slice(0,8);
}

function show() {
    console.log(now());
}

function show_nested() {
    setTimeout(function() {console.log('\t\t'+now());},
			   Math.floor((Math.random() * 1000) + 1))
	
}

setInterval(show, 1000);
setInterval(show_nested, 700);
console.log('Press ^C to stop');