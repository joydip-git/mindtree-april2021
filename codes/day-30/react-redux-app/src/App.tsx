import React from 'react';
//import { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import ContactDetail from './components/ContactDetail';
// import ContactList from './components/ContactList';
import DashBoard from './components/DashBoard';
// import Home from './components/Home';
// //import Name from './components/Name';
// import PageNotFound from './components/PageNotFound';
import RouteGenerator from './routes/RouteGenerator';
//import Value from './components/Value';

function App() {
  //const [showState, setShowState] = useState(true)
  //const [idState, setIdState] = useState(1)
  return (
    <BrowserRouter>
      <DashBoard />
      <RouteGenerator />
      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/contacts' exact component={ContactList} />
        <Route path='/contacts/view/:id' exact component={ContactDetail} />
        <Route path='*' exact component={PageNotFound} />
      </Switch> */}
      {/* <Value />
      <br />
      <br />
      <Name />
      <br />
      <br /> */}
      {/* <button onClick={
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
      </button> */}
    </BrowserRouter>
  );
}

export default App;
