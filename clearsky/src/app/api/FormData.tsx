"use server"

type WeatherData = {
    name: string
    coord: { lat: number; lon: number }
    sys?: { country?: string }
    main: { temp: number; feels_like: number }
    weather?: Array<{ description?: string; icon?: string }>
}
type FloodData = {
    daily?: { time?: string[]; river_discharge?: number[]; river_discharge_mean?: number[] }
}
type FormState = { error?: string; dataCity?: WeatherData; dataFlood?: FloodData } | undefined

export default async function FormHandle(_prevState: FormState, formData: FormData) {
    const city = String(formData.get("city") ?? "").trim()
    if (!city) return { error: "Please enter a city name." }

    try {
        const apiKey = process.env.OPENWEATHER_API_KEY ?? "50d7544ae9e5e20beba141fc0c75f586"
        const resCity = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`,
            { cache: "no-store" },
        )
        const dataCity = await resCity.json()
        if (!resCity.ok) return { error: dataCity.message ?? "City could not be found." }

        const { lat, lon } = dataCity.coord
        const resFlood = await fetch(
            `https://flood-api.open-meteo.com/v1/flood?latitude=${lat}&longitude=${lon}&daily=river_discharge,river_discharge_mean&forecast_days=30`,
            { cache: "no-store" },
        )
        const dataFlood = await resFlood.json()
        if (!resFlood.ok || !dataFlood.daily) return { error: "Flood data is temporarily unavailable for this location." }
        return { dataFlood, dataCity }
    } catch {
        return { error: "Unable to load live data. Please try again." }
    }
}