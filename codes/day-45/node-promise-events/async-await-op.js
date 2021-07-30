/**
 * const testFn = () => {
    return new Promise(
        (resolve, reject) => {
            resolve('test')
        }
    )
}

const testFn = () => {
    return Promise.resolve('test')
}
 */
const testFn = async () => {
    return 'test'
}

testFn()
    .then(
        (data) => console.log(data),
        (e) => console.log(e)
    )

const showResult = async () => {
    let result = await testFn()
    console.log(result)
}
showResult()