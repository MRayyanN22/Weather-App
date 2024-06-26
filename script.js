let weather = {
    apiKey: "abcb11547d7481d43a88a2439b087439",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=imperial&appid="
        + this.apiKey)

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    
    },

    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round((temp-32)/1.8) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1189×707/?" + name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
};

document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
    weather.search();

    }

})

weather.fetchWeather("Manchester");
