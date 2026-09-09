"use server"


export default async function FormHandle(prevState:unknown,formData:FormData){
    const city:FormDataEntryValue | null =formData.get("city")as string

 const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50d7544ae9e5e20beba141fc0c75f586`)
 const data=await res.json()
 return {data}

}