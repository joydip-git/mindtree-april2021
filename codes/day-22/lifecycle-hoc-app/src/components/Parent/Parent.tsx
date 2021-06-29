import { Component } from "react";
import Name from '../../components/Name/Name'
import Value from '../../components/Value/Value'

type ParentStateType = {
    name: string,
    data: number
}
class Parent extends Component<{}, ParentStateType> {
    constructor(props: any) {
        super(props)
        console.log('[Parent] ctor called');
    }
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
        console.log('[Parent] rendered');
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
    componentDidMount() {
        console.log('[Parent] mounted');
    }
}
export default Parent