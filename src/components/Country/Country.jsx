

const Country = ({country}) => {
    const heandleVisited = ()=>{
        console.log('btn click');
        
    }
    
    // console.log(country.area.area);
  return (
    <div>
       <div className="border-2 rounded-2xl space-y-2 p-5">
         <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
        <h3 className="font-bold">Name: {country.name.common}</h3>
        <p>population: {country.population.population}</p>
        <p>Area: {country.area.area} 
        {country.area.area > 300000 ? ' Big country' : ' Small country'}
        </p>
        <button onClick={heandleVisited} className="bg-blue-700 text-white py-2 px-4 rounded-md">Not Visited</button>
       </div>
    </div>
  )
}

export default Country