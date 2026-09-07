"use client"
interface DailyDataInterface{
    message:string,
    riskLevel:string,
    day:string
}
interface alertData{
    alerts:DailyDataInterface[]
}
export default function FloodStatus(props:alertData){

    return(
        <>
        <div>Not Loading</div>
        {console.log(props)}
        </>
    )
}