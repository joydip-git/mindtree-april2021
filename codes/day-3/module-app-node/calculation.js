//const add = (a, b) => (a + b)
function add(a, b) {
    return (a + b)
}
function subtract(a, b) {
    return (a - b)
}
const results = []
//console.log(module)

//Common JS format for exporting
const calculationModuleMembers = {
    add: add,
    subtract: subtract,
    results: results
}
module.exports = calculationModuleMembers
//console.log(module)

//ES6 format for exporting
// export function add(a, b) {
//     return (a + b)
// }
// export function subtract(a, b) {
//     return (a - b)
// }
// export const results = []