class person {
    constructor(name, id, isManager) {
        this.personName = name
        this.personId = id
        this.isManager = isManager
    }
    //must use a leading object while calling this method
    print() {
        //in this style the print function does not get bound to any object (not even window/global) by default
        //so while caling this use a leading object
        //or bind the function to some object
        return this.personName + ' ' + this.personId
    }

    //binding the function to an object to which person is bound
    // print = () => {
    //     //in this style the print function does not get bound to any object (not even window/global) by default
    //     //so while caling this use a leading object
    //     //or bind the function to some object
    //     return this.personName + ' ' + this.personId
    // }
}
const anilPerson = new person('anil', 1, true)
//while caling this using a leading object: anilPerson
console.log(anilPerson.print())

//
const printFn = anilPerson.print;
console.log(printFn())
/*
function person(name, id, isManager) {
    this.personName = name
    this.personId = id
    this.isManager = isManager
    this.print = function () {
        return this.personName + ' ' + this.personId
    }
    console.log(this)
}
*/