// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '21255562c0msh00d12b094d62fa8p12728djsnc34e6e2dc1ed',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const inputBox = document.querySelector('.input_box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather_img');
const tempraure = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather_body');

async function checkWeather(city){
const api_key = "e91a2a0387c3f1c38d1ae483b6b47e3f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());


if(weather_data.cod === `404`){
location_not_found.style.display = 'flex';
weather_body.style.display = 'none';
	console.log("error");
	return;
}

// console.log(weather_data)

location_not_found.style.display = 'none';
weather_body.style.display = 'flex';
tempraure.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML =`${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
	weather_img.src = "images/cloudy.png";
	break;
	case 'Clear':
	weather_img.src = "images/clear.png";
	break;
	case 'Rain':
	weather_img.src = "images/rain.png";
	break;
	case 'Mist':
	weather_img.src = "images/mist.png";
	break;
	case 'Snow':
	weather_img.src = "images/snow.png";
	break;
	case 'Drizzle':
	weather_img.src = "images/drizzle.png";
	break;
	case 'Haze':
	weather_img.src = "images/haze.png";
	break;
	case 'Scattered Clouds':
	weather_img.src = "images/scattering.png";
	break;
	case 'Smoke':
	weather_img.src = "images/smoky.png";
	break;
	case 'Broken Clouds':
	weather_img.src = "images/scattering.png";
}


}

searchBtn.addEventListener('click', ()=>{
	checkWeather(inputBox.value)
})



