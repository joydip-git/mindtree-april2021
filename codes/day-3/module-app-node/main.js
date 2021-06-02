//Common JS format of importing
const { add, subtract, results } = require('./calculation')
const addRes = add(12, 13)
const subRes = subtract(12, 4)
// const resultsArray = results;
// resultsArray.push(addRes, subRes)

// const calculationMembers = require('./calculation')
// const addRes = calculationMembers.add(12, 13)
// const subRes = calculationMembers.subtract(12, 4)
// const resultsArray = calculationMembers.results;

console.log(addRes)
console.log(subRes)


//ES6 module format for importing

// import { add, subtract, results } from './calculation'

// const addRes = add(12, 13)
// const subRes = subtract(12, 4)
// const resultsArray = results;
// resultsArray.push(addRes, subRes)

// console.log(addRes)
// console.log(subRes)