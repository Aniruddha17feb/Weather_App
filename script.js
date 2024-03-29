document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "b1693ed7ad181ad79817cc99d0523aa3";
    const cityname = document.getElementById("cityname");
    const fetchweatherbtn = document.getElementById("fetchweather");
    const weatherresult = document.getElementById("weatherresult");
  
    fetchweatherbtn.addEventListener("click", () => {
      const city = cityname.value.trim();
      if (!city) {
        alert("enter the city name");
        return;
      }
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const { temp: temperature } = data.main;
          const { description: weatherdescription } = data.weather[0];
          weatherresult.innerHTML = `<p>temperature : ${temperature} &#8451</p><p>weather description : ${weatherdescription}</p>`;
        })
        .catch((error) => {
          console.error("error fetching in weather", error);
          weatherresult.innerHTML = "weather details not available";
        });
    });
  });