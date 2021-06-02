const { Employee } = require('./employee')

class Developer extends Employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.incentivePayment = incentive
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePayment
    }
}

module.exports = {
    Developer
}