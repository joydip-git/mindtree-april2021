import { Component, h, State } from "@stencil/core/internal";
import { Contact } from "../../models/contact-model";
import { getContacts } from "../../utils/utils";

@Component({
    tag: 'contact-list'
})
export class ContactListComponent {
    @State() contacts: Contact[];
    index = 1

    constructor() {
        console.log('list created')
    }
    connectedCallback() {
        this.contacts = getContacts();
    }
    deleteRecord = (id: number) => {
        console.log(this)
        //suggested not to do this:
        //this.contacts.splice(this.contacts.findIndex(c => c.id === id), 1)

        //do not modify the state property of the component directly
        //mutate the state property imutably       
        //make of the data stored in state property
        let copyOfContacts = [...this.contacts]
        copyOfContacts.splice(copyOfContacts.findIndex(c => c.id === id), 1)
        //after modification update the state property with the updated data
        this.contacts = copyOfContacts
        //you must update the original repository also simultaneously, since you are updating just the state property of the component only
    }
    render() {
        console.log('list rendered ' + this.index + ' time')
        this.index++
        return (
            <div class="container">
                {
                    this.contacts.length > 0 &&
                    this.contacts.map(c => {
                        return (<contact-row
                            contact={c}
                            deleteHandler={this.deleteRecord}>
                        </contact-row>)
                    })
                    /**
                     *  this.contacts.length > 0 ?
                    this.contacts.map(c => {
                        return <contact-row contact={c} deleteHandler={this.deleteRecord}></contact-row>
                    }):'no records found'
                     */
                }
            </div>
        )
    }
}