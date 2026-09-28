// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// Change style button

const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// change animal text
const changeTextButton = document.querySelector("#changeTextButton");
changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Uusi eläin teksti!";
});

// Bonus 1
const appendTextButton = document.querySelector("#btn-append-text");
appendTextButton.addEventListener("click", function () {
    animalText.textContent += " Tämä on lisätty lause.";
});

// Bonus 2
const changeBgButton = document.querySelector("#btn-bg-color");
changeBgButton.addEventListener("click", function () {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lavender" ? "white" : "lavender";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Animal Table button clicked")
});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

// TASK 2 -- Creating elements with JS
const animalContent = document.querySelector("#animalContent");
const hideBtn = document.querySelector("#hideAnimalButton");
const showBtn = document.querySelector("#showAnimalButton");

const heading = document.createElement("h3");
heading.textContent = "Animal of the Day";
heading.classList.add("animal-heading");

const paragraph = document.createElement("p");
paragraph.textContent = "The animal of the day is the red panda.";
paragraph.classList.add("animal-paragraph");

const image = document.createElement("img");
image.src = "IMAGES/red-panda.jpg";
image.alt = "Red Panda";
image.classList.add("animal-image");

animalContent.append(heading, paragraph, image);

hideBtn.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showBtn.addEventListener("click", function () {
    animalContent.style.display = "block";
});





// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");


// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

// function to update the DOM based on the selected animal

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "IMAGES/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent = "The elephant is the largest land mammal.";
    }

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "IMAGES/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent = "The tiger is the largest member of the cat family.";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "IMAGES/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent = "The penguin is a flightless bird that lives in the Southern Hemisphere.";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "IMAGES/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "The panda is a bear species endemic to China.";
    }
});

// Task 4 - Adding animal observations

const animalForm = document.querySelector("#animalForm");
const animalInput = document.querySelector("#observationAnimal");
const locationInput = document.querySelector("#observationLocation");
const dateInput = document.querySelector("#observationDate");
const tableBody = document.querySelector("#observationTableBody");

function addDeleteButton(tr) {
    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Remove";
    deleteBtn.type = "button";

    deleteBtn.addEventListener("click", function () {
        tr.remove();
    });

    deleteTd.append(deleteBtn);
    tr.append(deleteTd);
}

const existingRows = tableBody.querySelectorAll("tr");
existingRows.forEach(function (tr) {
    addDeleteButton(tr);
});

const tableHeaderow = document.querySelector("#observationTable thead tr");
if (tableHeaderow && !tableHeaderow.querySelector(".action-header")) {
    const actionTh = document.createElement("th");
    actionTh.textContent = "Action";
    actionTh.classList.add("action-header");
    tableHeaderow.append(actionTh);
}

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animalValue = animalInput.value.trim();
    const locationValue = locationInput.value.trim();
    const dateValue = dateInput.value.trim();

    if (animalValue === "" || locationValue === "" || dateValue === "") {
        alert("Please fill in all the fields before submitting.");
        return;
    }

    const newTr = document.createElement("tr");

    const animalTd = document.createElement("td");
    animalTd.textContent = animalValue;

    const locationTd = document.createElement("td");
    locationTd.textContent = locationValue;

    const dateTd = document.createElement("td");
    dateTd.textContent = dateValue;

    newTr.append(animalTd, locationTd, dateTd);

    addDeleteButton(newTr);

    tableBody.append(newTr);

    animalForm.reset();

});

const animalImg = document.querySelector("#animalImg");
const moveBtn = document.querySelector("#moveBtn");
const animateBtn = document.querySelector("#animateBtn");
const fadeBtn = document.querySelector("#fadeBtn");
const removeBtn = document.querySelector("#removeBtn");
const loopListBtn = document.querySelector("#loopListBtn");

moveBtn.addEventListener("click", () => {
    if (animalImg) {
    animalImg.classList.toggle("moved");
    }
});

animateBtn.addEventListener("click", () => {
    if (animalImg) {
    animalImg.classList.toggle("animated");
    }
});

fadeBtn.addEventListener("click", () => {
    if (animalImg) {
    animalImg.classList.toggle("faded-out");
    }
});

removeBtn.addEventListener("click", ()=> {
    if (animalImg) {
    animalImg.remove();
    }
});

loopListBtn.addEventListener("click", () => {
    const listItems = document.querySelectorAll("li");

    listItems.forEach((item, index) => {
    item.style.fontWeight = "bold";
    item.style.color = "#007acc";
    console.log(`Item ${index + 1}: ${item.textContent}`);
    });
});