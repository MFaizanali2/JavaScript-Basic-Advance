// let user = { name: "Ali", age: 22 };

// let {name: userName, age: userAge} = user

// console.log(userName, userAge)


// let product = { title: "Mobile", price: 20000 };
// let {title} = product
// console.log(title)


// let colors = ["Red", "Green", "Blue"];
// let [a, b, c] = colors
// console.log(a, c)


let users = [
  { name: "Ali", age: 22 },
  { name: "Faizan", age: 17 }
];

users.forEach(({name, age})=>{
    console.log(`${name} is ${age} years old`)
    // console.log(`${name} is ${age} years old`)
})