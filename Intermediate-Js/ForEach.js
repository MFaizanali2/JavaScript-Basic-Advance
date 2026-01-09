// let items = ["Apple", "Banana", "Mango"];
// let ul = document.getElementById("ul")

// items.forEach(item => {
//     ul.innerHTML += `<li>${item}<li />`
// })

// console.log(items)

// let items = ["Apple", "Banana", "Mango"];
// let ul = document.getElementById("list");

// items.forEach(item => {
//   ul.innerHTML += `<li>${item}</li>`;
// });

// let colors = ["Red", "Green", "Blue"];

// let ul = document.getElementById("list");

// colors.forEach(item => {
//   ul.innerHTML += `<li>${item}</li>`;
// });


// let nums = [10, 20, 30];

// nums.forEach((item, index) => {
//     console.log(`Index: ${index} Value: ${item}`);
// })
// console.log(nums)



let users = [
  { name: "Ali", age: 22 },
  { name: "Faizan", age: 17 }
];

let ul = document.getElementById("usersList");

users.forEach(user => {
    if (user.age >= 18) {
        ul.innerHTML += `<li>${user.name} (${user.age})</li>`;
    }
});
// console.log(users)