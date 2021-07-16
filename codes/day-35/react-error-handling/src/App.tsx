import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { errorLogger } from './errorLogger';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <br />
      <ErrorBoundary errorHandler={errorLogger}>
        <Hero heroName='Batman' />
        <br />
        <Hero heroName='Superman' />
        <br />
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
