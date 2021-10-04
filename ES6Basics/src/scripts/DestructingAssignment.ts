/** 
 * (@-@) ---- Destructing Assignment ---- (@-@)
 */

/** Array Destructing */
let tempArray = [10, 20, 30, 40, 50];
let [a, b] = tempArray;
let [c, d, ...rest] = tempArray;

let arrayDestructingResult = function() {
    console.log(a, b);
    console.log(c, d, rest);
}


/** Object Destructing */

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  let userId = function({id}) {
    return id;
  }
  
  let whois = function({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  let objectDestructingResult = function() {
    console.log(userId(user)); // 42
    console.log(whois(user));  // "jdoe is John"
  }

  export {
      arrayDestructingResult,
      objectDestructingResult,
  }