export class Student {
    public id: string;
    public name: string;
    public class: string;
    public email: string;
    public address: string;

    constructor(id: string, name: string, class_no: string, email: string, address: string) {
        this.id = id;
        this.name = name;
        this.class = class_no;
        this.email = email;
        this.address = address
    }

}