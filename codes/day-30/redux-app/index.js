const { store } = require('./redux/store')
const { increaseValueActionCreator, decreaseValueActionCreator, updateNameActionCreator } = require('./redux/actionCreators')

//6. dispatch the actions against the store
let increaseByFiveActionObj = increaseValueActionCreator(5)
store.dispatch(increaseByFiveActionObj)
console.log(store.getState())

let decreaseByTwoActionObj = decreaseValueActionCreator(2)
store.dispatch(decreaseByTwoActionObj)
console.log(store.getState())

let increaseByThreeActionObj = increaseValueActionCreator(3)
store.dispatch(increaseByThreeActionObj)
console.log(store.getState())

let updateNameActionObj = updateNameActionCreator('sunil')
store.dispatch(updateNameActionObj)
console.log(store.getState())