// Javascipt Based Code
const Products = {
    id : 101,
    price: 300.20,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title : 'One-plus 9R',
        description: 'Brand New Oneplus 9R Black Gear Addition'
    } 
}

/**
 * This approach is usually Follow to define the Object
 * But the Only Problem here is that this approach not able to specify the available properties of Object.
 * For Example : if i try to access property Prod.name then it doesn't provide hint that name property is not exist
 */
// Typescript Based Code but not specific about properties of Object
const Prod : object = {
    id : 101,
    price: 300.20,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title : 'One-plus 9R',
        description: 'Brand New Oneplus 9R Black Gear Addition'
    }
}

/**
 * This approach is not the best one but just to be more specific this approach is used.
 * When we follow this approach then everytime when we try to access the properties of object,
 * it shows us hint of available properties.
 * For example : if i try to access property Product.name then it provide hint that name property is not exist.
 */
// Typescript Based Code but specific about properties of Object
const Product : {
    id: number,
    price: number,
    tags: string[],
    details : {
        title: string,
        description: string
    }
} = {
    id : 101,
    price: 300.20,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title : 'One-plus 9R',
        description: 'Brand New Oneplus 9R Black Gear Addition'
    }
}

export {Products, Prod, Product};