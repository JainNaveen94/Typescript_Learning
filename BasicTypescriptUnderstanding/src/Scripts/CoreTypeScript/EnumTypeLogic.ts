/**
 * Enums or enumerations are a new data type supported in TypeScript. 
 * Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.
 * In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
 * There are three types of enums: Numeric enum, String enum & Heterogeneous enum.
 * Enums can be defined using the keyword enum.
 * 
 */

/** 
 *  (@-@) ---- Numeric Enum ---- (@-@)
 * - Numeric enums are number-based enums i.e. they store string values as numbers.
 * - By Default Numeric Enums values are start from 0 and icremented by 1 for each value.
 * - But we also have a Option to Customise it by assigned a Value to each property or 
 *   any single property after which other property with be incremented by 1
 * - Please Note : Not Value Assigned Property either should be arranged in start of enum or end of it.
 */
// Numeric Enum Example

enum PrintMediaNumericEnum {
    NEWS_PAPER,
    NEWS_LETTER,
    MAGAZINE,
    BOOK
}

/** // Example of Default Enum
enum PrintMedia {
    NEWS_PAPER,
    NEWS_LETTER,
    MAGAZINE,
    BOOK
}
*/

/** // Example of Value Assigned Enum (Assigned Value to Single Enum Property other take it 1 incremented for each)
 enum PrintMedia {
    NEWS_PAPER = 3,
    NEWS_LETTER,
    MAGAZINE,
    BOOK
}
 */

/** // Example of Value Assigned Enum (Assigned Value to Each Enum Property)
 enum PrintMedia {
    NEWS_PAPER = 3,
    NEWS_LETTER = 6,
    MAGAZINE = 12,
    BOOK = 36
}
*/

/**
 *  (@-@) ---- String Enums ---- (@-@)
 * - String enums are similar to numeric enums, 
 *   except that the enum values are initialized with string values rather than numeric values.
 * - Benefits of using string enums is that string enums offer better readability
 */

// String Enums Example

enum PrintMediaStringEnum {
    NEWS_PAPER = "News Paper",
    NEWS_LETTER = "News Letter",
    MAGAZINE = "Magazine",
    BOOK = "Book"
}

/**
 *  (@-@) ---- Heterogeneous Enums ---- (@-@)
 * - Heterogeneous enums are enums that contain both string and numeric values.
 */

// String Enums Example

enum PrintMediaHetrogeneousEnum {
    NEWS_PAPER = "News Paper",
    NEWS_LETTER = "News Letter",
    MAGAZINE = 1,
    BOOK
}


/** Working Example of Enums in Real Time Coding */
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

// Unstuctured Code
// let getPrintMedia : (mediaName: string) => PrintMedia = function(mediaName: string): PrintMedia {
//     if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
//         return PrintMedia.Magazine;
//     }
//     return PrintMedia.Book;
// }

// Structure Code
function getMedia(media: string) : PrintMedia {
    if (  media === 'Forbes' || media === 'Outlook') {
        return PrintMedia.Magazine;
    }
    return PrintMedia.Book;
}
let getPrintMedia : (mediaName: string) => PrintMedia;
getPrintMedia = getMedia;



/**
 * (@-@) ---- Computed Enum Values ---- (@-@)
 * - Only numeric enums can have computed members. 
 * Please Note : (For Example ---> Not Allowed Computed Enum)
 * - When the enum includes computed and constant members, 
 *   then uninitiated enum members either must come first 
 *   or must come after other initialized members with numeric constants 
 */

function getcomputedPrintMediaValue(str: string) : number {
    if(str === "news-paper") {
        return 1;
    } else {
        return 10;
    }
}

enum PrintMediaComputedEnum {
    Newspaper = getcomputedPrintMediaValue("news-paper"),
    Newsletter = Newspaper * 10,
    Magazine = 1000,
    Book
}

// Not Allowed Computed Enum
/**
enum PrintMediaWronEnum {
    Newsletter = getcomputedPrintMediaValue('newsletter'),
    Newspaper, // Error: Enum member must have initializer
    Book,
    Magazine = Newsletter * 3,
}
*/

// Above Not Allowed Computed Enum can be Write with two ways
// Option 1st
enum PrintMediaCorrectOption1 {
    Newspaper,
    Book,
    Newsletter = getcomputedPrintMediaValue('newsletter'),
    Magazine = Newsletter * 3
}

// Option 2nd
enum PrintMediaCorrectOption2 {
    Newsletter = getcomputedPrintMediaValue('newsletter'),
    Magazine = Newsletter * 3,
    Newspaper = 0,
    Book,
}

/**
 * (@-@) ---- Reverse Mapping in Enums ---- (@-@)
 * - Enum in TypeScript supports reverse mapping. 
 * - It means we can access the value From member name and also a member name from its value.
 * - both the following mappings are true to enums: name -> value, and value -> name.
 * Please Note :
 *  - Reverse mapping is not supported for string enum members. 
 *  - For the heterogeneous enum, reverse mapping is only supported for numeric type members 
 *    but not for string type members.
 */

// Reverse Mapping In Enums Example

enum PrintMediaReverseMappingEnum {
    NEWS_PAPER = 3,
    NEWS_LETTER = 6,
    MAGAZINE = 12,
    BOOK = 36
}

let getReverseMappingEnumResult : () => void = function() : void {
    console.log("Enum Value Using Member Name : ", PrintMediaReverseMappingEnum.MAGAZINE);
    console.log("Enum Member Name Using Value : ", PrintMediaReverseMappingEnum[12]);
    console.log("Enum Value Using Member Name as String : ", PrintMediaReverseMappingEnum["MAGAZINE"]);
}




export {
    PrintMediaNumericEnum, 
    PrintMediaStringEnum, 
    PrintMediaHetrogeneousEnum, 
    getPrintMedia, 
    PrintMediaComputedEnum,
    PrintMediaReverseMappingEnum,
    getReverseMappingEnumResult
};



