import * as actionTypes from './actionTypes'

export const increaseValueActionCreator = (incrementValue: number) => {
    return {
        type: actionTypes.INCREASE_VALUE_ACTION,
        data: incrementValue
    }
}

export const decreaseValueActionCreator = (decrementValue: number) => {
    return {
        type: actionTypes.DECREASE_VALUE_ACTION,
        data: decrementValue
    }
}

export const updateNameActionCreator = (newName: string) => {
    return {
        type: actionTypes.UPDATE_NAME_ACTION,
        data: newName
    }
}

export const getContactsSuccessActionCreator = (contacts: any) => {
    return {
        type: actionTypes.GET_CONTACTS_SUCCESS_ACTION,
        data: contacts
    }
}

export const getContactsFailureActionCreator = (errMessage: any) => {
    return {
        type: actionTypes.GET_CONTACTS_FAILURE_ACTION,
        data: errMessage
    }
}

export const getContactDetailSuccessActionCreator = (contactObj: any) => {
    return {
        type: actionTypes.GET_CONTACT_SUCCESS_ACTION,
        data: contactObj
    }
}

export const getContactDetailFailureActionCreator = (errMessage: any) => {
    return {
        type: actionTypes.GET_CONTACT_FAILURE_ACTION,
        data: errMessage
    }
}