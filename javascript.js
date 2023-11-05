async function checkwaether(){
    const apiKey = "a178a2716f0c99cdbec6d26e950782cd"
    const cityName = document.querySelector('input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const textTemp = document.querySelector('.temp');
    const textCity = document.querySelector('.city');
    const textHumidity = document.querySelector('.humidity');
    const textWind = document.querySelector('.wind');
    const img = document.querySelector('.weather-image');
    const waether = document.querySelector('.weather');
    const loader = document.querySelector('.load');

    loader.style.display = "block"

    waether.style.display = "none";

    response = await fetch(apiUrl);

    data = await response.json();

    loader.style.display = "none"

    

    textTemp.innerHTML = data.main.temp + " " + "°C";
    textCity.innerHTML = data.name;
    textHumidity.innerHTML = data.main.humidity +  "%";
    textWind.innerHTML = data.wind.speed + " " + "km/h";

    
    
    if(img!=null){
        if(data.weather[0].main == "Clouds"){
            img.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            img.src="images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            img.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            img.src="images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            img.src="images/mist.png";
        }
    }
    waether.style.display = "block"
    
}