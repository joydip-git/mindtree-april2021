import React from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'

/**
 * 
 * {
 *  history:{},
 *  location:{},
 *  match:{}
 * } 
 */
// export default function ViewContact(props) {
//     console.log(props.match.params.x)
//     return (
//         <div>
//             View
//         </div>
//     )
// }
export default function ViewContact() {
    const historyObj = useHistory()
    console.log(historyObj)
    const locationObj = useLocation();
    console.log(locationObj)
    const paramsObj = useParams()
    console.log(paramsObj)
    console.log(paramsObj.x)
    return (
        <>
            <div>
                View:{paramsObj.x}
            </div>
            {/** will check later, not working */}
            <button onClick={
                () => <Redirect to={'/contacts'} />
            }>
                Go Back
            </button>
        </>
    )
}
