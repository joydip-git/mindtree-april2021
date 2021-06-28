import { Component } from "react";
import { Contact } from "../../models/Contact";
import { PromiseReponse } from "../../models/PromiseReponse";
import contactSvcObject from "../../services/ContactService";

type ContactUpdatePropType = {
    selectedContactPhone: number
}
type ContactUpdateStateType = {
    contactInfo: Contact
    found: boolean,
    x: number
}
class ContactUpdate extends Component<ContactUpdatePropType, ContactUpdateStateType> {
    constructor(props: ContactUpdatePropType) {
        super(props)
        console.log('[CU] ctor executed');
        this.state = {
            x: 0,
            found: false,
            contactInfo: {
                name: '',
                email: '',
                phone: 0
            }
        }
    }
    static getDerivedStateFromProps(newProps: ContactUpdatePropType, initialState: ContactUpdateStateType) {
        return {
            x: newProps.selectedContactPhone
        }
    }
    shouldComponentUpdate(newProps: ContactUpdatePropType, newState: ContactUpdateStateType) {
        if (this.props.selectedContactPhone !== newProps.selectedContactPhone || this.state.contactInfo.name === '' || this.state.contactInfo.phone !== newState.contactInfo.phone)
            return true

        return false
    }
    render() {
        console.log('[CU] rendered');
        let { contactInfo, found } = this.state;
        let design: any = 'NA'
        if (found) {
            design = (
                <form style={{ backgroundColor: 'gray', textAlign: 'center', width: '300px' }} >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={contactInfo.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" value={contactInfo.email} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" id="phone" value={contactInfo.phone} readOnly />
                    </div>
                    <input type="submit" value="Update" />
                </form>
            )
        }
        return design;
    }
    getSnapshotBeforeUpdate(oldProps: ContactUpdatePropType, oldState: ContactUpdateStateType) {
        console.log('[CU] taking snapshot');
        return 'that is a snapshot'
    }
    componentDidUpdate(oldProps: ContactUpdatePropType, oldState: ContactUpdateStateType, snapshotObj: any) {
        console.log('[CU] getting updated');
        console.log(snapshotObj);
        if (this.state.contactInfo.phone === 0 || (oldState.contactInfo.phone !== this.props.selectedContactPhone && this.props.selectedContactPhone !== oldProps.selectedContactPhone))
            this.getData()
    }
    componentDidMount() {
        console.log('[CU] mounted');
        this.getData()
    }
    private getData = () => {
        contactSvcObject
            .getContactByPhone(this.props.selectedContactPhone)
            .then(
                (dataObject: PromiseReponse) => {
                    this.setState({
                        contactInfo: dataObject.data,
                        found: true
                    })
                },
                (errorObject: PromiseReponse) => {
                    console.log(errorObject.message);
                    this.setState({
                        contactInfo: {
                            name: '',
                            email: '',
                            phone: 0
                        },
                        found: false
                    })
                }
            )
    }
}
export default ContactUpdate