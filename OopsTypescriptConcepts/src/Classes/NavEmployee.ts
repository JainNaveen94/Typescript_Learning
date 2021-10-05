import { Employee } from "../Interfaces/Employee";
import { User } from "../Interfaces/UserType";

export class NavEmployee implements Employee{
    /** Properties of Nav Employee Class */
    firstName : string;
    lastName: string;
    age: number;
    gender: string;
    readonly empCode: string;

    /** Constructor of Nav Employee */
    constructor(firstName: string, lastName: string, age: number, gender: string, empCode: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.empCode = empCode;
    }

    /** Getter & Setter */

    /** Interface Utilities Defination */
    generateFullName : () => string = () => {
        return this.firstName + " " + this.lastName;
    }

    displayPersonalInfo : () => void = () => {
        console.log("Personal Information : ", {fullName: this.generateFullName(), age: this.age, gender: this.gender});
    }

    displayEmployeeInfo: () => void = () => {
        console.log("Employee Information : ", {empCode: this.empCode, fullName: this.generateFullName(), age: this.age, gender: this.gender});
    }
}