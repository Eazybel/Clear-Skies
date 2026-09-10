type dataProp={
    data?:object
}
export default function Result(props:dataProp){
    console.log(props)
    return (
        <>
        <div>Result</div>
        </>
    )
}