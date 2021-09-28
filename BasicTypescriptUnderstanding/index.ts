import TypeBasedLogic from "./Scripts/TypeBasedLogic";
import {Products, Prod, Product} from "./Scripts/ObjectTypeLogic";ß

/** Basic Type Code Compilation */
// When Pass Parameter Both as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd(5, 2.8));
console.log("TS Code Execution : ", TypeBasedLogic.tsAdd(5, 2.8));

// When Pass Parameter First as String and another as Number
console.log("JS Code Execution : ", TypeBasedLogic.jsAdd('5', 2.8));
// console.log("TS Code Execution : ", TypeBasedLogic.tsAdd('5', 2.8));  // Not allwoed String to be entered here

/** All Core Tyoe Code Compilation */
console.log("TS Code Execution : ", TypeBasedLogic.tsAddAndShowResult(3.9, 3.6, false, ""));
TypeBasedLogic.printCustomeTSAddAndShowResult();

/** Product Type Code Compilation */
console.log("JS Code Execution : ", Products.details.title);
// console.log("Prod Detail : ", Prod.details.title);
console.log("Product Detail : ", Product.details.title);