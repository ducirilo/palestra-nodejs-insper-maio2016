var Person;

module.exports = Person = {
    create: makePerson
}

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