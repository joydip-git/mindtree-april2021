import React, { Component } from 'react';
import './App.css';
import Sample from './components/Sample/Sample'
import ContactList from './components/ContactList/ContactList';

class App extends Component<{}, { show: boolean }> {
  state = {
    show: true
  }
  render() {
    console.log('[App] renered/mounted');
    // const sampleCompObject = new Sample({ val: 10, name: 'anil' })
    // const sampleVDOM = sampleCompObject.render()
    return (
      <div>
        {
          /*sampleVDOM*/
        }
        <Sample val={10} name='anil' />
        <br />
        <button onClick={() => {
          this.setState((ps) => {
            return {
              show: !ps.show
            }
          })
        }}>
          {
            this.state.show ? 'Hide' : 'Show'
          }
        </button>
        <br />
        {
          this.state.show && <ContactList />
        }
      </div>
    );
  }
}

export default App;
