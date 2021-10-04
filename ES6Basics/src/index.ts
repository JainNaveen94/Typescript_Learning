import * as LetConstLib from "./scripts/LetConst";
import * as ArrowFunctionLib from "./scripts/ArrowFunction";
import * as DefaultParamLib from "./scripts/DefaultParameter";
import * as SpreadRestLib from "./scripts/SpreadAndRestOperator";
import * as DestructingAssignmentLib from "./scripts/DestructingAssignment";


/** let & const Logic Example */
console.log("(@_@) ---- let & const Logic Example Start From Here ---- (@_@)")
LetConstLib.letNormalDemo();
LetConstLib.constNormalDemo();
DestructingAssignmentLib.objectDestructingResult();
console.log("(@_@) ---- let & const Logic Example End Here ---- (@_@)")

/** arrow function Logic Example */
console.log("(@_@) ---- arrow function Logic Example Start From Here ---- (@_@)")
console.log("Normal Arrow Function Demo Result : ", ArrowFunctionLib.additionArrowFunction(20, 30));
console.log("Inline Arrow Function Demo Result : ", ArrowFunctionLib.addArrowInlineFunctio(20, 30));
console.log("Arrow Function as Param Demo Result : ");
ArrowFunctionLib.resultArrowFunctionAsParameter;
console.log("(@_@) ---- arrow function Logic Example End Here ---- (@_@)")

/** Default Parameter Logic Example */
console.log("(@_@) ---- Default Parameter Logic Example Start From Here ---- (@_@)")
DefaultParamLib.resultWithDefaultParamAtLast();
DefaultParamLib.resultWithDefaultParamAtFirst();
console.log("(@_@) ---- Default Parameter Logic Example End Here ---- (@_@)")

/** Spread & Rest Operator Logic Example */
console.log("(@_@) ---- Spread & Rest Operator Logic Example Start From Here ---- (@_@)")
SpreadRestLib.resultedSpreadOperatorValue();
SpreadRestLib.additionFunWithoutRestOperator();
SpreadRestLib.additionFunWithRestOperator();
console.log("(@_@) ---- Spread & Rest Operator Logic Example End Here ---- (@_@)")


/** Destructing Assignment Logic Example */
console.log("(@_@) ---- Destructing Assignment Logic Example Start From Here ---- (@_@)")
DestructingAssignmentLib.arrayDestructingResult();
DestructingAssignmentLib.objectDestructingResult();
console.log("(@_@) ---- Destructing Assignment Logic Example End Here ---- (@_@)")