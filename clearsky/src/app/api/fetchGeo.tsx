export default async function  FetchGeo(){
     const response=await fetch("https://geocode.maps.co/search?q=wolayta&api_key=6a9e864fde97d568213086chl07ce55")
    const data=await response.json()

  return (
        <>
       <input type="text" name="city" id="city" placeholder="enter the city here"></input>
        </>
    )

}