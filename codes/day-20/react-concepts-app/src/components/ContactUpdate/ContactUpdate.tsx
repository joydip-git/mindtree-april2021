import { Component } from "react";
import { Contact } from "../../models/Contact";

type ContactUpdatePropType = {
    selectedContact: Contact,
    updateHandler: () => void
}
type ContactUpdateStateType = {
    name: string,
    email: string,
    phoneNo: number
}
class ContactUpdate extends Component<ContactUpdatePropType, ContactUpdateStateType> {
    // state = {
    //     name: '',
    //     email: '',
    //     phoneNo: 0
    // }
    // updateFormState = (inputValue: any, inputName: string) => {
    //     this.setState(
    //         (currentState) => {
    //             let newState = { ...currentState, [inputName]: inputValue }
    //             return newState
    //         }
    //     )
    // }
    render() {
        let { selectedContact, updateHandler } = this.props
        return (
            <form style={{ backgroundColor: 'gray' }} onSubmit={updateHandler}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={selectedContact.name} />
                </div>
                <div>
                    <label htmlFor="email">Name:</label>
                    <input type="text" name="email" id="email" value={selectedContact.email} />
                </div>
                <div>
                    <label htmlFor="phoneNo">Name:</label>
                    <input type="text" name="phoneNo" id="phoneNo" value={selectedContact.phoneNo} readOnly />
                </div>
                <input type="submit" value="Update" />
            </form>
        )
    }
}
export default ContactUpdate