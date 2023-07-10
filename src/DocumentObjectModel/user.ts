import { UserData } from "./user-data";

export class User {

    userId = '';
    firstname = '';
    lastname = '';
    email = '';
    password = '';
    phone_number!: 790001373;

    static register(user: UserData) {
        return {
            userid: user.userId, firstname: user.firstname, lastname: user.lastname, mailAddress: user.email, number: user.phone_number, password: user.password
        }
    }

    static login(user: UserData) {
        return {

        }
    }
}
