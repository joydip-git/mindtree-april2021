import { Component, h } from "@stencil/core/internal";

@Component({
    tag: 'app-root',
    shadow: true
})
export class AppComponent {
    connectedCallback() {

    }
    render() {
        return (
            <div>
                <contact-list></contact-list>
            </div>
        )
    }
}