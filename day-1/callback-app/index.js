/*
function filterNumbers(array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const val = array[index]
        if (val % 2 == 0) {
            result.push(val)
        }
    }
    return result;
}
function filterPlacess(array) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const val = array[index]
        if (val.indexOf('a') !== -1) {
            result.push(val)
        }
    }
    return result;
}
*/

function filter(arr, fn) {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        const val = arr[index]
        let status = fn(val)
        if (status) {
            result.push(val)
        }
    }
    return result;
}

const numbers = [1, 3, 4, 2, 6, 8, 7, 5, 0, 9]
//function expression
// const isEven = function () { }

//function declaration
// function isEven(num) {
//     return num % 2 === 0 ? true : false;
// }
// const evenNumbers = filterNumbers(numbers)
// const evenNumbers = filter(numbers, isEven)

const evenNumbers = filter(numbers, function (num) {
    return num % 2 === 0 ? true : false;
})
console.log(evenNumbers)


const places = ['bangalore', 'chennai', 'mumbai', 'kolkata']
// function hasSubString(place) {
//     return place.indexOf('e') !== -1;
// }
// const filterdPlaces = filterPlacess(places)
// const filterdPlaces = filter(places, hasSubString)
const filterdPlaces = filter(places, function (place) {
    return place.indexOf('e') !== -1;
})
console.log(filterdPlaces)