let data;

const inputBox = document.getElementById("user_input");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const WindSpeed = document.getElementById("WindSpeed");
const Temperature = document.getElementById("Temperature");
const icon = document.getElementById("logoImage");
const weatherstatus = document.getElementById("weatherstatus");
const localtime = document.getElementById("localtime");


const getData = async (event) =>{
    event.preventDefault();
    if(!user_input.value){
        alert("Please Enter the City Name:");
        return;
    }

    const city = user_input.value;

    // Fetch Details

    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=829426e00c3c4ab186e154729231304&q=${city}`);

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    // Displaying the data in html

    localtime.innerHTML =data.location.localtime;
    icon.src =data.current.condition.icon;
    weatherstatus.innerHTML =data.current.condition.text;



    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;

    humidity.innerHTML = data.current.humidity;
    WindSpeed.innerHTML = data.current.wind_kph;
    Temperature.innerHTML = data.current.temp_c;



}

