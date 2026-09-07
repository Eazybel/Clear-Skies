export default async function  fetchWeather(formData:FormData){
const cityName=formData.get("city")
interface DailyDataInterface{
        day:string,
        riskLevel:string,
        message:string
    }

const dailyData:DailyDataInterface=[]
const response=await fetch(`https://geocode.maps.co/search?q=${cityName}&api_key=6a9e864fde97d568213086chl07ce55`)
const data=await response.json()
await fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${data[0].lat}&longitude=${data[0].lon}&daily=river_discharge,river_discharge_max,river_discharge_p25,river_discharge_p75`).then(res=>{
    return res.json()
}).then(dataGeo=>{

for (let i = 0; i < dataGeo.daily.time.length; i++) {
  dailyData.push({
    dail
  })
    
}

})

 
}