class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    show() {
        return `${this.name}, ${this.id}`;
    }
}
module.exports.Person = Person
//module.exports = { Person: Person }