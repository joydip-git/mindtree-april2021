function person(name, id, isManager) {
    this.personName = name
    this.personId = id
    this.isManager = isManager
    // this.print = function () {
    //     console.log(this)
    //     return this.personName + ' ' + this.personId
    // }

    //sol 2: use arrow function
    // print function will be bound to the same object as that of the person function currently bound to
    this.print = () => {
        console.log(this)
        return this.personName + ' ' + this.personId
    }
}
const anilPerson = new person('anil', 1, true)
const sunilPerson = new person('sunil', 2, false)

const people = [anilPerson, sunilPerson]

function printInfo(printFnRef) {
    console.log(printFnRef())
}
for (let i = 0; i < people.length; i++) {
    const personObj = people[i]
    printInfo(personObj.print)
}
//value properties
// console.log(anilPerson.personName)
// console.log(anilPerson['personId'])

// for (let propName in anilPerson) {
//     let propValue = anilPerson[propName]
//     console.log(propName + ':' + propValue)
// }

//functional properties
//console.log(anilPerson['print']())
//console.log(anilPerson.print())

//const printFn = anilPerson['print']
// const printFn = anilPerson.print;
// const someInfo = printFn()
// console.log(someInfo)

// const sunilPrintFn = sunilPerson.print;
// const sunilInfo = sunilPrintFn()
// console.log(sunilInfo)

//sol no: 1 
//use bind() method to bind yopur function to the desired object
// const boundPrintFn = printFn.bind(anilPerson)
// const info = boundPrintFn()
// console.log(info)

