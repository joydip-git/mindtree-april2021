const numbers = [1, 3, 4, 2, 6, 8, 7, 5, 0, 9]
const evenNumbers = numbers.filter(function (num) {
    return num % 2 == 0
})
console.log(evenNumbers)

const resultantNumbers = numbers.map(function (num) {
    return 'Number: ' + (num * 5)
})
const names = ['joydip', 'Saad', 'Sai']
const resultNames = names.map(function (name) {
    return name + ': ' + (name.indexOf('a') !== -1)
})
console.log(resultantNumbers)
console.log(resultNames)

/*
function transform(arr, fnRef) {
    const result = [];
    for (let index = 0; index < arr.length; index++) {
        const val = arr[index];
        let res = fnRef(val)
        result.push(res)
    }
    return result
}
*/

// const multipliedNumbers = transform(numbers, function (num) {
//     return num * 5
// })
// console.log(multipliedNumbers)

// const nameWithGreetings = transform(names, function (name) {
//     return 'Hello ' + name;
// })
// console.log(nameWithGreetings)