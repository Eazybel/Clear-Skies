export default function FormHandle(prevState:null,formData:FormData){
    const city=formData.get("city")
    return (
        {"city":city}
    )
}