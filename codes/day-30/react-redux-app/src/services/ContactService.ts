import { axiosInstance } from "../AxiosConfig/axiosInstance";

export class ContactService {
    private static contactSvcObjRef: ContactService;
    private constructor() {

    }
    public static Create(): ContactService {
        if (this.contactSvcObjRef === undefined || this.contactSvcObjRef === null) {
            console.log('service created')
            this.contactSvcObjRef = new ContactService()
        }
        return this.contactSvcObjRef
    }
    public getContacts() {
        console.log('called')
        return axiosInstance.get('')
    }
    public getContactById(id: number) {
        return axiosInstance.get(`${id}`)
    }
    public addContact(contactObj: any) {
        return axiosInstance.post('', contactObj)
    }
}