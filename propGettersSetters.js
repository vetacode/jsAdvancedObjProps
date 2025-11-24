//2 KIND OF OBJECT PROPERTIES: DATA PROPERTIES AND ACCESSOR PROPERTY

//GETTERS
//Berguna saat kita ingin membaca nilai yang dihitung otomatis
//contoh: user.age, user.fullName, user.status

//SETTERS
//BERGUNA saat kita:
// 1. ingin memvalidasi data sebelum disimpan
// 2. ingin menjalankan logic otomatis
// 3. ingin menjaga data internal tetap bersih

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

//SMARTER getters/setters
let cust = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log('Nama terlalu pendek, minimal 4 karakter!');
      return;
    }
    this._name = value;
  },
};

cust.name = 'Pete';
console.log(cust.name);
cust.name = 'Lia'; //nama terlalu pendek
console.log(cust.name);
console.log(cust._name);

//Using for compatibility
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, 'age', {
    get() {
      const today = new Date();
      const thisYearsBirthday = new Date(
        today.getFullYear(),
        this.birthday.getMonth(),
        this.birthday.getDate()
      );
      let age = today.getFullYear() - this.birthday.getFullYear();
      if (today < thisYearsBirthday) age--;
      return age;
    },
  });
}

let vet = new User('Vetacode', new Date(1986, 10, 26));

console.log(vet.name);
console.log(
  vet.birthday.toLocaleDateString('id-ID', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  })
);
console.log(vet.age);
