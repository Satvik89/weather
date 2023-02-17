//API URL: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import key from apikey.js;
const button = document.querySelector("#search");
const city = document.querySelector("#input");

function search(input) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric `)
        .then(Response => Response.json())
        .then(data => {
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