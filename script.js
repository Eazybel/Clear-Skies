const form=document.getElementById("weather-form")
const input=document.getElementById("city-input")
const city=document.getElementById("city-name")
const icon=document.getElementById("weather-icon")
const description=document.getElementById("description")
const temperature=document.getElementById("temperature")
const humidity=document.getElementById("humidity")
const wind=document.getElementById("wind")
const result=document.getElementById("weather-result")
const btn=document.getElementById("btn")
btn.onclick=(e)=>{
    e.preventDefault()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=d99bff6286cc266251816e686344a5f3`).then(
        res=>res.json()
    ).then(data=>{
           fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=d99bff6286cc266251816e686344a5f3`)
           .then(res=>res.json())
           .then(data=>{
            city.innerText=data.name
            description.innerText=data.weather[0].description
            icon.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
            temperature.innerText=(data.main.temp-273.15).toFixed(2)
            humidity.innerText=data.main.humidity
            wind.innerText=data.wind.speed
            result.style.display="block"
          
           })
    }

    ).catch(err=>{
        alert("Please make sure you typed correctly")
    })

}