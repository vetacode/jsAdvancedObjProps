'use strict';

//Property flags and descriptors
//It returns property descriptors

let user = {
  name: 'John',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
//TO CHANGE FLAGS:
//SYNTAX: Object.defineProperty(obj, propertyName, descriptor)

//READ-ONLY
let user2 = {
  name: 'John',
};

Object.defineProperty(user2, 'name', {
  writable: false,
  enumerable: true,
  configurable: true,
});

// user2.name = 'Pete'; //ga ngaruh coz udh read-only
console.log(user2); //tetap {name: 'John'}

//NON-ENUMERABLE
let user3 = {
  name: 'John',
  toString() {
    return this.name;
  },
};

Object.defineProperty(user3, 'toString', {
  // enumerable: true,
  enumerable: false,
});

// Now our toString disappears:
for (let key in user3) console.log(key); // name
console.log(Object.keys(user3)); //also excluded from Object.keys()

//NON-CONFIGURABLE
//Cannot assign delete obj.prop

let user4 = {
  name: 'John',
};

Object.defineProperty(user4, 'name', {
  configurable: false,
});

user4.name = 'Pete'; // works fine, coz writable is true
console.log(user4); //Pete
// delete user4.name; // Error coz configurable is false
