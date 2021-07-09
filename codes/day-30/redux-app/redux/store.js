const { createStore, combineReducers, applyMiddleware } = require('redux')
const { createLogger, default: logger } = require('redux-logger')
const thunk = require('redux-thunk')
const { nameStateReducer, numberStateReducer, contactStateReducer } = require('./reducers')

//5. creating a redux store by first merging the reducers
const rootReducer = combineReducers({
    nameStateRef: nameStateReducer,
    numberStateRef: numberStateReducer,
    contactStateRef: contactStateReducer
})

const loggerMiddleware = createLogger()
const thunkMiddleware = thunk.default
const allMiddleWares = applyMiddleware(loggerMiddleware, thunkMiddleware)

const store = createStore(
    rootReducer,
    allMiddleWares
)
module.exports = {
    store
}


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