// Store your OpenWeatherMap API key.
const apiKey = "2a06417d34781eb11fe1824759ddd267";

// Find the HTML element where we display the weather data.
const weatherdata = document.getElementById("weatherdata");
const cityDropdown = document.getElementById("city");
const citySearchInput = document.getElementById("citysearch");
const searchButton = document.getElementById("search");
const fetchWeatherButton = document.getElementById("fetchWeather");



// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
// document.querySelector("#fetchWeather").addEventListener("click", async function() {
async function fetchWeatherForCity(cityName) {
    if (!cityName || cityName.trim() === "") {
        weatherdata.textContent = "Please enter or select a city.";
        return;
    }


     // Display a loading message.
     weatherdata.textContent = "Loading weather data...";
   

    // Try to fetch and process the weather data.
    try {
  

        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=metric&mode=xml&appid=${apiKey}`
        );
      

        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
         // Create an error and jump to the catch block.

        
        // PARSING THE XML DATA
        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        // convert the XML text into a document we can search
        const xml = new DOMParser().parseFromString(xmlText, "application/xml");
        
        // Find the temperature element in the XML document.
        const temperatureElement = xml.querySelector("temperature");

        // read the value attribute, for example "7.86"
        const temperature = temperatureElement.getAttribute("value");

        // Name attribute
        const cityElement = xml.querySelector("city");
        const actualCityName = cityElement.getAttribute("name");

        // Display only the temperature in the page.
        weatherdata.textContent = `Temperature in ${actualCityName}: ${temperature} °C`;

        // Display the XML as plain text on the page.
        // weatherdata.textContent = xmlText;
       

    // Handle errors from the request or the code above.
    } catch (error) {
  

        // Choose an error message in the page's language.
   

        // Display the message and details of the error
        weatherdata.textContent = `Error: ${error.message}`;
    }
}

// Dropdown menu for selecting the city
cityDropdown.addEventListener("change", function() {
    fetchWeatherForCity(cityDropdown.value);
});

// Search button for entering a city name
searchButton.addEventListener("click", function() {
    const searchQuery = citySearchInput.value.trim();
    fetchWeatherForCity(searchQuery);
});

// Allow pressing Enter key to trigger the search
fetchWeatherButton.addEventListener("click", function() {
    fetchWeatherForCity(cityDropdown.value);
});