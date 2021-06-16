import { ContactRecordsComponent } from "./components/contact-records-component";

export const registerComponents = () => {
    window.customElements.define('contact-records', ContactRecordsComponent)
}