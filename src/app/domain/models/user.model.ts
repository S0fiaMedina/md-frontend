
/**
 * @Entity Modelo de entidad para un usuario que usa la app
*/
export class User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor(id: number, username: string, email: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    addUser(){
        console.log("User added");
    }


}