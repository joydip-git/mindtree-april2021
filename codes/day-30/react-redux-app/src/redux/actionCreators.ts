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