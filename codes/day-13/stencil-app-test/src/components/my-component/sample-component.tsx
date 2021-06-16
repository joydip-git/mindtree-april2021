import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'sample-comp'
})
export class SampleComponent {
    @Prop() Contact: any;

    render() {
        return (
            <tr>
                <td>
                    <img src={this.Contact.photo} alt="NA" srcset="" />
                </td>
                <td>
                    {this.Contact.name}
                </td>
                <td>
                    {this.Contact.email}
                </td>
                <td>
                    {this.Contact.phone}
                </td>
            </tr>
        )
    }
}