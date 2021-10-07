/** Here we can see the Examples of Some Complex Data Typescript Types */

/** (@-@) ---- Intersection Type ---- (@-@)
 * - Intersection types are closely related to union types, but they are used very differently.
 * - An intersection type combines multiple types into one.
 * - This allows you to add together existing types to get a single type that has all the features you need.
 */

/** Type Defination using Interfaces */

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

/** These interfaces are composed to have consistent error handling, and their own data. */

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse): void => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};
const handleArtworksResponse = (response: ArtworksResponse): void => {
    if(response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artworks);
}

/**
 * (@-@) ---- Type Guard ---- (@-@)
 * - Type Guard is one the important rule used by the TS Compiler in order to avoid run time error
 * - By Combining more then 1 type togther through union will also increase the chance of runtime 
 *   error if code is not properly get written.
 * - So to make sure that runtime error will not occure type guard come into a picture to analysis 
 *   the code risk and show compiler error if anything wrong is being written.
 * - Les take an example to understand the Situation :
 */

type combinable = number | string;

const addition: Function = (v1: combinable, v2: combinable) : combinable => {
    /** ERROR OCCURED DUE TO TYPE GUARD */
    // return v1 + v2;         // TS COMPILER THROUGH AN COMPILE TIME ERROR
    /** CORRECT CODE  */
    if(typeof v1 === 'number' && typeof v2 === 'number') {
        return +v1 + +v2;
    }
    return v1.toString() + v2.toString();
}

/** 
 * (@-@) ---- Type Guard In Custom & Object Union Type ---- (@-@)
 * - The Above code can be worked when we combine core type of TS which are checked using 'typeof'.
 * - But when we combine two or more Custom type or Object Type then 'typeof' will not work 
 *   to make sure that the property we try to access is exist or not hence its through comiler time error.
 * - There are many Discriminating Union Situation which are explained through Example belown :
 */

/** Situation 1 : this is Happened when we pass Intersection of two or more Object as functional Params 
                  but Parameter type is Union of two or More Object) */

type admin = {
    name: string,
    privileges: string[]
}

type user = {
    name: string,
    startDate: Date
}
type unknownEmployee = admin & user;
type employee = admin | user;

const emp: unknownEmployee = {
    name: "Naveen",
    privileges: ["Server-Access", "VDI Admin"],
    startDate: new Date()
}

let getEmployeeInformation: (emp: employee) => unknownEmployee = function(emp: employee) : unknownEmployee {
    let resultEmp: unknownEmployee = {name: emp.name, privileges: [], startDate: new Date()};
    /* The Below two line through an comiler error due to un-surity of accessed Property */
    // console.log("Employee Access Privileges : ", emp.privileges);
    // console.log("Employee Joining Date : ", emp.startDate);
    /* So to Overcome this we have one special type of check using 'in', to insure that the accessed property is there. */
    if('privileges' in emp) {
        resultEmp.privileges = emp.privileges;
    }
    if('startDate' in emp) {
        resultEmp.startDate = emp.startDate;
    }

    return resultEmp;

}

const printEmployeeInformation: Function = () : void => {
    console.log("Type Guard Custom Type Example 1:: \n Employee Information : ", getEmployeeInformation(emp));
}

/** Situation 2 : This is also Happened when we have a function param as a union of two or more class type or object type
 *                And we pass any one of its types.
 */

class Car {
    drive() {
        console.log("let go for a Ride ... ");
    }
}
class Truck {
    drive() {
        console.log("Let go for transportation Trip ... ");
    }
    loading() {
        console.log("Let load a Cargo ... ");
    }
}

type Vehicle = Car | Truck;

const car = new Car();
const truck = new Truck();

const useVehicle: Function = (veh: Vehicle): void => {
    veh.drive();
    /* TS Compiler Error because compiler don't know which type is actually passed. */
    // veh.loading();
    /* To Overcome this, we use 'instanceOf' operator to perform check about its class type */
    if(veh instanceof Truck ) {
        veh.loading();
    }
}

const printVehicleUsed = (): void => {
    console.log("Type Guard Custom Type Example 2::");
    useVehicle(car);
    useVehicle(truck);
}

/** Alternate Solution For Situation 2 (without use of instanceof): 
 * - We will Introduced new Common Property in all types such that its return type is custom.
 * - Now We use that Custome Return Type Property to Check that the object belong to which type.
 * - For Example : let take a fresh example for it.
 * 
 * - This Approach is called Discriminated Unions Approach
 */

type NetworkLoadingState = {
    state: "loading";
};
type NetworkFailedState = {
    state: "failed";
    code: number;
};
type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

const networkLoad: NetworkLoadingState = {state: "loading"};
const networkFailed: NetworkFailedState = {state: "failed", code: 500};
const networkSuccess: NetworkSuccessState = {state: "success", response: {title: "CNA", duration: 100, summary: "Network is Successfully Loaded"}}

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

const getNetworkReport = (network: NetworkState) : string => {
    switch(network.state) {
        case 'loading':
            return "Network is in Loading State";
            break;

        case 'failed':
            return `Network Failed with Error Code : ${network.code}`;
            break;

        case 'success':
            return `${network.response.title} Network Successfully Load with Summary : ${network.response.summary}`;
            break;

        default:
            return "Unknown State";
            break;
    }
}

const printNetworkReport = () : void => {
    console.log("Type Guard Custom Type Example 3 ::")
    console.log(getNetworkReport(networkLoad));
    console.log(getNetworkReport(networkSuccess));
    console.log(getNetworkReport(networkFailed));
}

export {
    handleArtistsResponse,
    handleArtworksResponse,
    addition,
    getEmployeeInformation,
    printEmployeeInformation,
    useVehicle,
    printVehicleUsed,
    getNetworkReport,
    printNetworkReport,
}
