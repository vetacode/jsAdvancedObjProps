//2 KIND OF OBJECT PROPERTIES: DATA PROPERTIES AND ACCESSOR PROPERTY

//GETTERS AND SETTERS
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

let user = {
  firstName: 'Abi',
  lastName: 'Abigail',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};

console.log(user.fullName); // Abi Abigail

user.fullName = 'Alice Wonder';
console.log(user.firstName);
console.log(user.lastName);

//ACCESSOR DESCRIPTORS
let user2 = {
  first: 'Untung',
  last: 'Selalu',
};

Object.defineProperty(user2, 'full', {
  get() {
    return this.first + ' ' + this.last;
  },

  set(value) {
    [this.first, this.last] = value.split(' ');
  },
});

console.log(user2.full); //Untung Selalu
for (let key in user2) console.log(key);

//NOTE: ERROR if we try to assign props on getters or setters
// Error: Invalid property descriptor.
// Object.defineProperty({}, 'prop', {
//   get() {
//     return 1;
//   },

//   value: 2,
// });
