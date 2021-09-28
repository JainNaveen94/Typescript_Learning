const TypeBasedLogic = {
    
    /** Basic Understanding related to Typescript type concept understanding */
    // Javascript Code
    jsAdd : function(number1, number2) {
        return number1+number2;
    },
    // Typescript Code
    tsAdd : function(number1: number, number2: number) {
        return number1 + number2;
    },

    /** Example to Specify the working of all the Core Types of Typescript */
    // Typescript Code
    tsAddAndShowResult: function(n1: number, n2: number, showResult: boolean, resultMessage: string) {
        const result = n1 + n2;
        if(showResult) {
            console.log(resultMessage + result);
        } else {
            return result;
        }
    },
    // Demo of Above Function with some useful notes
    printCustomeTSAddAndShowResult: function() {
        const num1 = 10.9;
        /** 
         * Its Volite the Type Interface as when we initialize the Variable with Value 
         * then we don't need to explicitly specify the type as due to type interface 
         * it take value type bydefault.
         */
        // const num2: number = 20; // ===>  Wrong Approach

        /**
         * It is allowed as here we are not initilize the Variable with any value
         * so we restrict user to use the variable to specific type by explicitly specify it type.
         */
        let num2: number;
        num2 = 20;

        const printResult = true;
        const resultMessage = "Result : ";

        this.tsAddAndShowResult(num1, num2, printResult, resultMessage);
    }
}

export default TypeBasedLogic;
