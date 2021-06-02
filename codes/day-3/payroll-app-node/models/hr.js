const { Employee } = require('./employee')

class Hr extends Employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.gratuityPayment = gratuity
    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPayment
    }
}

module.exports = {
    Hr
}