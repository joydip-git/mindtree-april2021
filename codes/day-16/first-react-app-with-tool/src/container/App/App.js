import './App.css';
import HelloReact from '../../components/HelloReact/HelloReact'
import HelloWorld from "../../components/HelloWorld/HelloWorld";
import { Component } from 'react';

// function App() {
//   const message = 'Hello World From App'
//   return (
//     <div className='container-fluid'>
//       <HelloReact />
//       <br />
//       <HelloWorld someMessage={message} age={40} name='Joydip' />
//     </div>
//   );
// }
class App extends Component {
  constructor() {
    super()
    //this.state.x = 100;
    this.state = {
      num: 10,
      message: 'Hello World From App'
    }
    //this.message = 'Hello World From App'
  }

  changeNumber = () => {
    //this.state.num++;
    let temp = this.state.num;
    this.setState(
      {
        num: temp + 1,
        x: 100
      }
    )
    //console.log(this.state)
  }
  changeMessage = () => {
    // console.log(this.message)
    // this.message = 'Hello World From App changed'
    // console.log(this.message)
    this.setState({
      message: 'Hello World From App changed'
    })
  }
  render() {
    console.log(this.state)
    console.log('app rendered')
    return (
      <div className='container-fluid'>
        <button className='btn btn-primary' style={{ margin: '30px' }} onClick={this.changeNumber}>
          Change Value
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary' style={{ margin: '30px' }} onClick={this.changeMessage}>
          Change message
        </button>
        <br />
        <HelloReact value={this.state.num} />
        <br />
        <HelloWorld someMessage={this.state.message} age={40} name='Joydip' person={{ name: 'joy', id: 1, salary: 2000 }} />
      </div>
    );
  }
}
export default App;
/**
 * {
 *  someMessage:'Hello World From App',
 *  age:40,
 *  name:'Joydip'
 * }
      */
