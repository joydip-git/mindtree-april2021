import * as actionTypes from './actionTypes'
import { nameState, numberState, allConcatsState, contactDetailState } from './appState'

export const numberStateReducer = (prevStateObj = numberState, actionObj: any) => {
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

export const nameStateReducer = (prevStateObj = nameState, actionObj: any) => {
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

export const allContactsStateReducer = (prevState = allConcatsState, actionObj: any) => {
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
    return newState
}

export const contactDetailStateReducer = (prevState = contactDetailState, actionObj: any) => {
    let newState = null;
    switch (actionObj.type) {
        case actionTypes.GET_CONTACT_SUCCESS_ACTION:
            newState = {
                ...prevState,
                contact: actionObj.data,
                errorMessage: ''
            }
            break;

        case actionTypes.GET_CONTACT_FAILURE_ACTION:
            newState = {
                ...prevState,
                contact: [],
                errorMessage: actionObj.data
            }
            break;

        default:
            newState = {
                ...prevState
            }
            break;
    }
    return newState
}