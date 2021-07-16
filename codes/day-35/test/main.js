//strict mode on
//'use strict'
//constructor function
function Person(pname, salary) {
    this.pname = pname;
    this.salary = salary;
    //return this;
    // this.getInfo = function () {
    //     return this.pname + ' ' + this.salary
    // }
    // this.getInfo = this.getInfo.bind(this)

    this.getInfo = () => {
        return this.pname + ' ' + this.salary
    }
}
// Person.prototype.getInfo = function () {
//     return this.pname + ' ' + this.salary
// }

//Person('madhu', 1000)
//console.log(window.pname)
//console.log(window.salary)
//console.log(window.getInfo())
const madhuPerson = new Person('madhu', 1000)
console.log(madhuPerson.pname)
console.log(madhuPerson.salary)
console.log(madhuPerson.hasOwnProperty('getInfo'))
console.log(madhuPerson.__proto__.hasOwnProperty('getInfo'))


console.log(madhuPerson.getInfo())
function print(callbackFnRef) {
    console.log(callbackFnRef())
}
let fnRef = madhuPerson.getInfo;
print(fnRef)
//print(fnRef.bind(madhuPerson))

function add(a, b) {
    return a + b
}
function calculate(fnRef, x, y) {
    fnRef(x, y)
}
calculate(add, 10, 20)
calculate((a, b) => {
    return a - b
}, 10, 5)

calculate(function (a, b) {
    return a * b
}, 10, 20)

function foo() {
    this.x = 10;

    //1. store the reference of the owner of the outer function in a variable and use that reference in the inner function (since the outer ana dinner functions have different owners)
    // let ref = this;
    // var fn = function () {
    //     this.y = 20
    //     console.log(ref.x + this.y)
    // }
    // fn()

    //make the owner of the inner and the outer same
    //2. bind fn to the outer functions' owner
    // var fn = function () {
    //     this.y = 20
    //     console.log(this.x + this.y)
    // }
    // fn = fn.bind(this)
    // fn()

    //make the owner of the inner and the outer same
    //3. arrow function
    var fn = () => {
        this.y = 20
        console.log(this.x + this.y)
    }
    fn()
}
new foo()


class Product {
    constructor() {
        //1. 
        //this.handler = this.handler.bind(this)
    }
    state = {

    }
    // handler() {
    //error because handler is not bound to product object by default
    //since it is called when button is clicked, it will bound to button object and this keyword will refer to button object
    //so this.state will throw error, as state property is not part of button
    //please write this method with arrow function style to bind the method with product object
    //  console.log(this.state)
    //}

    //2.
    handler = () => {
        console.log(this.state)
    }
    render() {
        return (
            // <button onclick={this.handler}></button>
            //3.
            //<button id='button1' onclick={this.handler.bind(this)}></button>
            //<button id='button2' onclick={this.handler.bind(this)}></button>
        )
    }
}

new Product().render()
