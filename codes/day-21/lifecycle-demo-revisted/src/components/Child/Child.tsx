import { Component, createRef } from "react";
import { Contact } from "../../models/Contact";
import ContactInfo from "../ContactInfo/ContactInfo";
type ChildPropType = {
    contactArray: Contact[]
}
class Child extends Component<ChildPropType, { name: string }>{
    private divRef: any;
    constructor(props: ChildPropType) {
        super(props)
        //this.divRef = null;
        this.divRef = createRef()
    }
    // setRef = (element: any) => {
    //     this.divRef = element
    // }
    state = {
        name: ''
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Phone</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contactArray.map(c => {
                                return (
                                    <tr>
                                        <td>{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.phone}</td>
                                        <td>
                                            <button onClick={
                                                () => {
                                                    console.log(this.divRef);
                                                    if (this.divRef !== null) {
                                                        // let design = <ContactInfo name={c.name} />
                                                        this.divRef.current.innerHTML = `<p>${c.name}</p>`
                                                    }
                                                }
                                            }>Select</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* <div ref={this.setRef}> */}
                <div ref={this.divRef}>
                    {/* {
                        (this.state.name !== null && this.state.name !== '') &&
                        <ContactInfo name={this.state.name} />
                    } */}
                </div>
            </>
        )
    }
}
export default Child