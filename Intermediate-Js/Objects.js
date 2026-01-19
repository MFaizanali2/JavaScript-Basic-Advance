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


// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };

// console.log(Object.keys(car))


let prices = {
  apple: 100,
  banana: 50,
  mango: 150
};

let total = Object.values(prices).reduce((sum, n) => sum + n, 0)
console.log(total) 