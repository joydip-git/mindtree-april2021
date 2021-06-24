import './App.css';
import { Component } from 'react';
import InputForm from './InputForm'

class App extends Component {
  state = {
    val: 0,
    name: 'joydip'
  }
  call = (x) => {
    // console.log(typeof x)
    // console.log(x.target)
    // let stateCopy = { ...this.state };
    // console.log(stateCopy)
    // stateCopy['val'] = 12
    // console.log(stateCopy)
    // this.setState(stateCopy)
    this.setState({
      val: 12
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {/**
        when click event gets triggered by clicking the button,
        then the callback method gets invoked
        and that time automatically (be default) one argument is passed to that callback method
        the argument is an Event object (SyntheticBaseEvent)
         */}
        {/* <button onClick={this.call}>Call</button> */}
        {/**
        when click event gets triggered by clicking the button,
        then the anonymous callback method gets invoked (written using arrow function)
        then within the arrow function you yourself is explicitly calling the call() method
         */}
        <button onClick={(ev) => {
          this.call(ev)
        }
        }>Call</button>
        <br />
        Value:&nbsp;{this.state.val}
        <br />
        <br />
        <InputForm />
      </div>
    );
  }
}

export default App;
