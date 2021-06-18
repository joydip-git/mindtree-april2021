import { Component, h, Prop } from "@stencil/core/internal";
import { Contact } from "../../models/contact-model";

@Component({
    tag: 'contact-row',
    shadow: true
})
export class ContactRowComponent {
    @Prop() contact: Contact;
    @Prop() deleteHandler: any;

    constructor() {
        console.log('row created')
    }
    disconnectedCallback() {
        console.log('row removed')
    }
    render() {
        let styleObj = {
            'width': '50px',
            'margin': '2px'
        }
        console.log('row rendered')
        return (

            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src={this.contact.image} alt="NA" style={styleObj} title={this.contact.name} >
                        </img>
                        <div class="caption">
                            <h3>{this.contact.name} </h3>
                            <p>
                                {this.contact.email}
                                <br />
                                {this.contact.phone}
                            </p>
                            <p>
                                <button class="btn btn-primary">
                                    View
                                </button>

                                <button class="btn btn-danger" onClick={
                                    () => this.deleteHandler(this.contact.id)
                                }>
                                    Delete
                                </button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}