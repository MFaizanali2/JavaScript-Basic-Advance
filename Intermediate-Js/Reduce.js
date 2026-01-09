// let nums = [10, 20, 30]
// let add = nums.reduce((arr, item)=>{
//     return arr + item;
// }, 0)
// console.log(add)


// let cart = [
//     {name: "Laptop", price: 30000},
//     {name: "Mobile", price: 25000},
//     {name: "Bike", price: 50000},
// ]
// let total = cart.reduce((arr, item)=>{
//     return arr + item.price;
// }, 0)
// console.log(total)


// let fruits = ["apple", "banana", "apple", "orange", "banana"];

// let count = fruits.reduce((arr, item)=>{
//     arr[item] = (arr[item] || 0) + 1
//     return arr;
// }, {})

// console.log(count)


// let users = [
//   { name: "Ali", age: 17 },
//   { name: "Faizan", age: 22 }
// ];

// let check = users.reduce((arr, user)=>{
//     if(user.age >= 18){
//         arr.adult.push(user)
//     }else{
//         arr.minor.push(user)
//     }
//     return arr;
// },{adult: [], minor: []})

// console.log(check)



// Practice Task Question
// let numbers = [5, 10, 15];
// let total = numbers.reduce((arr, item)=>{
//     return arr + item;
// }, 0)
// console.log(total)



// let products = [
//   { name: "Pen", price: 10 },
//   { name: "Book", price: 50 },
//   { name: "Bag", price: 200 }
// ];

// let checkTotal = products.reduce((arr, item)=>{
//     return arr + item.price;
// }, 0)
// console.log(checkTotal)



let votes = ["yes", "no", "yes", "yes", "no"];

let checkVote = votes.reduce((arr, item)=>{
    arr[item] = (arr[item] || 0) + 1;
    return arr;
}, {})
console.log(checkVote)