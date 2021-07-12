import React, { useEffect } from 'react'
import { getContactsFailureActionCreator, getContactsSuccessActionCreator } from '../redux/actionCreators';
import { ContactService } from '../services/ContactService';
import { connect } from 'react-redux'

const ContactList = (props: any) => {
    // useEffect(
    //     () => {
    //         console.log('executed when id value is different: ' + props.id);
    //         return () => {
    //             console.log('clean up resouce...only when id changes');
    //         }
    //     },
    //     [props.id]
    // )
    // useEffect(
    //     () => {
    //         console.log('component mounted');
    //     },
    //     []
    // )
    // useEffect(
    //     () => {
    //         return () => {
    //             console.log('component unmounted');
    //         }
    //     },
    //     []
    // )
    useEffect(
        () => {
            //console.log('component mounted');
            ContactService.Create()
                .getContacts()
                .then(
                    (dataResp) => {
                        if (dataResp.data) {
                            props.setData(dataResp.data)
                        }
                    },
                    (errResp) => {
                        props.setError(errResp.message)
                    }
                )
            return () => {
                console.log('component unmounted');
            }
        },
        []
    )
    // useEffect(
    //     () => {
    //         console.log('always executed');
    //         return () => {
    //             console.log('always clear resources');
    //         }
    //     })

    return (

        <ul>
            {
                props.contactRecords.length > 0 &&
                (
                    props.contactRecords.map((c: any) => {
                        return <li key={c.id}>
                            {c.name}
                        </li>
                    })
                )
            }
        </ul>
    )
}

const mapStateToPropsCallback = (combinedStateRef: any) => {
    const mapStateToPropsConfig = {
        errorInfo: combinedStateRef.allContactsStateRef.errorMessage,
        contactRecords: combinedStateRef.allContactsStateRef.contacts
    }
    return mapStateToPropsConfig
}

const mapDispatchToPropsCallback = (dispatchFnRef: any) => {
    const mapDispatchToPropsConfig = {
        setData: (contactsData: any) => {
            let sucessAction = getContactsSuccessActionCreator(contactsData)
            dispatchFnRef(sucessAction)
        },
        setError: (errorData: any) => {
            let failAction = getContactsFailureActionCreator(errorData)
            dispatchFnRef(failAction)
        }
    }
    return mapDispatchToPropsConfig
}

let configHOC = connect(mapStateToPropsCallback, mapDispatchToPropsCallback)
export default configHOC(ContactList)