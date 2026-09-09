export default function FormHandle(prevState:unknown,formData:FormData){
    const city=formData.get("city")
    return (
        {"city":city}
    )
}