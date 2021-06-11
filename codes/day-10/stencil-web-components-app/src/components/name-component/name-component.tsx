import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'name-comp',
    shadow: false
})
export class NameComponent {
    @Prop() name: string;
    render() {
        console.log('Name Component render');
        return <li>{this.name}</li>
    }
}