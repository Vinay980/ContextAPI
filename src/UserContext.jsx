
import { createContext,useContext } from 'react';

// creating
const userContext=createContext()

// providing component(wrapper component)
export const UsercontextWraper=(props)=>{
    const user={
        username:"Rohit",
        age:35,address:"Mumbai"
    }
    return(
        <userContext.Provider value={user}>
            {props.children}
        </userContext.Provider>
    )
}

// consuming the context (custom hook)
export const useUser=()=>{
    return useContext(userContext)
}