"use client"
// import {useFormStatus} from "react-dom"
type propsType={

    state?:unknown,
    isPending:boolean
}
export default function SubmitButton(props:propsType){
    // const {data,pending}=useFormStatus()
    const handleClick=()=>{
        // const city=data?.get("city")
       console.log(props.state)
    }
    return(
        <>
         <button disabled={props.isPending} onClick={handleClick} type="submit" 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all text-sm shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {props.isPending?"Loading":"Submit"}
    </button>
        </>
    )
}