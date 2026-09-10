"use server"


export default async function FormHandle(prevState:unknown,formData:FormData){
    const city:FormDataEntryValue | null =formData.get("city")as string

 const resCity= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=50d7544ae9e5e20beba141fc0c75f586`)
 const dataCity=await resCity.json()
if(resCity.ok){
 const resFlood= await fetch(`https://flood-api.open-meteo.com/v1/flood?latitude=${dataCity.coord.lat}&longitude=${dataCity.coord.lon}&daily=river_discharge,river_discharge_mean`)
 const dataFlood=await resFlood.json()
//  if(!resFlood.ok){
//     return{error:"error in flood"}
// }else{

// }
return {dataFlood,dataCity}
}else if(!resCity.ok){
    return{error:resCity.statusText}
}


}