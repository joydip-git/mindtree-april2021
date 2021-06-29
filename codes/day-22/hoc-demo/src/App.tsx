import './App.css';
import ClsComp from './ClsComp';
import Parent from './Parent';
import Sample from './Sample';

const App = function () {
  return (
    <div className="App">
      <Sample value={10} />
      <br />
      <br />
      <ClsComp name='Joydip' />
      <br />
      <br />
      <Parent />
    </div>
  );
}
export default App
