// let num = [3, 6, 8, 98]
// let results = num.map(n => n * 2 )
// console.log(results)

// let price = [100, 200, 300]
// let pricewithtag = price.map(price => price + price * 0.1)
// console.log(pricewithtag)

// let Name = ["ali", "faizan", "ahmad"]

// let capatalize = Name.map(Name => Name.toUpperCase())

// console.log(capatalize)

// let marks = [
//     {
//         name: "Faizan",
//         mark: 89,
//     },
//     {
//         name: "Ali",
//         mark: 76,
//     },
//     {
//         name: "Ahmad",
//         mark: 95,
//     },
//     {
//         name: "Sameer",
//         mark: 34,
//     },
// ]

// let marksMap = marks.map(marks => marks.name)

// console.log(marksMap)


// let products = [
//   { title: "Mobile", price: 20000 },
//   { title: "Laptop", price: 80000 },
// ];

// let update = products.map((index) => {
//     return{
//         title: index.title,
//         price: index.price + index.price * 0.15,
//     }
// })

// console.log(update)


// let nums = [2, 4, 6];

// let multiple = nums.map(nums => nums * 2)

// console.log(multiple)


// let names = ["js", "html", "css"];

// let capatalize = names.map(names => names.toUpperCase())

// console.log(capatalize)


let users = [
  { name: "Ali", age: 17 },
  { name: "Faizan", age: 22 }
];

let results = users.map((item)=>{
    return{
        name: item.name,
        status: item.age >= 18 ? "Adult" : "Minor",
    }
})

console.log(results)