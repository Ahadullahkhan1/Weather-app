let form = document.getElementById("form");
let weather = document.querySelector(".Weather");
let getWeather = async (userName) => {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9b4be8cc2ddc460993a141449242911&q=${userName}&aqi=no`
  );
  return await response.json();
};
function htmlRender(res) {
  weather.innerHTML = `    
<h1>Weather in ${res.location.name}</h1>
<p>Temperature: ${res.current.temp_c}</p>
<img src=${res.current.condition.icon} alt="">
   
  `;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("search").value;
  if (name == "") {
    alert("Please enter your name");
  } else {
    getWeather(name)
      .then((res) => {
        htmlRender(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  form.reset();
});
window.addEventListener("load", () => {
  getWeather("pakistan")
    .then((res) => {
      htmlRender(res);
    })
    .catch((err) => {
      console.log(err);
    });
});