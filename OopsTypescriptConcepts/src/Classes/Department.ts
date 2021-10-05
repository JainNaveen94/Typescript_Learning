import { Employee }  from "./Employee";

export class Department {
    /** Class Properties */
    private readonly id : string;
    private name : string;
    private employeeList : Employee[];

    /** Class Constructor to Construct the Values */
    constructor (id: string, name: string, employeeList: Employee[]) {
        this.id = id;
        this.name = name;
        this.employeeList = employeeList;
    }
ß
    /** Getter & Setter For Class Properties */

    // Id Property Getter
    get getId() {
        return this.id;
    }

    // Name Property Getter & Setter
    set setName (name: string) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }

    // Employee List Property Getter & Setter
    set setEmployeeList(employeeList: Employee[]) {
        this.employeeList = employeeList;
    }
    get getEmployeeList() {
        return this.employeeList;
    }

    /** Other Utilities Function Related to Class Itself */
    addEmployee: (employee: Employee) => void = (employee: Employee) => {
        console.log("Employee " + employee + " is Adding into Department " + this.name);
        this.employeeList.push(employee)
    };
    printDepartmentInfo: () => void = () => {
        console.log("Department Information : ", {id: this.id, name: this.name, employees: this.employeeList});
    }
}