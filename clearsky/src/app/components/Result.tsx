
import Image from "next/image"
type dataPropData={
    message?:string,
    day?:string,
    error?:string,
    temp?:string,
    desc?:string,
    icon?:string
}
type dataProp={
    data:dataPropData[]
}


export default function Result(props:dataProp){
    console.log(props.data[0])
 return(
    
    <>
  
      <ul>
    {props.data.map((datas,index)=>{
       if(datas.message){
        return <li key={index}>{datas.message}</li>
    }else if(datas.error){
           return <p key={index}>Error occured</p>

       }

    })}
   </ul>
    
    </>
 )

}