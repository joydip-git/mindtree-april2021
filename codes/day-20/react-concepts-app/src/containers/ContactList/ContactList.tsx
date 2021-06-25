import { Component } from "react";
import ContactDetail from "../../components/ContactDetail/ContactDetail";
import ContactUpdate from "../../components/ContactUpdate/ContactUpdate";
import { Contact } from "../../models/Contact";

type ContactListStateType = {
    contacts: Contact[],
    selectedContactInfo: Contact
}
class ContactList extends Component<{}, ContactListStateType> {
    state = {
        selectedContactInfo: { name: '', email: '', phoneNo: 0 },
        contacts: [{
            name: 'anil',
            email: 'anil@gmail.com',
            phoneNo: 9090909090
        }, {
            name: 'sunil',
            email: 'sunil@gmail.com',
            phoneNo: 9090909091
        }, {
            name: 'joydip',
            email: 'joydip@gmail.com',
            phoneNo: 9090909092
        }]
    }
    selectedContactHandler = (phone: number) => {
        let found = this.state.contacts.find(c => c.phoneNo === phone)
        if (found) {
            this.setState({
                selectedContactInfo: found
            })
        }
    }
    updateStateContactHandler = () => {

    }
    render() {
        return (
            <div>
                <button onClick={
                    () => {
                        // let copyState = { ...this.state }
                        let copyContacts = [...this.state.contacts];
                        copyContacts.sort((c1, c2) => c1.name.toLocaleLowerCase().localeCompare(c2.name.toLocaleLowerCase()))
                        this.setState({
                            contacts: copyContacts
                        })
                    }
                }>Sort</button>
                <br />
                <br />
                {
                    this.state.contacts.map((c: Contact) => {
                        return (
                            <ContactDetail
                                key={c.phoneNo}
                                contactData={c}
                                selectHandler={this.selectedContactHandler}
                            />
                        )
                    })
                }
                <br />
                <ContactUpdate selectedContact={this.state.selectedContactInfo} updateHandler={this.updateStateContactHandler} />
            </div>
        )
    }
}
export default ContactList