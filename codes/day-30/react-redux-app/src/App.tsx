import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Name from './components/Name';
import Value from './components/Value';

function App() {
  const [showState, setShowState] = useState(true)
  const [idState, setIdState] = useState(1)
  return (
    <div>
      <Value />
      <br />
      <br />
      <Name />
      <br />
      <br />
      <button onClick={
        () => {
          setShowState((ps) => !ps)
        }
      }>
        {
          showState ? 'Hide' : 'Show'
        }
      </button>
      {
        showState && <ContactList id={idState} />
      }
      <br />
      <br />
      <button onClick={
        () => {
          setIdState(ps => ps + 1)
        }
      }>
        Change Id
      </button>
    </div>
  );
}

export default App;
