"use client"
export default function ClickHandler(){
    
const floodFetch=async ()=>{
const response=await fetch("https://flood-api.open-meteo.com/v1/flood?latitude=59.91&longitude=10.75&daily=river_discharge")
const data=await response.json()
console.log(data)
}
    return (

        <button onClick={floodFetch}>See Forcast</button>
    )
}