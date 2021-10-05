/** Intrerface as Custom Type Defination */

interface Person {
    firstName: string;
    lastName: string;
}

interface PersonDetail {
    age: number;
    gender: string;
}

export interface User extends Person, PersonDetail {
    id: string;
}