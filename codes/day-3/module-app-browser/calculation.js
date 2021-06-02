//const add = (a, b) => (a + b)
function add(a, b) {
    return (a + b)
}
function subtract(a, b) {
    return (a - b)
}
const calculationModuleMembers = {
    add: add,
    subtract: subtract,
    results: results
}
module.exports = calculationModuleMembers