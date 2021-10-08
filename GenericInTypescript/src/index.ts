import * as BuildInGenericLib from "./Scripts/BuildInGeneric"
import * as GenericFunctionLib from "./Scripts/GenericFunctions"
import * as GenericInterfaceLib from "./Scripts/GenericInterfaces"
import * as GenericClassLib from "./Scripts/GenericClasses"
import * as GenericConstraintLib from "./Scripts/GenericConstraint"

console.log(" ($_$) ---- Built In Generic Demo Start Here ---- ($_$)");
console.log("TS Code Compilation of Array using Built in generic Array Class : ", BuildInGenericLib.numArray);
console.log("TS Code Compilation of Array using Built in generic String Class : ", BuildInGenericLib.stringArray);
console.log("TS Code Compilation of Built in Partial generic Utility: ", BuildInGenericLib.createStudent());
console.log("TS Code Compilation of Built in Readonly generic Utility : ", BuildInGenericLib.readOnlyArray);
console.log(" ($_$) ---- Built In Generic Demo End Here ---- ($_$)");

console.log(" ($_$) ---- Functional Generic Demo Start Here ---- ($_$)");
console.log("TS Code Compilation of Generic Function Return Number Array : ", GenericFunctionLib.myNumArr);
console.log("TS Code Compilation of Generic Function Return String Array : ", GenericFunctionLib.myStrArr);
console.log(" ($_$) ---- Functional Generic Demo End Here ---- ($_$)");

console.log(" ($_$) ---- Interface Generic Demo Start Here ---- ($_$)");
console.log("TS Code Comilation of Generic Interface Key-Value Pair <number, number> : ", GenericInterfaceLib.numKeyValuePair);
console.log("TS Code Comilation of Generic Interface Key-Value Pair <string, string> : ", GenericInterfaceLib.stringKeyValuePair);
console.log("TS Code Comilation of Generic Interface Key-Value Pair <number, string> : ", GenericInterfaceLib.numStringKeyValuePair);
console.log(":: TS Code Compilation of Generic Interface as Function Type ::");
GenericInterfaceLib.printInterfaceAsFunctionType();
console.log(" ($_$) ---- Interface Generic Demo End Here ---- ($_$)");

console.log(" ($_$) ---- Class Generic Demo Start Here ---- ($_$)");
let processKeyValuePair =  new GenericClassLib.KeyValuePair<number, string>(101, "Naveen");
processKeyValuePair.display(processKeyValuePair.getKey, processKeyValuePair.getValue);
console.log(" ($_$) ---- Class Generic Demo End Here ---- ($_$)");

console.log(" ($_$) ---- Generic Constraint Demo Start Here ---- ($_$)");
console.log("Generic Constraint Example 1 : ", GenericConstraintLib.getAndPrint(["Hello Hero !", "Don't Become Zero !"]));
console.log("Generic Constraint Example 2 : ", GenericConstraintLib.merge({ name: "Naveen" }, { age: 30 }));
console.log("Generic Constraint Example 3 : ", GenericConstraintLib.extractAndConvert({ name: "Naveen" }, "name"));
console.log(" ($_$) ---- Generic Constraint Demo End Here ---- ($_$)");
