/*function Greeter(name) {
    this.name = name
}
const greeterPrototype = Greeter.prototype;
greeterPrototype.sayHi = function () {
    console.log(`Hi ${this.name}`)
}
greeterPrototype.sayBye = function () {
    console.log(`Bye ${this.name}`)
}
*/
class Greeter {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi ${this.name}`)
    }
    sayBye() {
        console.log(`Bye ${this.name}`)
    }
}
console.log(Greeter.prototype)
const anilGreeter = new Greeter('anil');
console.log(anilGreeter)
anilGreeter.sayHi()
anilGreeter.sayBye()

const sunilGreeter = new Greeter('sunil');
console.log(sunilGreeter)
sunilGreeter.sayHi()
sunilGreeter.sayBye()

