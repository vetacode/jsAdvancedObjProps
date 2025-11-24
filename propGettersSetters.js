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
