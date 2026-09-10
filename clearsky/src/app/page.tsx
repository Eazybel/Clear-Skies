"use client"
import {useActionState,useEffect,useState} from "react"
import FormHandler from "@/app/api/FormData"
export default function Main(){
  const [state,formAction,isPending]=useActionState(FormHandler,undefined)
  type dailyDataType={
    message:string,
    day:string
  }
    const dailyData:dailyDataType[]=[]
for (let i = 0; i < 30; i++) {
  const currentDischarge = state?.dataFlood?.daily.river_discharge[0];
  const meanDischarge = state?.dataFlood?.daily.river_discharge_mean[0];

  if (!meanDischarge || meanDischarge === 0) dailyData.push({message:"Normal",day:state?.dataFlood?.daily.time[i]});;

  const ratio = currentDischarge / meanDischarge;

  if (ratio >= 4.0) dailyData.push({message:"CriticaL",day:state?.dataFlood?.daily.time[i]});
  if (ratio >= 2.5) dailyData.push({message:"High",day:state?.dataFlood?.daily.time[i]});;
  if (ratio >= 1.5) dailyData.push({message:"Elivated",day:state?.dataFlood?.daily.time[i]});;
  dailyData.push({message:"Normal",day:state?.dataFlood?.daily.time[i]});;

}
console.log(state?.error)
  return(
    <>
    {/* Search Form Card */}
        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/80 p-6 rounded-2xl shadow-xl">
          <form action={formAction} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                🔍
              </span>
              <input 
                type="text" 
                name="city" 
                id="city" 
                placeholder="Enter city name (e.g., London, Tokyo)..." 
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              />
            </div>
            
         <button disabled={isPending} type="submit" 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all text-sm shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isPending?"Loading":"Submit"}
    </button>
          </form>
        </div>

          <ul>
           { dailyData?.map((data,index)=>{
                return (<><li key={index}>{data.message}</li> <p key={data.day}>{data.day}</p></>)
            })
            
            }
          </ul>
    </>
  )

}