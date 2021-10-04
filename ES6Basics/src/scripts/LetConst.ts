/**
 * (@-@) ---- let & const ---- (@-@)
 */

/** let example */
let letNormalDemo = function(): void {
    let temp : string;
    temp = "Naveen";
    console.log("let Variable Value before change : ", temp);
    temp = "Naveen Jain";
    console.log("let Variable Value after change : ", temp);
}

/** const example */
let constNormalDemo = function(): void {
    const temp1 : string = "Naveen";
    console.log("let Variable Value before change : ", temp1);
    // temp1= "Naveen Jain"; // throw comiler error
    console.log("let Variable Value after change : ", temp1);
}

export {
    letNormalDemo,
    constNormalDemo
}