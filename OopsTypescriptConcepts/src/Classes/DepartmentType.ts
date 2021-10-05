/** Here we will see the Demo of Inheritence With Some of its important Section */

import { Department } from "./Department";
import { DepartmentCategory } from "./DepartmentCategoryEnum";
import { Employee } from "./Employee";

export class DepartmentType extends Department {
    /** Class Properties */
    private deptType: DepartmentCategory;

    /** Class Constructor */
    constructor(id: string, name: string, employeeList: Employee[], deptType: DepartmentCategory) {
        super(id, name, employeeList);
        this.deptType = deptType;
    }

    /** Getter & Setter */
    set setType(deptType: DepartmentCategory) {
        this.deptType = deptType;
    }
    get getType() {
        return this.deptType;
    }

    /** Override Base Class Method */
    printDepartmentInfo : () => void = () => {
        console.log("Department Category Information : ", {id: this.getId, name: this.getName, type: this.getType, employees: this.getEmployeeList});
    }
}