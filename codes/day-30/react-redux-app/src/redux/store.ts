import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import { nameStateReducer, numberStateReducer, allContactsStateReducer } from './reducers'

const rootReducer = combineReducers({
    nameStateRef: nameStateReducer,
    numberStateRef: numberStateReducer,
    allContactsStateRef: allContactsStateReducer
})

const loggerMiddleware = createLogger()
const allMiddleWares = applyMiddleware(loggerMiddleware, thunkMiddleware)

export const appStore = createStore(
    rootReducer,
    allMiddleWares
)
