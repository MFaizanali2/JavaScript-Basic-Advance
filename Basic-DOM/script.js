// let title = document.getElementById("h1")
// let title = document.querySelector("#h1")
// title.innerText = "Hello Javascript"
// title.innerHTML = "<h3>Hello Javascript</h3>"
// title.style.color = "blue";
// console.log(title)

// const heading = document.getElementById("btn");
// const button = document.getElementById("myBtn");

// button.addEventListener("click", function () {
//     heading.style.color = "red";
// });

document.getElementById("myBtn").addEventListener("click", () => {
    document.getElementById("btn").style.color = "red";
});