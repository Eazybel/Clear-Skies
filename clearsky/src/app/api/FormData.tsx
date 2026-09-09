"use server"


export default async function FormHandle(prevState:unknown,formData:FormData){
    const city:FormDataEntryValue | null =formData.get("city")as string

 const resCity= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50d7544ae9e5e20beba141fc0c75f586`)
 const dataCity=await resCity.json()
 const resFlood= await fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${dataCity.coord.lat}&longitude=${dataCity.coord.lon}&daily=river_discharge,river_discharge_mean`)
 const dataFlood=await resFlood.json()
 return {dataFlood,dataCity}

}