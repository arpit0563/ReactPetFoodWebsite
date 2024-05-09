import React, { useState } from 'react'
import './Cart.css'
import { Button, Offcanvas } from 'react-bootstrap';

  
function Cart() {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <>
     



    </>
  )
}

export default Cart
