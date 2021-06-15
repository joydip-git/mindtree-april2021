// function main() {
function showMessage() {
    const message = 'hello'
    console.log(message);
}
function add(a, b) {
    console.log(a + b)
}
// showMessage()
// add(10, 20)
//setTimeOut() function is provided by both: browser (Any) runtime, and Node JS runtime
//THIS IS NOT PART OF JS

setTimeout(() => {
    showMessage()
}, 2000)

setTimeout(() => {
    add(10, 20)
}, 1000)
//console.log(process);
let x = 10;
let y = 20;
let res = x - y
console.log(res);
// }
// main()