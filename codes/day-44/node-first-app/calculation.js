const add = () => {
    let firstNumber = 10;
    let secondNumber = 20
    let result = firstNumber + secondNumber
    console.log(result);
}

const multiply = () => {
    let firstNumber = 10;
    let secondNumber = 20
    let result = firstNumber * secondNumber
    console.log(result);
}

// module.exports = {
//     add: add
// }

module.exports['default'] = multiply
module.exports['add'] = add