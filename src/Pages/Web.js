import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Web = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
const age=searchParams.get('age')
const city=searchParams.get('city')
  return (
    <>
    <div>Web</div>
    <div>age is: {age}</div>
    <div>city is: {city}</div>
<input type='text' onChange={(e)=>setSearchParams({text:e.target.value,age:10})} placeholder='set text in query params'/>

<button onClick={()=>setSearchParams({age:40})}>change the age</button>
    </>
  )
}

export default Web