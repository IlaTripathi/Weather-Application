//API KEY : c032236404831762c2468da56e636970

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const cityName = document.querySelector(".cityName");
const searchBtn = document.querySelector(".search-btn");

const temperature = document.querySelector(".temp");
const place = document.querySelector(".location");
const humid = document.querySelector(".humid");
const windSpeed = document.querySelector(".wind");

const weatherImg = document.querySelector(".weather-Img");

// console.log(cityName);



searchBtn.addEventListener("click", async (evt) => {

    let city = cityName.value;
    // console.log(city);

    let URL = `${BASE_URL}${city}&appid=c032236404831762c2468da56e636970&units=metric`;
    let response = await fetch(URL);

    if (response.status = 404) {
        place.innerHTML = "Location Not Found!"
    }

    let data = await response.json();

    // console.log(data);
    // let humi = data["main"].humidity;
    // console.log(humi);
    // let tempe = data["main"].temp;
    // console.log(tempe);
    // let place = data["name"];
    // console.log(place);
    // let wind = data["wind"].speed;
    // console.log(wind);

    temperature.innerHTML = `${data["main"].temp}°C`;
    place.innerHTML = data["name"];
    humid.innerHTML = `${data["main"].humidity}%`;
    windSpeed.innerHTML = `${data["wind"].speed} km/h`;

    let imageUpdation = data["weather"][0].main;
    // console.log(imageUpdation);

    if (imageUpdation === "Clear") {
        weatherImg.src = "./clear.png"
    }
    else if (imageUpdation === "Clouds") {
        weatherImg.src = "./clouds.png"
    }
    else if (imageUpdation === "Drizzle") {
        weatherImg.src = "./drizzle.png"
    }
    else if (imageUpdation === "Humidity") {
        weatherImg.src = "./humidity.png"
    }
    else if (imageUpdation === "Mist") {
        weatherImg.src = "./mist.png"
    }
    else if (imageUpdation === "Rain") {
        weatherImg.src = "./rain.png"
    }
    else if (imageUpdation === "Snow") {
        weatherImg.src = "./snow.png"
    }
    else if (imageUpdation === "Haze") {
        weatherImg.src = "./haze.png"
    }

})
