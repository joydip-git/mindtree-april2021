import { Component, PureComponent } from "react";

const withMemo = (WrappedComponent: any) => {

    class WithMemo extends PureComponent<any, {}> {
        //class WithMemo extends Component<any, {}> {
        constructor(props: any) {
            super(props)
            this.state = {}
        }
        // shouldComponentUpdate(newProps: any, newState: any) {
        //     for (const propName in newProps) {
        //         if (this.props[propName] !== newProps[propName]) {
        //             return true
        //         }
        //     }
        //     return false;
        // }
        show = () => {
            console.log('hello everyone');
        }
        render() {
            return <WrappedComponent {...this.props} showFn={this.show} />
        }
    }
    return WithMemo
}
export default withMemo;