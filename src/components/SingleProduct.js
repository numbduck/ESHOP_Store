import React, { useContext } from 'react';
import "../components/styles.css";
import { ecommContext } from './Context';

export const SingleProduct = ({props}) => {
  const {cartItem}=React.useContext(ecommContext)
  const [cart,setCart]=cartItem
  return (
    
    <div className='productContainer'>
    
    <img className='productImage' alt="product" src={props.image} style={{width:"100%"}}/>
    <h2>{props.name}</h2>
    <span className='price'>${props.price}</span>
    {cart.includes(props)?(<button className='button button2' onClick={()=>setCart(cart.filter((prod)=>prod.id!==props.id))}>Remove from Cart</button>):
    (<button className='button button2' onClick={()=>setCart([...cart,props])}>Add to Cart</button>)}    
    </div>
  )

}
