import React from 'react'
import { Link } from 'react-router-dom'

export default function DashBoard() {
    return (
        <nav>
            <Link to='/home'>
                <button>
                    Home
                </button>
            </Link>
            &nbsp;&nbsp;
            <Link to='/contacts'>
                <button>
                    Contacts
                </button>
            </Link>
            &nbsp;&nbsp;
            <Link to='/contacts/add'>
                <button>
                    Add Contact
                </button>
            </Link>
            &nbsp;&nbsp;
        </nav >
    )
}
