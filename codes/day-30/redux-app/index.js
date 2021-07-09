const { createStore } = require('redux')
//1. state in the redux store
let dataState = {
    value: 0,
    name: 'anil'
}

//2. action type list
const INCREASE_VALUE_ACTION = 'INCREASE_VALUE'
const DECREASE_VALUE_ACTION = 'DECREASE_VALUE'
const UPDATE_NAME_ACTION = 'UPDATE_NAME'

//3. action creators
const increaseValueActionCreator = (incrementValue) => {
    return {
        type: INCREASE_VALUE_ACTION,
        data: incrementValue
    }
}

const decreaseValueActionCreator = (decrementValue) => {
    return {
        type: DECREASE_VALUE_ACTION,
        data: decrementValue
    }
}

const updateNameActionCreator = (newName) => {
    return {
        type: UPDATE_NAME_ACTION,
        data: newName
    }
}

//4. reducer function to interact with the state: manipulate the previous state and return the new state object to the store
const dataStateReducer = (prevStateObj = dataState, actionObj) => {
    let newState = null;
    switch (actionObj.type) {
        case UPDATE_NAME_ACTION:
            newState = {
                ...prevStateObj,
                name: actionObj.data
            }
            break;

        case INCREASE_VALUE_ACTION:
            newState = {
                ...prevStateObj,
                value: actionObj.data + prevStateObj.value
            }
            break;

        case DECREASE_VALUE_ACTION:
            newState = {
                ...prevStateObj,
                value: prevStateObj.value - actionObj.data
            }
            break;

        default:
            newState = {
                ...prevStateObj
            }
            break;
    }
    return newState;
}

//5. creating a redux store
const store = createStore(dataStateReducer)

console.log(store.getState())

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

/**
 * {
 *  stateReference: dataState,
 *  reducerReference:dataStateReducer,
 *  dispatch:(actionObj)=>{
 *     this.stateReference = this.reducerReference(this.stateReference,actionObj)
 *  }
 * getState:()=>{
 *  return this.stateReference
 * }
 * }
 */


