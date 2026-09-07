"use client"
import {useEffect,useState} from "react"
import React from 'react'

export default function Button(){
    const [isLoading,setLoad]=useState(false)
const fetchLoad=async()=>{
setLoad(true)
try{
const response=await fetch("https://flood-api.open-meteo.com/v1/flood?latitude=59.91&longitude=10.75&daily=river_discharge")
const data=await response.json()
console.log(data)
}catch(error:unknown){
    console.log(error)
}finally{
    setLoad(false)
}
}
    return(
        <button disabled={isLoading} onClick={fetchLoad}>{isLoading?"loading":"See Forcast"}</button>
    )
}