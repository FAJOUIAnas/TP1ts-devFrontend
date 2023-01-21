import {Contact} from "./Contact"
export class ContactManager {
    contacts: Contact[];

    constructor() {}

    listContact(): Contact[] {
        return this.contacts;
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    searchContact(givenName: string): Contact {
        this.contacts.forEach( (element) => {
            if (element.givenName = givenName) {
                return element;
            }
        });
        return null;
    }
}