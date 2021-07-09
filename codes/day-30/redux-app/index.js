const { store } = require('./redux/store')
const { increaseValueActionCreator, decreaseValueActionCreator, updateNameActionCreator, getContactsActionCreator, getContactsSuccessActionCreator, getContactsFailureActionCreator } = require('./redux/actionCreators')
const { getContacts } = require('./service/contractservice')

//initial state
//console.log(store.getState())

/*
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
*/

getContacts()
    .then(
        (dataResp) => {
            //console.log(dataResp.data)
            const dataAction = getContactsSuccessActionCreator(dataResp.data)
            store.dispatch(dataAction)
        },
        (errorResp) => {
            const errorAction = getContactsFailureActionCreator(errorResp.message)
            store.dispatch(errorAction)
        }
    )
//console.log(store.getState())