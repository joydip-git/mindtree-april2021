const path = './data.txt'
const fs = require('fs')
fs.readFile(path, function (error, data) {
    if (error)
        console.log(error)
    if (data)
        console.log(data.toString())
})