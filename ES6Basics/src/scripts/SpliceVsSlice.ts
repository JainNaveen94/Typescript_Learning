/** Here we See the Demo of Splice vs Slice */

/** (@-@) ---- Splice() Method ---- (@-@) */

let spliceMethodDemo: Function = () : void => {
    /** Example with Single Argument*/
    let tempArray1 = [1,3,2,5,5];
    console.log("Items which are Removed through Splice() with Single Argument : ", tempArray1.splice(2));
    // result : [2,5,5]
    // New Values in tempArray1 Now : [1,3]

    /** Example with Two Arguments */
    let tempArray2 = [1,3,2,5,5];
    console.log("Items which are Removed through Splice() with two Argument : ", tempArray2.splice(-2, 1));
    // result : [5];
    // New Values in tempArray2 Now : [1,3,5,5]

    /** Example with all Three and n Arguments */
    let tempArray3 = [1,3,2,5,5];
    console.log("Items which are Removed & Add through Splice() with Three & N Argument : ", tempArray3.splice(2, 1, 8, 9, 10));
    // result : [2]
    // New Values in tempArray3 Now : [1,3,8,9,10,5,5]
}


/** (@-@) ---- Slice() Method ---- (@-@) */

let sliceMethodDemo: Function = () : void => {
    let tempArray = [2, 4, 6, 8, 10, 12, 14];

        /** Example with Single Argument*/
        console.log("Items which are Selected through Slice() with Single Argument : ", tempArray.slice(2));
        // result : [6, 8, 10, 12, 14]
        // New Values in tempArray Now : [2, 4, 6, 8, 10, 12, 14];

        /** Example with Two Arguments */
        console.log("Items which are Selected through Slice() with two Argument : ", tempArray.splice(-2, 1));
        // result : [12];
        // New Values in tempArray Now : [2, 4, 6, 8, 10, 12, 14];
}


export {
    spliceMethodDemo,
    sliceMethodDemo
}