function person(name, id, isManager) {
    this.personName = name
    this.personId = id
    this.isManager = isManager
    this.print = function () {
        return this.personName + ' ' + this.personId
    }
    console.log(this)
}

//person('anil', 1, true)

const anilPerson = new person('anil', 1, true)
// const sunilPerson = new person('sunil', 2, false)

// console.log(global.personName)
// console.log(global.personId)
// console.log(global.isManager)
// console.log(global.print)

function add(x, y) {
    console.log(x + y)
}
add(1, 2)