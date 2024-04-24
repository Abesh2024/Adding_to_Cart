import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { myContext } from '../App'; // Corrected import path

const Cart = () => {
  const { cartData } = useContext(myContext);

  return (
    <div>
      <Navbar />
      <h2>Payment Screen</h2>
      <p>Total amount to be paid: {cartData.reduce((acc, cartProd) => acc + (cartProd.quantity * cartProd.price), 0)} </p>
    </div>
  );
}

export default Cart;
