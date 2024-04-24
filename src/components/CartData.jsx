import React, { useContext } from 'react'
import { myContext } from '../App';
import './CartData.css';

const CartData = ({index, name, price, quantity}) => {

    const {cartDispatch} = useContext(myContext);
    
  return (
    <div style={{backgroundColor:'pink'}}>
      <p>name: {name} </p>
      <p> price: {price} </p>
      <p>  quantity: <button className='pointer' onClick={()=> {cartDispatch({type:'increase_q', payload: index})}}>+</button> {quantity} <button className='pointer'
      onClick={()=> {cartDispatch({type:'decrease_q', payload: index})}}>-</button> </p>
      <p>Total price: {price * quantity}</p>
    </div>
  )
}

export default CartData
