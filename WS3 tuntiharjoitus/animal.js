// 1. When the user clicks the button, show a message about the rottweiler.

const animalButton = document.getElementById("animalButton");

animalButton.addEventListener("click", function() {
    alert("Rottweilers are loyal and protective dogs.");
});


// click = event
// addEventListener = listen for the event
// function = what happens after the event

// 2. ID HTML defines the page. The browser creates the DOM, and JavaScript can access the DOM. The ID is used to find the element in the DOM.

const animalTitle = document.getElementById("animalTitle");

animalTitle.addEventListener("click", function() {
    animalTitle.textContent = "Rottweilers are loyal and protective dogs.";
    animalTitle.style.color = "brown";
});

// 3. MOUSEOVER

const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function() {
    animalImage.style.border = "5px solid brown";
    console.log("Mouse is over the image.");
});

// 4. Input event. The input event happens everytime the value changes. 

const animalInput = document.querySelector("#animalInput");
const animalOutput = document.querySelector("#animalOutput");

animalInput.addEventListener("input", function() {
    animalOutput.textContent = animalInput.value;
});

// then print on console when the input is focused and when it loses focus

animalInput.addEventListener("focus", function() {
    console.log("Input is focused.");
});

animalInput.addEventListener("blur", function() {
    console.log("Input lost focus.");
});

// 6. Form + submit + preventDefault()
// preventDefault stops the browser's normal form submission, so JavaScript can handle the form submission instead. This allows for custom validation, AJAX submissions, or other behaviors without reloading the page.

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function(event) {
    event.preventDefault();
    animalOutput.textContent = "Your favorite animal is: " + animalInput.value;
    console.log("Form submitted with animal: " + animalInput.value);
});

// 7. Key down demonstration.

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
});