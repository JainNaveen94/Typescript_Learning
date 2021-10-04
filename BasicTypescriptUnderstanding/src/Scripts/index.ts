import TypeBasedLogic from "./CoreTypeScript/TypeBasedLogic";
import {Products, Prod, Product} from "./CoreTypeScript/ObjectTypeLogic";
import * as ArrayLib from "./CoreTypeScript/ArrayTypeLogic";
import * as TupleLib from "./CoreTypeScript/TupleTypeLogic";
import * as EnumLib from "./CoreTypeScript/EnumTypeLogic";
import * as SpecialLib from "./CoreTypeScript/SpecialTypeLogic";
import * as TypeAliasesLib from "./CoreTypeScript/TypeAliasesLogic";
import * as FunctionTypeLib from "./CoreTypeScript/FunctionTypesLogic";
import * as NeverTypeLib from "./CoreTypeScript/NeverTypeLogic";

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

/** Tuple Type Code Compilation */
console.log("TS Code Execution Tuple : ", TupleLib.tempTup);
TupleLib.pushInTempTuple();
TupleLib.concatTempTupleElement(" Jain");
console.log("TS Code Execution Access Tuple Using Idx :", TupleLib.accessTempTuple(1));

/** Enum Type Code Compilation */
console.log("TS Code Numeric Enums : ", EnumLib.PrintMediaNumericEnum);
console.log("TS Code String Enums : ", EnumLib.PrintMediaStringEnum);
console.log("TS Code Hetrogeneous Enums : ", EnumLib.PrintMediaHetrogeneousEnum);
console.log("TS Code Basic Enums Example : ", EnumLib.getPrintMedia("Outlook"));
console.log("TS Code Comuted Enums Example : ", EnumLib.PrintMediaComputedEnum);
EnumLib.getReverseMappingEnumResult();

/** Some Special Type Code Compilation */
console.log("TS Code Any Type : ", SpecialLib.getAnyTypeDiffValues(SpecialLib.CoreType.STRING));
console.log("TS Code Unkonwn Type : ", SpecialLib.getUnknownTypeDiffValue(SpecialLib.CoreType.OTHER));
console.log("TS Code Union Type : ", SpecialLib.getUnionTempDiffValue(SpecialLib.CoreType.OTHER));
console.log("TS Code String Literal Type : ", SpecialLib.performAddition(40, 80, "as-number"));
console.log("TS Code Numeric Literal Type : ", SpecialLib.rollDice());

/** Type Aliases Code Compilation */
console.log("TS Code With Type Aliases Combination : ", TypeAliasesLib.performAdditionWithOutTypeAliases("201", "40", "as-text"));
console.log("TS Code Without Type Aliases Combination : ", TypeAliasesLib.performAdditionWithTypeAliases(201, 40,"as-number"));
console.log("TS Code With Type Aliases Combination : ", TypeAliasesLib.isOlderWithoutAliases({name: "Naveen", age: 27}, 30));
console.log("TS Code Without Type Aliases Combination : ", TypeAliasesLib.isOlderWithAliases({name: "Vikas", age: 45}, 40));

/** Function Type Code Compilation */
FunctionTypeLib.normalJSReturnFunction(10,20);
FunctionTypeLib.normalJSVoidFunction(100,200);
FunctionTypeLib.typescriptReturnFunction(1000,2000);
FunctionTypeLib.typescriptVoidFunction(10000,20000);
console.log("JS Code With Normal Function Assignment : ", FunctionTypeLib.performAdditionJSCode(100, 200));
console.log("TS Code With Function type variable Assignment : ", FunctionTypeLib.performAdditionTSCode(100, 200));
console.log("TS Code With Specified way of Function Type : ", FunctionTypeLib.perfromMultiplicationTSCode(10,20));

/** Never Type Code Compilation */
NeverTypeLib.generateError("Internal Server Error !!", 500);
NeverTypeLib.keepProcessing(); // Comment due to infinite loop
console.log("TS Code Void return Type Check : ", NeverTypeLib.speech);

