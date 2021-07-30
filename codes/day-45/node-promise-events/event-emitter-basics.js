//EventEmitter from 'events' module
const { EventEmitter } = require('events')

function createAndFire() {
    //1. create an object of event emitter
    const eventEmitter = new EventEmitter()

    //2. register an event
    eventEmitter.on('start', (data) => {
        console.log('started: ' + data)
    })

    //3. trigger/fire that 'start' event
    eventEmitter.emit('start', 100)
}
createAndFire()

function addNumbers(x, y) {
    console.log(x + y)
}
function subtractNumbers(x, y) {
    console.log(x - y)
}

const calculationEventEmitter = new EventEmitter()

calculationEventEmitter.on('add', addNumbers)
calculationEventEmitter.on('subtract', subtractNumbers)

calculationEventEmitter.emit('add', 100, 200)
calculationEventEmitter.emit('subtract', 10, 5)

calculationEventEmitter.removeListener('subtract', subtractNumbers)

calculationEventEmitter.emit('add', 100, 200)
calculationEventEmitter.emit('subtract', 10, 5)

calculationEventEmitter.removeAllListeners()

calculationEventEmitter.emit('add', 100, 200)
calculationEventEmitter.emit('subtract', 10, 5)
