/** Code Execution Are Performed Here */

import { Employee } from "./Classes/Employee";
import { Department } from "./Classes/Department";
import { AccountService } from "./Classes/AccountService";
import { DepartmentType } from "./Classes/DepartmentType";
import { DepartmentCategory } from "./Classes/DepartmentCategoryEnum";

/** Employee Class Object Creation */
let employee1 = new Employee("EA-101", "Mahesh");
let Employee2 = new Employee("EA-102", "Vidhi");
let employee3 = new Employee("EE-101", "Naveen");
let Employee4 = new Employee("EE-102", "Vikas");

/** Department Class Object Creation */
let accountDepart = new Department("DA-101", "Accounting", [employee1, Employee2]);
let engineerDepart = new Department("DE-101", "Engineering", [employee3]);

/** Department Type Class Object Creation */
let departmentIT = new DepartmentType("101", "IT-Central", [employee1, employee3], DepartmentCategory.IT);

/** Perform Utitlities Methods */
console.log("(@___@) --- Employee and Department Normal Class and its other concepts Demo --- (@___@)");
Employee4.printEmployee();
engineerDepart.addEmployee(Employee4);
accountDepart.printDepartmentInfo();
engineerDepart.printDepartmentInfo();
console.log("(@___@) --- Department Type Inhertance Class and its other concepts Demo --- (@___@)");
departmentIT.printDepartmentInfo();

/** Account Service Class Static Property and Static Method Demo */
console.log("@___@) --- Account Service Class Static Property and Static Method Demo --- (@___@)");
console.log("Available Services Using Static Property : ", AccountService.availableServices);
console.log("CTC Structure Calculation Using Static Method : ", AccountService.generateCTCStructure(2300000));