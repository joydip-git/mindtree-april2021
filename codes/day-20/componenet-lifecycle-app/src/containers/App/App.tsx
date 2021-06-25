import React from 'react';
import './App.css';
import Parent from '../Parent/Parent'

//root component
function App() {
  console.log('[App] rendered');
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
