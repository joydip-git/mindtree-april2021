const { readFile } = require("fs")

function readData() {
    return new Promise(
        (resolve, reject) => {
            readFile(
                './records.json',
                (err, data) => {
                    if (err)
                        reject(err)
                    if (data)
                        resolve(data)
                }
            )
        }
    )
}

readData()
    .then(
        (data) => console.log(JSON.parse(data)),
        (err) => console.log(err)
    )

console.log('continue....');