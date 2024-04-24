import React from 'react'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { myContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {

    const {cartData} = useContext(myContext)
    const totalQ = cartData.reduce((acc, cartProd) => (acc + cartProd.quantity), 0)
  return (
    <div>
      <div style={{
        display:'flex', 
        justifyContent:'space-around', 
        alignItems:'center', 
        backgroundColor: 'darkseagreen',
        color: 'white'
        }}>
       <Link to='/'> <h2>Navbar</h2></Link>
        <Link to='/cart'><span ><IoMdCart/>{totalQ}</span></Link>
      </div>
    </div>
  )
}

export default Navbar
