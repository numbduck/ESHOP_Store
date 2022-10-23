import React, { useEffect, useRef } from 'react'
import { ecommContext } from './Context'

export const Search = () => {
    const inputRef=useRef();
    useEffect(()=>{inputRef.current.focus();},[]);
    const {search}=React.useContext(ecommContext)
    const [query,setQuery]=search
    return (
    <div><form className="searchContainer" style={{margin:"auto", maxWidth:"300px"}}>
    <input ref={inputRef} onChange={e=>setQuery(e.target.value)} type="text" placeholder="Search.." className='searchInput'  />
    {/* <button type="submit" className='searchButton' ><i className="fa fa-search"></i></button> */}
  </form></div>
  )
}
