//import { connect } from 'react-redux'
import { updateNameActionCreator } from '../redux/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

const Name = () => {

    const nameValue = useSelector((allState: any) => allState.nameStateRef.name)
    const dispatchFnRef = useDispatch()

    const updateName = (newName: string) => {
        let updateNameAction = updateNameActionCreator(newName)
        dispatchFnRef(updateNameAction)

    }
    return (
        <>
            <div>
                Enter New Name:&nbsp;&nbsp;
                <input type="text" onChange={
                    (ev) => {
                        updateName(ev.target.value)
                    }
                } />
            </div>
            <p>
                Current Value:&nbsp;{nameValue}
            </p>
        </>
    )
}
export default Name
// const mapStateToProps = (allState: any) => {
//     return {
//         nameValue: allState.nameStateRef.name
//     }
// }
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         updateName: (newName: string) => {
//             const updateNameAction = updateNameActionCreator(newName)
//             dispatch(updateNameAction)
//         }
//     }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(Name)
