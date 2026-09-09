"use client"
import SubmitButton from "@/app/components/SubmitButton"
import {useActionState,useState} from "react"
import FormHandler from "@/app/api/FormData"
export default function Main(){
  const [data,formAction,isPending]=useActionState(FormHandler,null)
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
            
           {isPending?<SubmitButton status="Loading"/>:<SubmitButton status="Submit"/>}
          </form>
        </div>
    </>
  )
}