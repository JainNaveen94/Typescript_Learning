import TypeBasedLogic from "./Scripts/TypeBasedLogic";

/** Basic Type Code Compilation */
// When Pass Parameter Both as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd(5, 2.8));
console.log("TS Code Execution : ", TypeBasedLogic.tsAdd(5, 2.8));

// When Pass Parameter First as String and another as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd('5', 2.8));
// console.log("TS Code Execution : ", TypeBasedLogic.tsAdd('5', 2.8));  // Not allwoed String to be entered here