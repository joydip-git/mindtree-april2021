import { Component } from "react";

const withShow = (OriginalComponent: any) => {
    class WithShow extends Component<any, {}> {
        show() {
            console.log('hello');
        }
        render() {
            console.log(this.props);
            return <OriginalComponent showFn={this.show}  {...this.props} />
        }
    }
    return WithShow;
}
export default withShow;