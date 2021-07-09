const actionTypes = require('./actionTypes')
const { numberState, nameState, contactState } = require('./appState')
//4. reducer function to interact with the state: manipulate the previous state and return the new state object to the store
const numberStateReducer = (prevStateObj = numberState, actionObj) => {
    let newState = null;
    switch (actionObj.type) {
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

const nameStateReducer = (prevStateObj = nameState, actionObj) => {
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.UPDATE_NAME_ACTION:
            newState = {
                ...prevStateObj,
                name: actionObj.data
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

const contactStateReducer = (prevState = contactState, actionObj) => {
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_CONTACTS_SUCCESS_ACTION:
            newState = {
                ...prevState,
                contacts: actionObj.data,
                errorMessage: ''
            }
            break;

        case actionTypes.GET_CONTACTS_FAILURE_ACTION:
            newState = {
                ...prevState,
                contacts: [],
                errorMessage: actionObj.data
            }
            break;

        default:
            newState = {
                ...prevState
            }
            break;
    }
    console.log(newState)
    return newState
}
module.exports = {
    numberStateReducer,
    nameStateReducer,
    contactStateReducer
}