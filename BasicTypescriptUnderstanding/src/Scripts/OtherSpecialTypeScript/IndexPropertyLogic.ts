/** Here we will see the Index Property Logic */

/**
 * (@-@) ---- Index Property ---- (@-@)
 * - Index Property is one of the Type of Property which provide you following feature :
 *      - Any number of Properties are defined as per the Requirement.
 *      - Property which you want to define can have different different name.
 * - Index Properties can only work with Custom Object type by using type, classes or interfaces.
 * - usually we use index properties where number of properties define inside a specific custom type is dynamic.
 * For Example : 
 */

// Using Type
type IndexPropertyType = {
    [prop: string] : string
}
// Using Class
class IndexPropertyClass {
    [prop: string] : string
}
// Using Interfaces
interface IndexPropertyInterface {
    [prop: string] : string
}

let indexPropertyType: IndexPropertyType = {
    "text" : "text box validation",
    "email": "email box validation"
}

export {
    indexPropertyType
}