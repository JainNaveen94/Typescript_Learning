import TypeBasedLogic from "./Scripts/TypeBasedLogic";
import {Products, Prod, Product} from "./Scripts/ObjectTypeLogic";
import * as ArrayLib from "./Scripts/ArrayTypeLogic";

/** Basic Type Code Compilation */
// When Pass Parameter Both as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd(5, 2.8));
console.log("TS Code Execution : ", TypeBasedLogic.tsAdd(5, 2.8));

// When Pass Parameter First as String and another as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd('5', 2.8));
// console.log("TS Code Execution : ", TypeBasedLogic.tsAdd('5', 2.8));  // Not allwoed String to be entered here

/** All Core Type Code Compilation */
console.log("TS Code Execution  ALL Core Type: ", TypeBasedLogic.tsAddAndShowResult(3.9, 3.6, false, ""));
TypeBasedLogic.printCustomeTSAddAndShowResult();

/** Object Type Code Compilation */
console.log("JS Code Execution Object : ", Products.details.title);
// console.log("Prod Detail : ", Prod.details.title);
console.log("Product Detail Object : ", Product.details.title);

/** Array Type Code Compilation */
console.log("JS Code Execution Array : ", ArrayLib.arr, ArrayLib.arrTemp);
console.log("TS Code Execution Array : ", ArrayLib.tempAr, ArrayLib.tempAray);
console.log("TS Code Execution Array Any Type : ", ArrayLib.tempArr, ArrayLib.tempArray);
console.log("TS Code Execution Array Multi Type : ", ArrayLib.tempMultiArray, ArrayLib.tempMultiAry);
