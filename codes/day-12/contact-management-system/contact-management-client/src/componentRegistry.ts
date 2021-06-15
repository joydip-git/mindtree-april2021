import { ContactRowComponent } from "./components/contact-row-component";
import { ContactRecordsComponent } from "./components/contact-records-component";

export const registerComponents = () => {
    window.customElements.define('contact-row', ContactRowComponent)
    window.customElements.define('contact-records', ContactRecordsComponent)
}