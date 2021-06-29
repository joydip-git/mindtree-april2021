import React, { Component } from 'react';
import './App.css';

let Sample: any = function (props: any) {
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
                props.value ? props.value : 'NA'
            }
        </div>
    );
}

const withShow = (OriginalComponent: any) => {
    class WithShow extends Component {
        show() {
            console.log('hello');
        }
        render() {
            console.log(this.props);
            return <OriginalComponent showFn={this.show} {...this.props} />
        }
    }
    return WithShow;
}
Sample = withShow(Sample)
export default Sample

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
