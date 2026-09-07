"use client"
import fetchWeather from "@/app/api/fetchWeather"
import SubmitBtn from "@/app/components/submitbtn"
import FloodStatus from "@/app/components/displayFloodStatus"
import {useActionState} from "react"

export default function Button(){
  const [state,formAction,pending]=useActionState(fetchWeather,[])
    return(
      
      <>
        <form action={formAction} >
            <input type="text" name="city" id="city" />
            
          <SubmitBtn />
        </form>
         {!pending&& <FloodStatus alerts={state}  />}
         
     
            
          
      </>
    )
    
}