import { contactRecords } from "../data/contactRecords";
import { PromiseReponse } from "../models/PromiseReponse";

class ContactService {
    public getContacts(): Promise<PromiseReponse> {
        return new Promise((resolve, reject) => {
            if (contactRecords === null) {
                reject({ message: 'no records', data: null })
            } else if (contactRecords.length === 0) {
                reject({ message: 'empty records array', data: null })
            } else {
                resolve({ message: 'records found', data: contactRecords })
            }
        })
    }
    public getContactByPhone(phoneNo: number): Promise<PromiseReponse> {
        return new Promise(
            (resolve, reject) => {
                let found = contactRecords.find((c) => c.phone === phoneNo)
                if (found)
                    resolve({ message: 'record found', data: found })
                else
                    reject({ message: 'record not found', data: null })
            }
        )
    }
}
const contactSvcObject = new ContactService()
export default contactSvcObject