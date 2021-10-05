/** Shorthand Method Demo */

export class AvailableService {
    /** Properties of Class */
    private name: string;
    private description: string;

    /** Constructor of Class through Shorthand Method */
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    };

    /** Getter & Setter */
    set setServiceName(name: string) {
        this.name = name;
    }
    get getServiceName() {
        return this.name;
    }
    set setServiceDescription(description: string) {
        this.description = description;
    }
    get getServiceDescription() {
        return this.description;
    }
}