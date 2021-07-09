const { createStore, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')
const { nameStateReducer, numberStateReducer, contactStateReducer } = require('./reducers')

//5. creating a redux store by first merging the reducers
const rootReducer = combineReducers({
    nameStateRef: nameStateReducer,
    numberStateRef: numberStateReducer,
    contactStateRef: contactStateReducer
})

const loggerMiddleware = createLogger()
const store = createStore(rootReducer, loggerMiddleware.default)
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