const { EventEmitter } = require('events')

function addNumbers(x, y) {
    return (x + y)
}
function subtractNumbers(x, y) {
    return (x - y)
}
function divideNumbers(x, y) {
    return (x / y)
}

const calcEventEmitter = new EventEmitter()
calcEventEmitter.on('start', (startMessage) => console.log(startMessage))
calcEventEmitter.on('end', (errorMessage) => console.log(errorMessage))
calcEventEmitter.on('error', (endMessage) => console.log(endMessage))

function calculate(operation, ...args) {
    calcEventEmitter.emit('start', 'calculation started')
    let result = operation(args[0], args[1])
    if (result === Infinity) {
        calcEventEmitter.emit('error', `error: can't divide ${args[0]} by ${args[1]}`)
    } else {
        calcEventEmitter.emit('end', `operation ended and the result is: ${result}`)
    }
}

calculate(addNumbers, 10, 20)
calculate(subtractNumbers, 10, 5)
calculate(divideNumbers, 10, 0)
