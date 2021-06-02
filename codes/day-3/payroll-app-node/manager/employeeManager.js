const { employees } = require("../data/employeeRepository")

const addEmployee = (newEmployee) => {
    let found;
    let status = false;
    if (employees.length > 0) {
        found = employees.find((e) => {
            return e.id === newEmployee.id;
        })
    }

    if (found === undefined || employees.length === 0) {
        employees.push(newEmployee)
        status = true;
    }
    return status;
}

const showEmployees = () => {
    if (employees.length > 0) {
        employees.forEach(function (e) {
            console.log(`${e.name} has salary: ${e.calculateSalary()}`)
        })
    }
}
module.exports = {
    addEmployee,
    showEmployees
}