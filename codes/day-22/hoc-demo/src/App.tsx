import './App.css';
import Child from './Child';
import Sample from './Sample';

const App = function () {
  // let childCompObj = new Child({})
  // childCompObj.show()
  return (
    <div className="App">
      <Sample value={10} />
      <br />
      <br />
      <Child />
    </div>
  );
}
export default App
