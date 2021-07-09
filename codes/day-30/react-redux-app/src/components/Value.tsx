import { connect } from 'react-redux'
import { increaseValueActionCreator } from '../redux/actionCreators'

const Value = (props: any) => {
    return (
        <>
            <div>
                Enter Value:&nbsp;&nbsp;
                <input type="text" onChange={(ev) => {
                    let val = +(ev.target.value)
                    if (!isNaN(val)) {
                        //dispatch an action against redux store to update the numberState
                        props.updateValue(val)
                        /**
                         * let increaseAction = increaseValueActionCreator(val)
                          dispatch(increaseAction)
                         */
                    }
                }} />
            </div>
            <p>
                {/** receive value from redux store through this data property */}
                Current Value:&nbsp;{props.data}
            </p>
        </>
    )
}

//connect HOC connects the store and the component
//to the 1st callback store passes the complete app state
//to the 2nd callback store passes the reference of the dispatch function
const mapStateToProps = (combinedState: any) => {
    return {
        data: combinedState.numberStateRef.value
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateValue: (incrementValue: number) => {
            let increaseAction = increaseValueActionCreator(incrementValue)
            dispatch(increaseAction)
        }
    }
}
// let config = connect(mapStateToProps, mapDispatchToProps)
// export default config(Value)

export default connect(mapStateToProps, mapDispatchToProps)(Value)




/*
const Value = () => {
    const [data, setData] = useState(0)
    return (
        <>
            <div>
                Enter Value:&nbsp;&nbsp;
                <input type="text" onChange={(ev) => {
                    let val = +(ev.target.value)
                    if (!isNaN(val)) {
                        setData((ps) => {
                            return ps + val
                        })
                    }
                }} />
            </div>
            <p>
                Current Value:&nbsp;{data}
            </p>
        </>
    )
}
*/
