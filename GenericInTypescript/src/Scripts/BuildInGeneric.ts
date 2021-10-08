/** Here we will see some Utilities and Build in Generic Type used commoanly in TypeScript */

/**
 * (@--@) ---- Generic Array ---- (@--@)
 * - Typescript provide us the Facilitiy to define array of any type using it Generic Class
 * - Lets Take an Example :
 */

let numArray: Array<number> = [1,2,3,4,5,6,7,8,9,0];
let stringArray: Array<string> = ["Nav", "Shub", "Sid", "Vip", "Rahul"];

/** (@--@) ---- Generic Partial ---- (@--@) */

 type Student = {
    name: string,
    rollNo: number,
    monitor: boolean,
    subject: string[]
};

const createStudent: () => Student = (): Student => {
    // let tempStud: Student = {};             // It will throw compiler error as it expect required properties
    let tempStud: Partial<Student> = {};        // Partial Utility make all the Properties Optional
    tempStud.name = "Naveen";
    tempStud.rollNo = 101;
    tempStud.monitor = true;
    tempStud.subject = ["Maths", "English", "Physics", "Chemistry", "ED", "Computer Science"];
    // return tempStud;                            // After using Partial above, it throw error as return type is Student.
    return tempStud as Student;
}

/** (@--@) ---- Generic Readonly ---- (@--@) */

let readOnlyArray: Readonly<string[]> = ["Maths", "English", "Physics", "Chemistry", "ED", "Computer Science"];
// readOnlyArray.push("Biology"); // thrown error as it is Readonly generic Array

export {
    numArray,
    stringArray,
    createStudent,
    readOnlyArray
}