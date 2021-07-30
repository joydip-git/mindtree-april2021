const { readFile } = require('fs')

const fileCallbackFn = (err, data) => {
    if (err)
        console.log(err)

    if (data)
        console.log(data.toString())
}
readFile('./data.txt', fileCallbackFn)
const add = (a, b) => {
    console.log(a + b)
}
add(10, 20)