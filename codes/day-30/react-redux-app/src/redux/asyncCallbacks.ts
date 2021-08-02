import { ContactService } from "../services/ContactService"
import { getContactDetailFailureActionCreator, getContactDetailSuccessActionCreator, getContactsFailureActionCreator, getContactsSuccessActionCreator } from "./actionCreators"

export const getContactData = (id: number) => {
    return (dispatchRef: any) => {
        ContactService.Create()
            .getContactById(id)
            .then(
                (dataResp) => {
                    console.log(dataResp.data)
                    let successAction = getContactDetailSuccessActionCreator(dataResp.data)
                    dispatchRef(successAction)
                },
                (errorResp) => {
                    let failAction = getContactDetailFailureActionCreator(errorResp.message)
                    dispatchRef(failAction)
                }
            )
    }
}

export const getContactRecords = () => {
    return (dispatchFnRef: any) => {
        ContactService.Create()
            .getContacts()
            .then(
                (dataResp) => {
                    if (dataResp.data) {
                        let sucessAction = getContactsSuccessActionCreator(dataResp.data)
                        dispatchFnRef(sucessAction)
                    }
                },
                (errResp) => {
                    let failAction = getContactsFailureActionCreator(errResp.message)
                    dispatchFnRef(failAction)
                }
            )
    }
}