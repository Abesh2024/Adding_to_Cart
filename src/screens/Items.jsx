import React from 'react'
import Navbar from '../components/Navbar'
import CartData from '../components/CartData'
import { myContext } from '../App'
import { useContext } from 'react'

const Items = () => {

  const {cartData} = useContext(myContext)

  return (
    
    <div>
      <Navbar />
      <h1>Items will be added soon</h1>
      {cartData.map((item, index) => <CartData 
      index={index} name={item.name} price={item.price} quantity={item.quantity} />)}
    </div>
  )
}

export default Items
