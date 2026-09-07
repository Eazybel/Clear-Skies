"use client"
import fetchWeather from "@/app/api/fetchWeather"
import SubmitBtn from "@/app/components/submitbtn"


export default function Button(){
    return(
      <>
        <form action={fetchWeather} >
            <input type="text" name="city" id="city" />
          <SubmitBtn/>
        </form>
      </>
    )
}