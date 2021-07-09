const { createStore, combineReducers } = require('redux')
const { nameStateReducer, numberStateReducer } = require('./reducers')

//5. creating a redux store by first merging the reducers
const rootReducer = combineReducers({
    nameStateRef: nameStateReducer,
    numberStateRef: numberStateReducer
})
const store = createStore(rootReducer)
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