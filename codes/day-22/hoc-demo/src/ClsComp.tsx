import { Component } from "react";
import withShow from "./withShow";

class ClsComp extends Component<any, {}> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>
            {
                this.props.name
            }
            <br />
            {
                this.props.showFn()
            }
        </div>
    }
}
export default withShow(ClsComp)