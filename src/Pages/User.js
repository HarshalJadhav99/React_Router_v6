import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams()
    const{name,sname}=params
  return (
    <div>User {name}{sname}</div>
  )
}

export default User