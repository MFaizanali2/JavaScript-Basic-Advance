// let nums = [10, 20, 30, 40];
// let result = nums.find(n => n > 20)
// console.log(result)


// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Faizan" }
// ];

// let user = users.find(n => n.id === 2)
// console.log(user)


// let nums = [10, 2, 30];
// nums.sort((a, b) => a - b)
// console.log(nums)

// let nums = [10, 2, 30];
// nums.sort((a, b) => b - a)
// console.log(nums)


// let products = [
//   { name: "Mouse", price: 1500 },
//   { name: "Laptop", price: 80000 },
//   { name: "Mobile", price: 20000 }
// ];

// let price = products.sort((a,b)=> a.price - b.price)
// let sorted = [...products].sort((a,b)=> a.price - b.price)
// console.log(sorted)


// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Faizan" },
//   { id: 3, name: "Ahmed" }
// ];
// let user = [...users].find(n => n.id === 3)
// console.log(user)


// let scores = [45, 80, 30, 90, 60];
// let set = [...scores].sort((a,b) => a - b)
// console.log(set)


let products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 200 },
  { name: "Book", price: 50 }
];

let price = [...products].sort((a,b) => a.price - b.price)
console.log(price)