// let user = {
//   name: "Ali",
//   age: 22,
//   city: "Lahore"
// };

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// Object.entries(user).forEach(([key , value]) => {
//     console.log(key)
//     console.log(value)
// })


// let marks = {
//   math: 80,
//   english: 70,
//   science: 90
// };

// let total = Object.values(marks).reduce((sum, n) => sum + n, 0)
// console.log(total)


// let permissions = {
//   read: true,
//   write: false,
//   delete: true
// };

// let allowed = Object.entries(permissions)
//   .filter(([_, value]) => value)
//   .map(([key]) => key);

// console.log(allowed);


let settings = {
  darkMode: true,
  notifications: false,
  autoSave: true
};

let check = Object.entries(settings).filter(([_, item]) => item).map(([key]) => key)
console.log(check)


// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };

// console.log(Object.keys(car))


// let prices = {
//   apple: 100,
//   banana: 50,
//   mango: 150
// };

// let total = Object.values(prices).reduce((sum, n) => sum + n, 0)
// console.log(total) 