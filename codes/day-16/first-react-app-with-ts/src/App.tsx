import React, { Component } from 'react';
import './App.css';
import Value from './Value'
import Name from './Name'

type stateType = {
  val: number,
  name: string
}
class App extends Component {
  // constructor() {
  //   super()
  //   this.changeValue = this.changeValue.bind(this)
  // }
  state: stateType = {
    val: 10,
    name: 'joydip'
  }
  changeValue = (incrementalValue: any) => {
    //console.log(typeof incrementalValue)
    //v1:
    //let temp = this.state.val;
    //passing an object representing new state
    // this.setState({
    //   val: temp + 1
    // })

    //v2:
    //passing a callback method which be called by setState(). the callback must return a new object representing the new state 
    //the callback method receives the copy of the current state from setState() method. you can use the current state to calculate the value in new state
    // this.setState((currentState: stateType) => {
    //   return {
    //     val: currentState.val + 1
    //   }
    // })

    //In the previous version you can also pass a second callback (which does not accept any value and does not return anything). this second callback will be executed after the state gets updated by setState() method and after render() has been recalled
    this.setState(
      (currentState: stateType) => {
        return {
          val: currentState.val + incrementalValue
        }
      },
      () => {
        console.log(this.state)
      })
  }
  render() {
    console.log('app rendered')
    return (
      <div>
        {/* <button onClick={this.changeValue.bind(this)}>Increment</button> */}
        {/* <button onClick={this.changeValue}>Increment</button> */}
        <br />
        {/** const valueComp = Value({val: this.state.val, changeHandler:this.changeValue}) */}
        <Value val={this.state.val} changeHandler={this.changeValue} person={{ name: "anil", id: 1, salary: 1000 }} />
        <br />
        {/* <Value value={this.state.val} changeHandler1={this.changeValue} /> */}
        <br />
        <br />
        {
          /**
           * const nameComp = new Name({
           * nameValue:this.state.name
           * })
           * nameComp.render()
           */
        }
        <Name nameValue={this.state.name} />
      </div>
    );
  }
}

export default App;
/**
 * {
 *  val:10,
 *  changeHandler:{this.changeValue}
 * }
 */
