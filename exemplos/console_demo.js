function agora() {
  var dt = Date().slice(16, 24);
  console.log(dt);
}

var t = setInterval(agora, 1000);

clearInterval(t);