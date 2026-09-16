// 1. Basic click event
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function() {
    alert("You clicked me!");
});

const showTableButton = document.querySelector("#showTableButton");
showTableButton.addEventListener("click", function() {
    const tableContainer = document.getElementById("tableContainer");
    const animalTable = document.getElementById("animalTable");
    tableContainer.appendChild(animalTable);
});

// 2. Mouseover event

const exercise2Heading = document.querySelector("#Ex2");
exercise2Heading.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const exercise1Heading = document.querySelector("#Ex1");
exercise1Heading.addEventListener("click", function() {
    exercise1Heading.textContent = "Bye bye mouse!";
    exercise1Heading.style.color = "red";
});

// 3. Input event
 const feedback = document.querySelector("#feedback");
 const status = document.querySelector("#status");
 const charcount = document.querySelector("#charcount");
 const preview = document.querySelector("#preview");

 feedback.addEventListener("focus", function() {
        status.textContent = "Input is focused.";
        feedback.style.backgroundColor = "#ead4ff";
    });
feedback.addEventListener("blur", function() {
        status.textContent = "";
        feedback.style.backgroundColor = "";
    });

feedback.addEventListener("input", function() {
    const text = event.target.value;
    charcount.textContent = text.length + "/200";
    preview.textContent = text;
});

// 4. Form submission
const feedbackForm = document.querySelector("#feedbackForm");
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const textValue = feedback.value.trim();
    const length = textValue.length;

    if (length < 10 || length > 200) {
        status.textContent = "Feedback must be between 10 and 200 characters.";
        status.style.color = "red";
    } else {
        feedback.value = "";
        charcount.textContent = "0/200";
        preview.textContent = "";
        status.textContent = "Thank you for your feedback!";
        status.style.color = "green";
    }
});

// 5. Keyboard events
const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let keyCount = 0;

document.addEventListener("keydown", function(event) {
    console.log(event);
    keyCount++;
    const displayKey = event.key === " " ? "Space" : event.key;
    keyinfo.innerHTML = `
        <strong>Key: ${displayKey}</strong>
        <strong>Code: ${event.code}</strong>
        <strong>Total presses: ${keyCount}</strong><br>
        <small> Modifiers:
        Shift: ${event.shiftKey}
        Ctrl: ${event.ctrlKey}
        Alt: ${event.altKey}</small>
    `;
    keybox.textContent = displayKey;
    keybox.style.fontSize = "48px";
    keybox.style.fontWeight = "bold";
    keybox.style.textAlign = "center";
    keybox.style.backgroundColor = "#a1e4ad";

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    keybox.style.color = randomColor;
});

// Bonus:

// 1. Open Google Maps with spesific coordinates.

const mapCoord = `https://www.google.com/maps?q=60.1699,24.9384`;

window.open(mapCoord, '_blank');

// 2. Get user's current location and open Google Maps with those coordinates.

navigator.geolocation.getCurrentPosition(
  function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("Latitude: " + lat);
    console.log("Longitude: " + lon);

    
    const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;

    
    window.open(mapUrl, '_blank');
  },
  function (error) {
    console.log("Could not get the location: " + error.message);
  }
);