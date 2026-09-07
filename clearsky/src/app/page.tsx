"use client"
import {useState} from "react"
import fetchWeather from "@/app/components/fetchWeather"
import React from 'react'

export default function Button(){
    const [isLoading,setLoad]=useState(false)
const fetchLoad=async()=>{
setLoad(true)
try{
   console.log(await fetchWeather())
}catch(error:unknown){
    console.log(error)
}finally{
    setLoad(false)
}
}
    return(
      <>
      <select name="country" id="countryDropdown">
        <option value="none" disabled>Select your Region</option>
      </select>
        <button disabled={isLoading} onClick={fetchLoad}>{isLoading?"loading":"See Forcast"}</button>
      </>
    )
}