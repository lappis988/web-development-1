
// 1.
console.log("Hello world!");

alert("Hello world!");

// 2.

const userName = "Iida";let userAge = 28; const favoriteAnimal = "dogs";
console.log(userName, userAge, favoriteAnimal);
console.log("Hi! My name is " + userName + ", I am " + userAge + " years old. My favorite animal is " + favoriteAnimal + ".");

// 3.
const visitorName = prompt("What is your name?");
console.log("Hello " + visitorName + "! Welcome to JavaScript basics!");

// 4.
const visitorAge = prompt("What is your age?");
if (visitorAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// 5.
function greetUser(visitorName) {
    console.log("Hello " + visitorName + "! Welcome!");
}
greetUser(visitorName);

// BONUS
 const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("JavaScript is awesome!");
});


