export class Employee {
    /** Class Properties */
    private readonly id: string;
    private name: string;

    /** Class Constructor to Construct the Values */
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    /** Getter & Setter For Class Properties */
    // Id Property Getter
    getId: () => string = () => {
        return this.id;
    }

    // Name Property Getter & Setter
    setName : (name: string) => void = (name: string) => {
        this.name = name;
    }
    getName : () => string = () => {
        return this.name;
    }

    /** Other Utility Methods */

    printEmployee: () => void = () => {
        console.log("Employee Information : ", {id: this.id, name: this.name});
    }

}