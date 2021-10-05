/** Code Execution Are Performed Here */

import { Employee } from "./Classes/Employee";
import { Department } from "./Classes/Department";

/** Employee Class Object Creation */
let employee1 = new Employee("EA-101", "Mahesh");
let Employee2 = new Employee("EA-102", "Vidhi");
let employee3 = new Employee("EE-101", "Naveen");
let Employee4 = new Employee("EE-102", "Vikas");

/** Department Class Object Creation */
let accountDepart = new Department("DA-101", "Accounting", [employee1, Employee2]);
let engineerDepart = new Department("DE-101", "Engineering", [employee3]);

/** Perform Utitlities Methods */
Employee4.printEmployee();
engineerDepart.addEmployee(Employee4);
accountDepart.printDepartmentInfo();
engineerDepart.printDepartmentInfo();