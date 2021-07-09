const actionTypes = require('./actionTypes')
//3. action creators
const increaseValueActionCreator = (incrementValue) => {
    return {
        type: actionTypes.INCREASE_VALUE_ACTION,
        data: incrementValue
    }
}

const decreaseValueActionCreator = (decrementValue) => {
    return {
        type: actionTypes.DECREASE_VALUE_ACTION,
        data: decrementValue
    }
}

const updateNameActionCreator = (newName) => {
    return {
        type: actionTypes.UPDATE_NAME_ACTION,
        data: newName
    }
}

const getContactsSuccessActionCreator = (contacts) => {
    return {
        type: actionTypes.GET_CONTACTS_SUCCESS_ACTION,
        data: contacts
    }
}

const getContactsFailureActionCreator = (errMessage) => {
    return {
        type: actionTypes.GET_CONTACTS_FAILURE_ACTION,
        data: errMessage
    }
}

module.exports = {
    increaseValueActionCreator,
    decreaseValueActionCreator,
    updateNameActionCreator,
    getContactsSuccessActionCreator,
    getContactsFailureActionCreator
}