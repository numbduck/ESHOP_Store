import React, { createContext, useState } from 'react'

export const ecommContext = createContext();

export const Context = ({children}) => {
    const[cart, setCart]=useState([]);
    const[query,setQuery]=useState("");
    return (
    <ecommContext.Provider value={{cartItem:[cart,setCart], search:[query, setQuery]}}>{children}</ecommContext.Provider>
  )
}
