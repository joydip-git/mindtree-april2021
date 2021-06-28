import { Component } from "react";
type SamplePropType = {
    val: number,
    name: string
}
type SampleStateType = {
    x: number
}
class Sample extends Component<SamplePropType, SampleStateType> {
    constructor(props: SamplePropType) {
        super(props)
        console.log('[Sample] created...');
        //this.callMe = this.callMe.bind(this)
        this.state = {
            x: 0
        }
    }

    callMe = () => {

    }
    render() {
        console.log('[Sample] rendered...');
        return (
            <div id='sampleDiv' style={{ color: 'black' }}>
                <button onClick={
                    () => this.setState((ps) => {
                        return {
                            x: ps.x + 1
                        }
                    })
                }>
                    Increase
                </button>
                <br />
                <span>Value of X: {this.state.x}</span>
            </div>
        )
    }
    componentDidMount() {
        console.log('[Sample] mounted...');
    }
}
export default Sample