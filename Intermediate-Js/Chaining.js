// let users = [
//   { name: "Ali", age: 22, isActive: true, amount: 200 },
//   { name: "Faizan", age: 17, isActive: true, amount: 100 },
//   { name: "Ahmed", age: 25, isActive: false, amount: 300 }
// ];

// let total = users
// .filter(u => u.age >= 18 && u.isActive)
// .map(u => u.amount)
// .reduce((sum, item) => sum + item, 0)

// console.log(total)



// let students = [
//   { name: "Ali", marks: 80 },
//   { name: "Faizan", marks: 45 },
//   { name: "Ahmed", marks: 70 }
// ];

// let result = students
// .filter(a => a.marks >= 50)
// .map(a => a.marks)
// .reduce((sum, m, _, arr) => sum + m / arr.length, 0)

// console.log(result)



// let orders = [
//   { status: "completed", amount: 500 },
//   { status: "pending", amount: 200 },
//   { status: "completed", amount: 300 }
// ];


// let check = orders
// .filter(a => a.status == "completed")
// .map(a => a.amount)
// .reduce((sum,arr) => sum + arr, 0)

// console.log(check)


// let nums = [1, 2, 3, 4, 5, 6];

// let even = nums
// .filter(a => a % 2 == 0)
// .map(a => a ** 2)
// .reduce((sum,arr) => sum + arr, 0)

// console.log(even)


let users = [
  { name: "Ali", role: "admin", salary: 50000 },
  { name: "Faizan", role: "user", salary: 30000 },
  { name: "Ahmed", role: "admin", salary: 60000 }
];


let checkUser = users
.filter(a => a.role == "admin")
.map(a => a.salary)
.reduce((sum,arr) => sum + arr, 0)

console.log(checkUser)