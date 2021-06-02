// const { addEmployee, showEmployees } = require('./manager/employeeManager')
// const { Developer } = require('./models/developer')
// const { Hr } = require('./models/hr')

import { addEmployee, showEmployees } from "./manager/employeeManager";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

const anilDev = new Developer('anil', 1, 1000, 2000, 3000, 4000)
let statusOne = addEmployee(anilDev)
console.log(statusOne)

const anilCopy = new Developer('anil', 1, 1000, 2000, 3000, 4000)
let statusTwo = addEmployee(anilCopy)
console.log(statusTwo)

const sunilHr = new Hr('sunil', 2, 2000, 3000, 4000, 5000)
let addStatus = addEmployee(sunilHr)
console.log(addStatus)

showEmployees()

