type dataPropData={
    message?:string,
    day?:string,
    error?:string
}
type dataProp={
    data:dataPropData[]
}


export default function Result(props:dataProp){
    props.data.map(datas=>{
       {return datas.message?<p>{datas.message}</p>:<p>{datas.error}</p>}
    })
return(
<>
</>
)
}