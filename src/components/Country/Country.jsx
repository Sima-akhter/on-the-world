import { useState } from "react"


const Country = ({country, handleVisitedCountries, handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false)

    const heandleVisited = ()=>{
        //system--------------1
        // console.log('btn click');
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // system-------------2
        // setVisited(visited ? false : true);

        //system-------------3
        setVisited(!visited);
        handleVisitedCountries(country)

    }
    
    // console.log(country.area.area);
  return (
    <div>
       <div className={`border-2 rounded-2xl space-y-2 p-5 ${visited && 'bg-gray-200'}`}>
         <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
        <h3 className="font-bold">Name: {country.name.common}</h3>
        <p>population: {country.population.population}</p>
        <p>Area: {country.area.area} 
        {country.area.area > 300000 ? ' Big country' : ' Small country'}
        </p>
       <div className="flex gap-5">
         <button onClick={heandleVisited} className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500">
            {visited ? 'visited': 'Not visited'}
        </button>
        <button onClick={()=> {handleVisitedFlag (country?.flags?.flags?.png)} }className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500">Add Visited Flag</button>
       </div>
       </div>
    </div>
  )
}

export default Country