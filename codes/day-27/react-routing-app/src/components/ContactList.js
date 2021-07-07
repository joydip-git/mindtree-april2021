import React, { Component } from 'react'
import ContactFilter from './ContactFilter'
import ContactSort from './ContactSort'
import ContactRow from "./ContactRow";

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <ContactFilter />
                <br />
                <ContactSort />
                <br />
                {
                    [1, 2, 3, 4, 5].map(num => {
                        return <ContactRow val={num} key={num} />
                    })
                }
            </div>
        )
    }
}
