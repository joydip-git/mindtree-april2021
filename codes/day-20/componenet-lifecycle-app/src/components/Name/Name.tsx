import { Component } from "react"

type NamePropType = {
    name: string,
    nameHandler: (arg: string) => void
}
type NameStateType = {
    receivedName: any
}
class Name extends Component<NamePropType, NameStateType> {
    constructor(props: NamePropType) {
        super(props)
        console.log('[Name] ctor called');
    }
    state = {
        receivedName: null
    }
    //this decides whether this.props (Which isstill referring the old property object) should be updated or not
    //also render and other lifecycle methods followed by this one should be invoked or not
    shouldComponentUpdate(newProps: NamePropType, newState: NameStateType) {
        console.log('[Name] should ComponentUpdate called');
        console.log(this.props);//old (still this.props is not updated though the component has received new property value)
        console.log(newProps);
        console.log(this.state);
        console.log(newState);

        if (this.props.name !== newProps.name || this.state.receivedName === null || this.state.receivedName !== newState.receivedName)
            return true

        return false
    }
    //every time (first time because state was initialized, every other time because either state of this component got updated or the component received new property value)
    render() {
        console.log('[Name] rendered');
        let { name, nameHandler } = this.props;
        let { receivedName } = this.state
        return (
            <div>
                <div>
                    Enter Name:&nbsp;
                    <input type="text" onChange={
                        (eventObj) => {
                            nameHandler(eventObj.target.value)
                        }
                    } />
                </div>
                <p>
                    Name:&nbsp;&nbsp;
                    {
                        /*name === '' ? 'NA' : name */
                        receivedName === null ? 'NA' : receivedName
                    }
                </p>
            </div >
        )
    }
    //after the 1st time onwards
    getSnapshotBeforeUpdate(oldProps: NamePropType, oldState: NameStateType) {
        console.log('[Name] getSnapshotBeforeUpdate');
        return null
    }
    //after the 1st time onwards
    componentDidUpdate(oldProps: NamePropType, oldState: NameStateType, snapshotObject: any) {
        console.log(oldProps);
        console.log(this.props);
        console.log(oldState);
        console.log(this.state);
        if (this.state.receivedName === null || (this.state.receivedName !== oldState.receivedName && this.props.name !== oldProps.name))
            this.setState({
                receivedName: this.props.name
            })
        console.log('[Name] componentDidUpdate');
    }
    //one time
    componentDidMount() {
        console.log('[Name] mounted');
    }
}
export default Name