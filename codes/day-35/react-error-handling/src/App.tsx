import React from 'react';
import { ReactElement } from 'react';
import './App.css';
// import ErrorBoundary from './ErrorBoundary';
// import { errorLogger } from './errorLogger';
import Hero from './Hero';

function App(): ReactElement {
  return (
    <div className="App">
      <br />
      {
        <span>Hello</span>
      }
      <br />
      {/**v2: */}
      {/* <ErrorBoundary errorHandler={errorLogger}>
        <Hero heroName='Batman' />
        <br />
        <Hero heroName='Superman' />
        <br />
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      {/**v3: */}
      <Hero heroName='Batman' />
      <br />
      <Hero heroName='Superman' />
      <br />
      <Hero heroName='Joker' />
    </div>
  );
}

export default App;
