import { Person } from "./Person";

export class Employee extends Person {
    /** Class Properties */
    private readonly id: string;
    protected name: string;

    /** Class Constructor to Construct the Values */
    constructor(id: string, name: string) {
        super();
        this.id = id;
        this.name = name;
    }

    /** Getter & Setter For Class Properties */
    // Id Property Getter
    get getId() {
        return this.id;
    }

    // Name Property Getter & Setter
    set setName (name: string) {
        this.name = name;
    }
    get getName () {
        return this.name;
    }

    /** Other Utility Methods */

    printEmployee: () => void = () => {
        console.log("Employee Information : ", {id: this.id, name: this.name});
    }

}