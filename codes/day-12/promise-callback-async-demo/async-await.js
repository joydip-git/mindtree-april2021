// async function divide(a,b){}
const divide = async (a, b) => {
    let res = a / b
    if (res !== Infinity)
        return res
    else
        throw new Error(`can't divide by zero`)
    // return new Promise((resolve, reject) => {
    //     let res = a / b
    //     if (res !== Infinity)
    //         resolve(res)
    //     else
    //         reject(`can't divide by zero`)
    // })
}

function add(a, b) {
    return (a + b)
}
const divResPromise = divide(10, 0)
divResPromise
    .then(
        (result) => {
            console.log(`Resolved: ${result}`);
        },
        (result) => {
            console.log(`Rejected: ${result}`);
        }
    )
/*
const getData = async () => {
//await will help you to get the result out of the either rejected or resolved promise, without using then() or catch() method
//BUT:
//a. await blocks the current thread
//b. await can be used inside a function declared with async
return await divide(10, 0)
}
//since the getdata is aync function luckily the current thread will not be blocked (thouigh await tries to block the thread)
getData()
.then(
    (res) => console.log(res),
    (e) => console.log(e)
)
*/
//await divide(10, 0)
console.log(add(10, 3))
