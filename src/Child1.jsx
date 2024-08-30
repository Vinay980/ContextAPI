import React,{useContext} from 'react'
import Child2 from './Child2'
import CountContext from './CountContext'
import { useUser } from './UserContext'

function Child1() {
    const count=useUser()
    console.log(count)
  return (
    <div>
        <h1>Child1</h1>
        <Child2/>
    </div>
  )
}

export default Child1