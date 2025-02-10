const apiKey = 'd5648fcf2f7e1b455a663091e19c52a2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

async function getWeather(city='mumbai') {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    let weather_img = document.getElementById('weather_img');
    
    if (data.weather[0].main == 'Clear'){
        weather_img.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Clouds'){
        weather_img.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Drizzle'){
        weather_img.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist'){
        weather_img.src = 'images/mist.png';
    } else if (data.weather[0].main == 'Rain'){
        weather_img.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Snow'){
        weather_img.src = 'images/snow.png';
    } else {
        console.warn('error');
    }

    document.getElementById('temperature').innerHTML = `${data.main.feels_like}&deg;c`;
    document.getElementById('city_name').innerHTML = `${data.name}`;
    document.querySelector('#wind_speed p').innerHTML = `${data.wind.speed} km/h`;
    document.querySelector('#humidity p').innerHTML = `${data.main.humidity}%`;
}

getWeather();

var cityName;
document.getElementById('search_inp').addEventListener('input',()=>{
    cityName = search_inp.value;
})
document.getElementById('search_btn').addEventListener('click',()=>{
    getWeather(cityName);
})