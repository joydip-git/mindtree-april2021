const { Person } = require('./person')

class Trainer extends Person {
    constructor(name, id, subject) {
        super(name, id)
        this.subject = subject;
    }
    show() {
        return `${super.show()}, ${this.subject}`;
    }
}

// function Trainer(name, id, subject) {
//     Person.call(this, name, id)
//     this.subject = subject;
// }
// Trainer.prototype.show = () => {
//     return `${Person.prototype.show.apply(this)}, ${this.subject}`;
// }

module.exports.Trainer = Trainer;