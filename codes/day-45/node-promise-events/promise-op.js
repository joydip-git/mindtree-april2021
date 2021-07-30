const { readFile } = require('fs')

const readData = (callback) => {
    readFile('./data.txt', callback)
}

const formatDataPromiseFn = () => {
    let promiseObj = new Promise(
        (resolveFnRef, rejectFnRef) => {
            const callbackFn = (err, data) => {
                if (err)
                    // console.log(err)
                    rejectFnRef(err)

                if (data) {
                    //console.log(data.toString())
                    resolveFnRef(data.toString())
                }
            }
            readData(callbackFn)
        }
    )
    return promiseObj
}

//Promise is a proxy for the data/error
let formatDataPromise = formatDataPromiseFn()

//extract the result property value (data/error)
formatDataPromise
    .then(
        //when promise is resolved, the result (data) will be passed to this callback
        (data) => {
            console.log(data)
        },
        //when promise is rejected, the result (rejection reason) will be passed to this callback
        (err) => {
            console.log(err)
        }
    )
console.log('hello')

// const formatDataAsync = async () => {
//     const callbackFn = (err, data) => {
//         if (err) { }

//         if (data) { }
//     }
//     readData(callbackFn)
// }