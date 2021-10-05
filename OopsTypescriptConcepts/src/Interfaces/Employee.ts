import { Person } from "./Person";
import { PersonDetail } from "./PersonDetail";

export interface Employee extends Person, PersonDetail {
    /** Properties Of Interface */
    readonly empCode: string;

    /** Methods Of Interface */
    displayEmployeeInfo: () => void;
}