import React, { useContext, useEffect, useState } from 'react'
import { ecommContext } from './Context';
import { SingleProduct } from './SingleProduct';

export const Cart = () => {
  const [total,setTotal]=useState(0)
  const {cartItem}=React.useContext(ecommContext)
  const [cart,setCart]=cartItem
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <><div class="cartHeader">
    <h3 class="Heading">Shopping Cart <span class="cartItems">({cart.length} items)</span></h3>
    
    <h5 class="Action">Total:${total}</h5>
    </div>
    <div className='productsContainer'>
      {cart.map((prod)=><SingleProduct props={prod}/>)}
    </div></>
  )
}
