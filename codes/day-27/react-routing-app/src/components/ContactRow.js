import React from 'react'
import { Link } from "react-router-dom";

export default function ContactRow(props) {
    return (
        <>
            <Link to={{
                pathname: `/contacts/view/${props.val}`
            }}>
                <div>
                    Row Data: {props.val}
                </div>
            </Link>
            {/* <Link to={`/contacts/view/${props.val}`}>
                <div>
                    Row Data: {props.val}
                </div>
            </Link> */}
            <br />
        </>
    )
}
