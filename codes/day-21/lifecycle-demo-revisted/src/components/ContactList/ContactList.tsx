import { Component } from "react";
import { Contact } from "../../models/Contact";
import { PromiseReponse } from "../../models/PromiseReponse";
import contactSvcObject from "../../services/ContactService";
import Child from "../Child/Child";
import ContactDetail from "../ContactDetail/ContactDetail";
import ContactUpdate from "../ContactUpdate/ContactUpdate"

type ContactListStateType = {
    contacts: Contact[],
    selectedPhoneNo: number
}
class ContactList extends Component<{}, ContactListStateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            contacts: [],
            selectedPhoneNo: 0
        }
        console.log('[CL] ctor executed');
    }
    selectedContactPhoneHandler = (phone: number) => {

        this.setState({
            selectedPhoneNo: phone
        })
    }
    render() {
        console.log('[CL] rendered');
        console.log(this.state.selectedPhoneNo);
        let { contacts, selectedPhoneNo } = this.state
        return (
            <div>
                List of Contacts:&nbsp;&nbsp;

                {
                    contacts.length > 0 ? contacts.length + ' records found' : 'NA'
                }
                <br />
                {
                    contacts.length > 0 &&
                    contacts.map((c) => {
                        return <ContactDetail
                            contactData={c}
                            key={c.phone}
                            selectPhoneHandler={this.selectedContactPhoneHandler}
                        />
                    })
                }
                <br />
                {
                    selectedPhoneNo !== 0 &&
                    <ContactUpdate selectedContactPhone={selectedPhoneNo} />
                }
                <br />
                <br />
                <Child contactArray={contacts} />
            </div>
        )
    }
    componentDidMount() {
        console.log('[CL] mounted');
        contactSvcObject
            .getContacts()
            .then(
                (resolevObject: PromiseReponse) => {
                    setTimeout(() => {
                        this.setState({
                            contacts: resolevObject.data
                        })
                    }, 2000)
                },
                (rejectObject: PromiseReponse) => {
                    console.log(rejectObject.message);
                }
            )
    }
    componentWillUnmount() {
        console.log('[CL] unmounted from Actual DOM');
    }
}
export default ContactList