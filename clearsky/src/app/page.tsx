"use client"
import {useState} from "react"
import fetchWeather from "@/app/api/fetchWeather"
import FetchGeo from "@/app/api/fetchGeo"
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
      {/* <input type="text" name="city" id="city" /> */}
        <button disabled={isLoading} onClick={fetchLoad}>{isLoading?"loading":"See Forcast"}</button>
      </>
    )
}