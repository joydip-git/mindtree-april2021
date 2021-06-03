import { employees } from "../data/employeeRepository";
import { Employee } from "../models/employee";

export const addEmployee = (newEmployee: Employee) => {
    let found: Employee;
    let status = false;
    if (employees.length > 0) {
        found = employees.find((e) => {
            return e.Id === newEmployee.Id;
        })
    }

    if (found === undefined || employees.length === 0) {
        employees.push(newEmployee)
        status = true;
    }
    return status;
}

export const showEmployees = () => {

    const tbody = document.getElementById('employeeTBody')

    if (employees.length > 0) {
        employees.forEach(function (e) {
            // console.log(`${e.Name} has salary: ${e.calculateSalary()}`)
            const row = document.createElement('tr');

            const tdName = document.createElement('td')
            tdName.innerText = e.Name

            const tdSalary = document.createElement('td')
            tdSalary.innerText = e.calculateSalary().toString()

            row.appendChild(tdName)
            row.appendChild(tdSalary)
            tbody.appendChild(row)
        })
    }
}