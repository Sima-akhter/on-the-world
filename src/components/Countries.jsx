import { use, useState } from "react"
import Country from "./Country/Country";



const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries =(country)=>{
     console.log('handleVisitedCountries', country);
     const newVisitedCountries = [...visitedCountries, country];
     setVisitedCountries(newVisitedCountries)
     
    }

    const handleVisitedFlag = (flag) =>{
        // console.log('add click', flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)

    }


    const countriesData = use(countriesPromise);
    
    const countries = countriesData.countries;

    // console.log(countries);
  return (
    <div>
      
        <div className="container mx-auto">
        <h1 className="mt-10 p-5">Countries: {countries.length}</h1>
        <h3>Total Country Visited: {visitedCountries.length}</h3>
        <h3>Total Flags Visited: {visitedFlags.length}</h3>
        <ol>
            {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }
        </ol>
         
         <div className="w-[150px] flex gap-5 p-5">
            {
                visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
            }
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {
          countries.map(country => <Country
            key = {country.cca3.cca3}
            country = {country}
            handleVisitedCountries = {handleVisitedCountries}
            handleVisitedFlag  = {handleVisitedFlag}
            ></Country>)
        }
       </div>
        </div>


    </div>
  )
}

export default Countries