const actionTypes = require('./actionTypes')
const { dataState } = require('./dataState')
//4. reducer function to interact with the state: manipulate the previous state and return the new state object to the store
const dataStateReducer = (prevStateObj = dataState, actionObj) => {
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.UPDATE_NAME_ACTION:
            newState = {
                ...prevStateObj,
                name: actionObj.data
            }
            break;

        case actionTypes.INCREASE_VALUE_ACTION:
            newState = {
                ...prevStateObj,
                value: actionObj.data + prevStateObj.value
            }
            break;

        case actionTypes.DECREASE_VALUE_ACTION:
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

module.exports = {
    dataStateReducer
}