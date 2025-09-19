import React, { Suspense } from 'react'
import Countries from './components/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
// console.log(countriesPromise);

const App = () => {
  return (
    <>
      <Suspense  fallback={<p className='text-4xl font-bold text-center mt-10'>Loading........</p>}>
      
      <Countries countriesPromise={countriesPromise}></Countries>
      
    </Suspense>
     
    </>
  )
}

export default App