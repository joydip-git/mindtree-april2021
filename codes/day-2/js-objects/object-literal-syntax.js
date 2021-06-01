//1. object literal syntax
var anilObj = {
    //value properties
    name: 'Anil',
    id: 1,
    isManager: true,
    //functional property
    print: function () {
        return this.name + ', ' + this.id + ' ';
    }
}

anilObj.location = 'Bangalore'
//dot operator
console.log(anilObj.name)
//indexer (string based)
console.log(anilObj['isManager'])

//for...in loop: to fetch every property from an object
for (let propName in anilObj) {
    let propValue = anilObj[propName]
    console.log(propName + ':' + propValue)
}

var sunilObj = {
    //value properties
    name: 'Sunil',
    id: 2,
    isManager: false,
    //functional property
    print: function () {
        return this.name + ', ' + this.id + ' ';
    }
}