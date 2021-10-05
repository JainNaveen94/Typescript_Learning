
import { Person } from "./Person";

export interface PersonDetail extends Person {
    /** Properties of Interfaces */
    age: number;
    gender: string;

    /** Methods Of Interfaces */
    displayPersonalInfo: () => void;

}