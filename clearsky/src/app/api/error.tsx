"use client"
export default function ErrorHandler({error,reset}:{error:Error,reset:()=>void}){
return(
    <>
    <p>theres a problem fetching the data {error.message}</p>
    <button onClick={reset}></button>
    </>
)
}