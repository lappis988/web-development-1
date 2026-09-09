// STEP 1: Print text to the browser console is string ""
console.log("Hello world!");

// STEP 2: Variables
const userName = "Iida";
const favoriteAnimal = "Rottweiler";

// Store text values in variables

// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction

// Display a pop-up message
alert("Welcome to the Rottweiler page!");

// Ask the user for their name
const visitorName = prompt("What is your name?");

// Print the user's answer
console.log(visitorName);

// Create a greeting using the user's answer
console.log("Hello " + visitorName + "! Welcome to the Rottweiler page!");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// Create a sentence using both answers
console.log("Hello " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// IF / ELSE statement
if (visitorFavoriteAnimal.toLowerCase() === "rottweiler") {
    console.log("Great choice! Rottweilers are my favorite too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}
