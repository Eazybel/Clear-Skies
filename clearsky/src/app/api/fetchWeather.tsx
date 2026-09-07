export default async function  fetchWeather(formData:FormData){
const cityName=formData.get("city")


try{
   
      const response=await fetch(`https://geocode.maps.co/search?q=${cityName}&api_key=6a9e864fde97d568213086chl07ce55`)
    const data=await response.json()
     const responseGeo=await fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${data[0].lat}&longitude=${data[0].lon}&daily=river_discharge,river_discharge_max,river_discharge_p75,river_discharge_p90`)
    const dataGeo=await responseGeo.json()
    console.log(dataGeo)
    // console.log(data[0])
}catch(error:unknown){
    console.log(error)
}
 
}