class Employee {
    constructor(name, id, basic, da, hra) {
        this.name = name
        this.id = id
        this.basicPayment = basic
        this.daPayment = da
        this.hraPayment = hra
    }
    calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment
    }
}
module.exports = {
    Employee
}