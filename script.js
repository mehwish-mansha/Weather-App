let submit = document.getElementById('submit');
let cityInput = document.getElementById('cityInput');


submit.addEventListener('submit', async (e)=>{
    // console.log(e)
    e.preventDefault();
    console.log(cityInput.value)


        
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=cf9a2b4b390944269ef43149230403&q=${cityInput.value}`);
    console.log(response.data);

    let weatherData = response.data;

    document.getElementById('temp').innerText = weatherData.current.temp_c
     document.getElementById('country').innerText = weatherData.location.country
     document.getElementById('region').innerText = weatherData.location.region
     document.getElementById('localTime').innerText = weatherData.location.localtime
     document.getElementById('humidity').innerText = weatherData.current.humidity
    }
 catch (error) {
    console.error(error);
  }


})