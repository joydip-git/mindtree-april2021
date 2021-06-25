import { Component } from "react";
import Name from '../../components/Name/Name'
import Value from '../../components/Value/Value'

type ParentStateType = {
    name: string,
    data: number
}
class Parent extends Component<{}, ParentStateType> {
    state = {
        name: '',
        data: 0
    }
    updateNameHandler = (newName: string) => {
        this.setState({
            name: newName
        })
    }
    updateDataHandler = () => {
        this.setState(
            (currentState) => {
                return {
                    data: currentState.data + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                <Name
                    name={this.state.name}
                    nameHandler={this.updateNameHandler}
                />
                <br />
                <br />
                <Value
                    dataValue={this.state.data}
                    dataHandler={this.updateDataHandler}
                />
            </div>
        )
    }
}
export default Parent