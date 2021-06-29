import './App.css';
import withShow from './withShow';

const Sample = function (props: any) {
  console.log(props);
  return (
    <div className="App">
      HOC App
      {
        props.showFn()
      }
      <br />
      Value:&nbsp;
      {
        props.value ? props.value : 0
      }
    </div>
  );
}
// Sample = withShow(Sample)
// export default Sample
export default withShow(Sample)

/**
 * const memorize = (OriginalComponent: any) => {
  class Memorize extends Component {
    shouldComponentUpdate(newProps: any, oldProps: any) {
      return true;
    }
    render() {
      return <OriginalComponent />
    }
  }
  return Memorize;
}
 */
