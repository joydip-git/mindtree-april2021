import { Component, PureComponent } from "react"

type NamePropType = {
    name: string,
    nameHandler: (arg: string) => void
}
//PureComponent does not perform deep comparison of object that has been received via props
//It does shallow comparison
//class Name extends Component<NamePropType, {}> {
class Name extends PureComponent<NamePropType, {}> {
    constructor(props: NamePropType) {
        super(props)
        console.log('[Name] ctor called');
    }
    state = {

    }
    // shouldComponentUpdate(newProps: NamePropType, newState: {}) {
    //     console.log('[Name] should ComponentUpdate called');
    //     if (this.props.name !== newProps.name)
    //         return true

    //     return false
    //     // for (const propName in newProps) {
    //     //     if ((typeof propName) !== 'Function')
    //     //         if (newProps[propName] !== this.props[propName]) {

    //     //         }
    //     // }
    // }
    render() {
        console.log('[Name] rendered');
        let { name, nameHandler } = this.props;
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
                        name !== '' ? name : 'NA'
                    }
                </p>
            </div >
        )
    }
    componentDidMount() {
        console.log('[Name] mounted');
    }
}
export default Name