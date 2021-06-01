//any object created using object literal syntax will be automatically linked to prototype object of 'Object' function
const anilObj = {
    personName: 'Anil',
    personId: 1,
    print: function () {
        return this.personName + ' ' + this.personId
    }
}

//Person function's prototype object is automatically linked to the prototype object of the 'Object' function
function person(name, id) {
    this.personName = name;
    this.personId = id;
    this.print = function () {
        return this.personName + ' ' + this.personId
    }
    //return this;
}
//can access the prototype object associated with this function
//NOTE: THE PROTOTYPE OBJECT AND THE OWNER OBJECT OF A FUNCTION ARE NOT SAME (Excpet in few cases)


const anilPerson = new person('anil', 1)
const sunilPerson = new person('sunil', 2)
//whenever any new object JS object is created by calling a constructor function, then that object automatically gets linked to the prototype object of the function (through __proto__ property)
//prototype objects will have two properties (min): 'constructor' and '__proto__'
//regular objects will have min one property: __proto__
console.log(person.prototype)
console.log(anilPerson.__proto__)
console.log(sunilPerson.__proto__)
console.log(person.prototype === anilPerson.__proto__)

person.prototype.sayHi = function () {
    console.log('Hi...')
}
console.log(anilPerson.hasOwnProperty('sayHi'))
console.log(person.prototype.hasOwnProperty('sayHi'))
console.log(Object.prototype.hasOwnProperty('sayHi'))
anilPerson.sayHi();
anilPerson.print();

function add(a, b) {
    console.log(a + b)
}
//add(1, 2)