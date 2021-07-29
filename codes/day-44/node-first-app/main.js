//1.
// module.exports = {
//     add: add
// }
//or
//module.exports.add = add

//require() method returns the reference of the object (module) representing the calculation.js file, where add is a property (referring a function)
//const calcModule = require('./calculation')

//you now invoke the functional property of the module object
//calcModule.add()

//2.
//module.exports = add
//in this case require() method is NOT returning any module object reference, rather returning direct refernce to the functional property: "add"
//here x or anything that you use is an alias/refernce to the add function
//const x = require('./calculation')
//x()
// const add = require('./calculation')
// add()

const { default: multi, add } = require('./calculation')
multi()
add()
console.log('welcome to Node JS');
//console.log(module);