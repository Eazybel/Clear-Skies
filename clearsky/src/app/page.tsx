"use client"

import fetchWeather from "@/app/api/fetchWeather"
import SubmitBtn from "@/app/components/submitbtn"
import FloodStatus from "@/app/components/displayFloodStatus"
import { useActionState } from "react"

export default function Button() {
  const [state, formAction, pending] = useActionState(fetchWeather, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-start p-6 sm:p-12">
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Clear Sky Flood & Weather Monitor</h1>
          <p className="text-sm text-slate-400">Search any city to check live environmental risks and forecasts.</p>
        </div>

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
            <SubmitBtn />
          </form>
        </div>

        {/* Loading Indicator State */}
        {pending && (
          <div className="flex items-center justify-center p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
            <div className="flex items-center space-x-3 text-blue-400">
              <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-medium">Analyzing meteorological and flood data...</span>
            </div>
          </div>
        )}

        {/* Results Component */}
        {!pending && <FloodStatus alerts={state} />}
        
      </div>
    </div>
  )
}