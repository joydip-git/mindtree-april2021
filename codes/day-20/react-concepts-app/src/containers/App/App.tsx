import React from 'react';
import './App.css';
import Parent from '../Parent/Parent'
import ContactList from '../ContactList/ContactList';

//root component
function App() {
  return (
    <div className="App">
      <Parent />
      <br />
      <br />
      <ContactList />
    </div>
  );
}

export default App;
