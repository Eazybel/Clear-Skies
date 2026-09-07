import ClickHandler from "@/app/components/button"
export default async function Home() {
 
  return (
    <>
    <p>hello world</p>
    <select name="countryName" id="countryName">
      <option value="" disabled>Select your region</option>

    </select>
    <ClickHandler/>
    </>
  );
}
