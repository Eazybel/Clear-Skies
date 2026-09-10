type dataProp={
    data?:object|string
}
export default function Result(props:dataProp){
if(typeof(props.data)=="string"){

    return (
        <>
      <p>Error occured type the city/country name correctly</p>
        </>
    )
}else{
    return(
        <></>
    )
}
}