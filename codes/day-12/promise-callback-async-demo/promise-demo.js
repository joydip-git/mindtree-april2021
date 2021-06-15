function divide(a, b) {
    //when you create a promise object you must pass an callback function, known as excecutor function, to the constructor of promise, with two arguments
    //JS passes a callback function to first argument, which you can use to change the promise state from pending to 'fulfilled' and also to set result to a meaningful value
    //JS passes a callback function to second argument, which you can use to change the promise state from pending to 'rejected' and also to set result to the reason of rejection
    const dividePromise = new Promise((resolveFn, rejectFn) => {
        //executor function code
        // setTimeout(() => {
        let res = a / b
        if (res === Infinity) {
            //let err = new Error(`can't divide by zero`)
            //rejectFn(err)
            rejectFn(`can't divide by zero`)
        } else {
            resolveFn(res)
        }
        // }, 2000)
    });
    return dividePromise;
}

function add(a, b) {
    return (a + b)
}
const divResPromise = divide(10, 0)
divResPromise
    .then(
        (result) => {
            //this callback is promise is in 'fulfilled' state
            //result here will give you the data
            console.log(`Resolved: ${result}`);
        },
        (result) => {
            //this callback is promise is in 'rejected' state
            //result here will give you the reason for rejection
            console.log(`Rejected: ${result}`);
        }
    )
// .catch((result) => {
//     //this is for if you are interested only in rejected/error state
//     console.log(result);
// })

console.log(add(10, 3))
