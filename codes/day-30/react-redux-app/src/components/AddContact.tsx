import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ContactService } from '../services/ContactService'

const AddContact = () => {
    const [contactState, setContactState] = useState({ name: '', email: '', phone: 0 })
    const history = useHistory()
    return (
        <div>
            <form onSubmit={(eve) => {
                eve.preventDefault()
                ContactService.Create().addContact(contactState).then(data => console.log(data), err => console.log(err))
                history.push('/contacts')
            }}>
                Name:&nbsp;
                <input type='text' value={contactState.name} name='name' onChange={
                    (eve) => setContactState({
                        ...contactState,
                        name: eve.target.value
                    })
                } />
                <br />
                Email:&nbsp;
                <input type='text' value={contactState.email} name='email' onChange={
                    (eve) => setContactState({
                        ...contactState,
                        email: eve.target.value
                    })
                } />
                <br />
                Phone:&nbsp;
                <input type='text' value={contactState.phone} name='phone' onChange={
                    (eve) => setContactState({
                        ...contactState,
                        phone: +(eve.target.value)
                    })
                } />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddContact
