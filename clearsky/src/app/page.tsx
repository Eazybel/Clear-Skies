"use client"
import { useActionState, useMemo, useRef } from "react"
import FormHandler from "@/app/api/FormData"
import Result from "@/app/components/Result"
export default function Main(){
  const [state,formAction,isPending]=useActionState(FormHandler,undefined)
  type DailyData = { day: string; discharge?: number; average?: number; ratio?: number; level: string; message: string }
  const formRef = useRef<HTMLFormElement>(null)
  const dailyDataMemo = useMemo<DailyData[]>(() => {
    if (!state?.dataFlood?.daily) return []
    const daily = state.dataFlood.daily
    return (daily.time ?? []).slice(0, 30).map((day: string, index: number) => {
      const discharge = Number(daily.river_discharge?.[index])
      const average = Number(daily.river_discharge_mean?.[index])
      const ratio = average > 0 ? discharge / average : 0
      if (ratio >= 4) return { day, discharge, average, ratio, level: "Critical", message: "Severe overflow is possible or ongoing." }
      if (ratio >= 2.5) return { day, discharge, average, ratio, level: "High", message: "Significantly increased flow; localized flooding is possible." }
      if (ratio >= 1.5) return { day, discharge, average, ratio, level: "Elevated", message: "Higher-than-usual water volume; continue monitoring." }
      return { day, discharge, average, ratio, level: "Normal", message: "River flow is close to its historical average." }
    })
  }, [state])
  const weather = state?.dataCity ? { city: state.dataCity.name, country: state.dataCity.sys?.country, temp: Math.round(state.dataCity.main.temp), feels: Math.round(state.dataCity.main.feels_like), description: state.dataCity.weather?.[0]?.description ?? "Unknown", icon: state.dataCity.weather?.[0]?.icon } : undefined
  return(
    <>
    {/* Search Form Card */}
        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/80 p-6 rounded-2xl shadow-xl">
          <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-3">
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
      {isPending?"Loading…":"Check conditions"}
    </button>
          </form>
        </div>
 {state?.error && <div className="alert error" role="alert">{state.error}</div>}
 {weather && <section className="weather-card" aria-label="Today's weather"><div><p className="eyebrow">Today’s weather</p><h2>{weather.city}, {weather.country}</h2><p className="weather-description">{weather.description}</p></div><div className="weather-reading">{weather.icon && <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />}<strong>{weather.temp}°C</strong><span>Feels like {weather.feels}°C</span></div></section>}
 {dailyDataMemo.length > 0 && <Result data={dailyDataMemo}/>} 
    </>
  )

}