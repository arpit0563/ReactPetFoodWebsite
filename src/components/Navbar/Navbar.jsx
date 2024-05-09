import React, { useState } from 'react';
import './Navbar.css';
import logo2 from '../../image/logo2.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Model from '../Model/Model.jsx'; // Import the Modal component
// import Cart from '../Cart/Cart.jsx';
import { Button, Offcanvas } from 'react-bootstrap';

function Navbar() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container nav-cont justify-content: space-between"> {/* Center the contents */}
          <img src={logo2} alt="logo" className='logo brand-logo' />

          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4">Collapsed content</h5>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          
          <div className="navbar-collapse" id="navbarSupportedContent">
            <center>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Testimonial</a>
                </li>
              </ul>
            </center>
            
          {/* ............ Mobile Menu.................... */}
          {/* <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
          <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Testimonial</a>
                </li>
              </ul>
              <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" className="user-img" alt="user"></img>
            </a>
            
            <a data-bs-toggle="offcanvas" href='#offcanvasExample' role="button" aria-controls="offcanvasExample" >
              <img src="https://cdn-icons-png.flaticon.com/512/2203/2203239.png" className="cart-img" alt="cart" onClick={handleShowCart}></img>
            </a>
          </div> */}
          {/* ............. Mobile Menu ..........................*/}

          </div>
          <form className="d-flex p-2 nav-last">
            {/* <lebel for 'check' className = 'checkbtn' */}
          <button type="button" className="searchbar" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setShowModal(true)}>
          <i className="bi bi-search" ></i>
            </button>
            

            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" className="user-img" alt="user"></img>
            </a>
            
            <a data-bs-toggle="offcanvas" href='#offcanvasExample' role="button" aria-controls="offcanvasExample" >
              <img src="https://cdn-icons-png.flaticon.com/512/2203/2203239.png" className="cart-img" alt="cart" onClick={handleShowCart}></img>
            </a>

            <Offcanvas show={showCart} onHide={handleCloseCart} className="canvas" placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
              </Offcanvas.Header>
              {/* <Offcanvas.Body> */}
                {/* Your shopping cart content here */}
                <p>Items in your shopping cart...</p>
              {/* </Offcanvas.Body> */}
            </Offcanvas>
          </form>
        </div>
      </nav>

      {/* Modal Component */}
      <Model show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
}

export default Navbar;