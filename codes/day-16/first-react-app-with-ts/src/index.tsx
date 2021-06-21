import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * class component:
 * const app = new App() [state property, setState() method, props property]
 * const appDesign = app.render()
 * 
 * functional component:
 * const valueCompDesign = Value({val: this.state.val, changeHandler:this.changeValue})
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
