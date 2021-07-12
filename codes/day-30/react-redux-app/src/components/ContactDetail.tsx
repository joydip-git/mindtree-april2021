import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { getContactDetailFailureActionCreator, getContactDetailSuccessActionCreator } from '../redux/actionCreators'
import { getContactData } from '../redux/asyncCallbacks'
// import { ContactService } from '../services/ContactService'

const ContactDetail = () => {
    const allParams: any = useParams()
    const contactInfo = useSelector((combinedState: any) => combinedState.contactDetailStateRef.contact)
    const errorInfo = useSelector((combinedState: any) => combinedState.contactDetailStateRef.errorMessage)
    const dispatchRef = useDispatch()

    useEffect(() => {
        let callback = getContactData(allParams.id);
        dispatchRef(callback)
        // ContactService.Create()
        //     .getContactById(allParams.id)
        //     .then(
        //         (dataResp) => {
        //             let successAction = getContactDetailSuccessActionCreator(dataResp.data)
        //             dispatchRef(successAction)
        //         },
        //         (errorResp) => {
        //             let failAction = getContactDetailFailureActionCreator(errorResp.message)
        //             dispatchRef(failAction)
        //         }
        //     )
        return () => {

        }
    }, [allParams.id])
    return (
        <div>
            {
                contactInfo &&
                (
                    <>
                        <h3>Record of:{contactInfo.name}</h3>
                        <span>
                            {contactInfo.phone}
                        </span>
                        <br />
                        <span>
                            {contactInfo.email}
                        </span>

                    </>
                )
            }
            {
                errorInfo &&
                (
                    <span>{errorInfo}</span>
                )
            }
        </div>
    )
}

export default ContactDetail
