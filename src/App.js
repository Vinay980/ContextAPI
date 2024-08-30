import Child1 from "./Child1"
import React from "react";
import {UsercontextWraper} from './UserContext'

function App() {
  return (
    <div>
      <UsercontextWraper>
        <Child1/>
      </UsercontextWraper>
    </div>
  )
}

export default App