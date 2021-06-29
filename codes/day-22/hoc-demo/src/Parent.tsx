import { ChangeEvent, Component, SyntheticEvent } from "react";
import Value from "./Value";

class Parent extends Component {
    state = {
        data: 0,
        name: ''
    }
    updateDataHandler = () => {
        this.setState(
            (oldState: any) => {
                return {
                    data: oldState.data + 1
                }
            }
        )
    }
    updateNameHandler = (eventObj: any) => {
        this.setState({
            name: eventObj.target.value
        })
    }
    render() {
        return (
            <div>
                Enter Name:&nbsp;&nbsp;
                <input type="text" onChange={this.updateNameHandler} />
                <br />
                <br />
                <button onClick={this.updateDataHandler}>Increase</button>
                <br />
                <Value val={this.state.data} data='Joydip' />
            </div>
        )
    }
}
export default Parent