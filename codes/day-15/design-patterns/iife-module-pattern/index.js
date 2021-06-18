var objRef = creatorModule.getInstance()
console.log(objRef)

var addResult = calculationModule.add(10, 20)
var subResult = calculationModule.subtract(10, 5)

console.log(addResult)
console.log(subResult)

const anilPerson = new personModule.person('anil', 1, 1000)
console.log(anilPerson.print())