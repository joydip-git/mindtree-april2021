const fs = require('fs')

function subtract(x, y) {
    let res = x - y
    console.log(res);
}

function showData(err, data) {
    if (err)
        console.log(err);
    if (data) {
        console.log(JSON.parse(data));
    }
}

//readFile is a Node JS asynchronous function and executed through a separate Node JS thread, not in the JS callstack, 
//BUT the showData() method is executed in JS callstack(it is placed in an EventQueue [used by node js] and then pushed into JS callstack by event-loop service worker when that JS callstack is free)

// function readData(callback) {
//     //fs.readFile('./data.txt', callback)
//     fs.readFile('./records.json', callback)
// }
// setTimeout(() => {
//     readData(showData)
// }, 2000)

fs.readFile('./records.json', showData)
// let records = fs.readFileSync('./records.json');
// console.log(JSON.parse(records));
subtract(10, 5)