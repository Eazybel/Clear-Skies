type propsType={
    status:string
}
export default function SubmitButton(props:propsType){
    return(
        <>
         <button 
      type="submit" 
      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all text-sm shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {props.status}
    </button>
        </>
    )
}