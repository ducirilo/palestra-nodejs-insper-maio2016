function makePerson(name, birthDate, email) {
    return {
        setName: function(newValue) {
            name = newValue;
        },
        getName: function() {
            return name;
        },
        setBirthDate: function(newValue) {
            birthDate = newValue;
        },
        getBirthDate: function() {
            return birthDate;
        },
        setEmail: function(newValue) {
            email = newValue;
        },
        getEmail: function() {
            return email;
        },
        toString: function() {
            return JSON.stringify({
                'name': name,
                'birtDate': birthDate,
                'email': email
            })
        }
    }
}

var p1 = makePerson('Eduardo', '11/07/1986', 'eduardo.cirilo@acesso.io');
var p2 = makePerson('Maria', '14/12/1980', 'maria@maria.com');

console.log('p1: ' + p1.toString());
console.log('p2: ' + p2.toString());

p1.setName('Carlos Eduardo Cirilo');
p1.setEmail('ducirilo@gmail.com');
console.log('p1 modified: ' + p1.toString());


