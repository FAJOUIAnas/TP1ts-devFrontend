export class Contact {
    givenName: string;
    familyName: string;
    phoneNumber: number;
    email: string;

    constructor(GivenName: string, familyName: string, phoneNumber: number, email: string) {
        this.givenName = GivenName;
        this.familyName = familyName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}