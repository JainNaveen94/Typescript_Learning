"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BuildInGenericLib = __importStar(require("./Scripts/BuildInGeneric"));
const GenericFunctionLib = __importStar(require("./Scripts/GenericFunctions"));
const GenericInterfaceLib = __importStar(require("./Scripts/GenericInterfaces"));
const GenericClassLib = __importStar(require("./Scripts/GenericClasses"));
const GenericConstraintLib = __importStar(require("./Scripts/GenericConstraint"));
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
let processKeyValuePair = new GenericClassLib.KeyValuePair(101, "Naveen");
processKeyValuePair.display(processKeyValuePair.getKey, processKeyValuePair.getValue);
console.log(" ($_$) ---- Class Generic Demo End Here ---- ($_$)");
console.log(" ($_$) ---- Generic Constraint Demo Start Here ---- ($_$)");
console.log("Generic Constraint Example 1 : ", GenericConstraintLib.getAndPrint(["Hello Hero !", "Don't Become Zero !"]));
console.log("Generic Constraint Example 2 : ", GenericConstraintLib.merge({ name: "Naveen" }, { age: 30 }));
console.log("Generic Constraint Example 3 : ", GenericConstraintLib.extractAndConvert({ name: "Naveen" }, "name"));
console.log(" ($_$) ---- Generic Constraint Demo End Here ---- ($_$)");
//# sourceMappingURL=index.js.map