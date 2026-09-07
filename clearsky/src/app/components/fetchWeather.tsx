export default async function  fetchWeather(){
try{
    const response=await fetch("https://flood-api.open-meteo.com/v1/flood?latitude=59.91&longitude=10.75&daily=river_discharge")
    const data=await response.json()
    return data
}catch(error:unknown){
    console.log(error)
}
}