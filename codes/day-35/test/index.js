class Person {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getInfo() {
        return this.name + ' ' + this.salary
    }
}
class Trainer extends Person {
    constructor(name, salary, subject) {
        super(name, salary)
        this.subject = subject
    }
    getInfo() {
        return super.getInfo()
    }
}
const joydipTrainer = new Trainer('joydip', 1000, 'JavaScript')

