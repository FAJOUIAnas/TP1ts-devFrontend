import {ContactManager} from "./ContactManager";
import {Contact} from "./Contact";

class Main {

    main(): void {
        let cm: ContactManager = new ContactManager();

        let c1: Contact = new Contact("Anas", "Fajoui", 55, "anasfajoui@gmail.com");

        cm.addContact(c1);

        console.log(c1);
    }
}