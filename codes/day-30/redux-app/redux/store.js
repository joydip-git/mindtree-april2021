const { createStore } = require('redux')
const { dataStateReducer } = require('./reducers')
//5. creating a redux store
const store = createStore(dataStateReducer)
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