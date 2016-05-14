var Person = require('./my_modules/person.js');

var p1 = Person.create('Eduardo', '11/07/1986', 'eduardo.cirilo@acesso.io');
var p2 = Person.create('Maria', '14/12/1980', 'maria@maria.com');

console.log('p1: ' + p1.toString());
console.log('p2: ' + p2.toString());

p1.setName('Carlos Eduardo Cirilo');
p1.setEmail('ducirilo@gmail.com');
console.log('p1 modified: ' + p1.toString());


