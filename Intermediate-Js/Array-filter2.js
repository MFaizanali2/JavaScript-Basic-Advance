// let users = [
//     {name: "Faizan", age: 21, isActive: true},
//     {name: "shayan", age: 15, isActive: false},
//     {name: "Abid", age: 32, isActive: true}
// ]

// let results = users.filter(user => user.age >= 18 && user.isActive)

// console.log(results)


// let products = [
//   "Mobile",
//   "Laptop",
//   "Mouse",
//   "Monitor",
//   "Keyboard"
// ];

// let searchText = "mo"

// let result = products.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))

// console.log(result)


// let nums = [1, 2, 2, 3, 4, 4, 5];

// let unique = nums.filter((item, index, arr)=>{
//   return arr.indexOf(item) == index
// })
// console.log(unique)


// let products = [
//   { name: "Mobile", price: 20000 },
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1500 }
// ];

// let results = products.filter(p => p.price >= 2000 && p.price <= 50000)
// console.log(results)


// let scores = [45, 80, 30, 90, 60];

// let pass = scores.filter(m => m >= 50)

// console.log(pass)


// let users = [
//   { name: "Ali", role: "admin" },
//   { name: "Faizan", role: "user" },
//   { name: "Ahmed", role: "admin" }
// ];
// let admin = users.filter(item => item.role == "admin")
// console.log(admin)
// let use = []
// use.push(admin)
// console.log(admin)

// let clean = words.filter(item =>
//   item !== "" && item !== null && item !== undefined
// );


let words = ["js", "", "html", null, "css", undefined];
let check = words.filter(Boolean)
console.log(check)
// let check = words.filter(item => item === "" ? false : true)
// let check = words.filter(item => item === ("", null, undefined) ? false : true)