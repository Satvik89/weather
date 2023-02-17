//API URL: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const button = document.querySelector("#search");
const city = document.querySelector("#input");

function search(input) {
    // fetches data with metric units
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API key}&units=metric `)
        .then(Response => Response.json())
        .then(data => {
        // weather is in array in the json file it has only one element
            const description = data.weather[0].main;
            const location = data.name;
            const temp = data.main.temp;
            const wind = data.wind.speed;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;

            console.log(location, temp, wind, humidity, description);


            document.querySelector("#location").innerText = `Location: ${location}`;

            document.querySelector("#description").innerText = `${description}`;
            document.querySelector("#temp").innerHTML = `Temperatue: ${temp}°C`;
            document.querySelector("#wind").innerHTML = `Wind: ${wind} m/s`;
            document.querySelector("#humidity").innerHTML = `Humidity: ${humidity}%`;
            document.querySelector("#pressure").innerHTML = `Pressure: ${pressure} Pa`;
            document.getElementById('img').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            console.log(location);
            console.log(`https://source.unsplash.com/1600x900/?${location}`);
           // This is a website which will provide 1600x900 size of image of the location
            document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${location}')`;


        })
        .catch(error => {
            console.log("Error:", error);
        });
    city.value = "";
}
const answers = document.querySelector("#answers");


button.addEventListener("click", function() {
    console.log("button clicked");
    let input = city.value;

    search(input);
    answers.style.display = "block";

})
city.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        input = city.value;
        console.log("button clicked");
        search(input);
        answers.style.display = "block";

    }
})
