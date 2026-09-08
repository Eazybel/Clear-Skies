export default async function  fetchWeather(prevState:unknown,formData:FormData){
const cityName=formData.get("city")
interface DailyDataInterface{
        day:string,
        riskLevel:string,
        message:string,
        currentTemp:string,
        rain:string
    }

try{
    const dailyData:DailyDataInterface[]=[]
const response=await fetch(`https://geocode.maps.co/search?q=${cityName}&api_key=6a9e864fde97d568213086chl07ce55`)
const data=await response.json()
const responseCloud=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=928a870c1c8f5ad9e0b501f9c4b4333d`)
const dataCloud=await responseCloud.json()
const responseFlood=await fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${data[0].lat}&longitude=${data[0].lon}&daily=river_discharge,river_discharge_max,river_discharge_p25,river_discharge_p75,river_discharge_median`)
const dataGeo=await responseFlood.json()

for (let i = 0; i < 10; i++) {
const day=dataGeo.daily.time[i]
const max=dataGeo.daily.river_discharge_max[i]
const pg75=dataGeo.daily.river_discharge_p75[i]
const median=dataGeo.daily.river_discharge_median[i]
let message:string="Its normal dat"
let riskLevel:string="Normal"
if(max>pg75*2.0&&max>median*2.5){
    message="Severe flood warning: Significant overflow potential detected along the river basin."
    riskLevel="High"
}else if(max>pg75){
     message="Normal Flow: River discharge levels are stable and tracking safely within normal baseline limits."
    riskLevel="Normal"

}
  dailyData.push({
   "day":day,
   "riskLevel":riskLevel,
   "message":message,
   "currentTemp":`${dataCloud.main.temp} °C`,
   "rain":`${dataCloud.rain?.["1h"]??0} mm`
  })
    
}

return dailyData
}catch(error:unknown){
    console.log(error)
    return []
}
 
}