import React, { useContext } from 'react';
import "../components/styles.css";
import {Link} from "react-router-dom";
import { ecommContext } from './Context';
import { Search } from './Search';

export const Header = () => {
  const {cartItem}=React.useContext(ecommContext)
  const [cart,setCart]=cartItem
  return (
    <><div className='announcement'>Welcome to the Website</div>

    
      
      <div className="wrapper">
        <div className="left">
          <Search/>
        </div>
        <div className="center">
          <div className="logo"><Link className='link-item1' to="/">E-SHOP.</Link></div>
        </div>
        <div className="right">
        <div>
            <Link className='link-item2' to="/cart"><i className="fa badge fa-lg" value={cart.length} style={{fontSize:"2.5rem"}}>&#xf07a;</i></Link>
        </div>
        </div>
      </div>
    </>
  )
}
