import React from 'react'
import { useUser } from './UserContext'

function Child3() {
    const user =useUser()
    console.log(user)
  return (
    <div>
        Child3
        <h1>UserName:{user.username}</h1>
        <h1>Age:{user.age}</h1>
        <h1>Address:{user.address}</h1>
    </div>
  )
}

export default Child3