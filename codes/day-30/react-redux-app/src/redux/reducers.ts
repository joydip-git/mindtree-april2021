import * as actionTypes from './actionTypes'
import { nameState, numberState } from './appState'

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