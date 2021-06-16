//import { contactRecords } from "../data/contactReposiroty";
import { Contact } from "../models/contact.model";

export class ContactService {
    url: string = 'http://localhost:3001/contacts';
    // public getContacts():Contact[] {
    //     return contactRecords;
    // }
    public getContacts(callback: (data: Contact[], error: Error) => void): void {
        const respPromise: Promise<Response> = fetch(this.url)
        respPromise
            .then(
                (resp) => {
                    const dataPromise = resp.json()
                    dataPromise
                        .then(
                            (data) => {
                                callback(data, null)
                            }
                        )
                },
                (err) => {
                    callback(null, err)
                }
            )
        // const req = new XMLHttpRequest()
        // req.onreadystatechange = function () {
        //     if (req.status === 200) {
        //         if (req.readyState === 4) {
        //             const records = JSON.parse(req.responseText)
        //             callback(<Contact[]>records, null)
        //         }
        //     }
        //     if (req.status !== 200) {
        //         callback(null, new Error(req.statusText))
        //     }
        // }
        // req.open('GET', this.url, true)
        // req.send()
    }
}