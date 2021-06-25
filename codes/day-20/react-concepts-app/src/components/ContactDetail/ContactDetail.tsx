import { Contact } from "../../models/Contact"

type ContactDetailPropType = {
    contactData: Contact,
    selectHandler: (arg: number) => void
}
function ContactDetail(props: ContactDetailPropType) {
    let { contactData, selectHandler } = props
    let designStyle = {
        width: '200px',
        height: '200px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        color: 'GrayText',
        fontFamily: 'sans-serif',
        margin: '10px',
        backgroundColor: "aliceblue"
    }
    let design: any = 'no contact data'
    if (contactData) {
        design = (
            <div style={designStyle} onClick={() => selectHandler(contactData.phoneNo)}>
                <div>
                    <h3 >{contactData.name}</h3>
                </div>
                <div>
                    <span>
                        Email:&nbsp;{contactData.email}
                    </span>
                    <br />
                    <span>
                        Phone No:&nbsp;{contactData.phoneNo}
                    </span>
                </div>
            </div>
        )
    }
    return design
}
export default ContactDetail