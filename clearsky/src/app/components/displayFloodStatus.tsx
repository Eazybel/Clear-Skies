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
         
        <div>

            <ul>
              { 
            props.alerts&&
            props.alerts.map((alert,index)=>{

                return(

                    <li key={index}>{alert.day} <p>{alert.riskLevel}</p> <p>{alert.message}</p></li>
                )
            })
               }
            </ul>
        </div>
        </>
    )
}