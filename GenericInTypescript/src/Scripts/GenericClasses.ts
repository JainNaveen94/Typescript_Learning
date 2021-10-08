/** Here we will see Generic Classes */

/**
 * (@--@) ---- Generic Class ---- (@--@)
 * - When Generic Behaviour is Used to Define the Classes then that interface is called the Generic Class.
 * - The generic class can also implement a generic interface.
 */

// Generic Interface Defination
interface IKeyValuePair<T, U> {
    display(key: T, value: U): void ;
}
// Generic Class Defination
class KeyValuePair<T, U> implements IKeyValuePair<T, U>{
    private key: T;
    private value: U;

    constructor(key: T, value: U){
        this.key = key;
        this.value = value;
    }

    get getKey() {
        return this.key;
    }

    get getValue() {
        return this.value;
    }

    display(key: T, value: U) : void {
        console.log(`The Processing is Done for Key : ${key} & value: ${value}`)
    }
}

// Using Class to Define Object
// let processKeyValuePair =  new KeyValuePair<number, string>(101, "Naveen");
// processKeyValuePair.display(processKeyValuePair.getKey, processKeyValuePair.getValue);

export {
    IKeyValuePair,
    KeyValuePair,
}