import React, { useState } from 'react';
import './Navbar.css';
import logo2 from '../../image/logo2.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Model from '../Model/Model.jsx';
import { Button, Offcanvas } from 'react-bootstrap';

function Navbar2() {
    const [showModal, setShowModal] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container justify-content-between">
                    <img src={logo2} alt="logo" className='logo brand-logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-lg-0"> 
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
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
                    </div>
                    
                    <div className='menuandicons'>
                        <div className='mobile-menu'>
                            <form className="d-flex p-2 nav-last">
                                <button type="button" className="searchbar" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setShowModal(true)}>
                                    <i className="bi bi-search"></i>
                                </button>

                                <a href="#">
                                    <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" className="user-img" alt="user"></img>
                                </a>

                                <a data-bs-toggle="offcanvas" href='#offcanvasExample' role="button" aria-controls="offcanvasExample">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2203/2203239.png" className="cart-img" alt="cart" onClick={handleShowCart}></img>
                                </a>

                                <Offcanvas show={showCart} onHide={handleCloseCart} className="canvas" placement='end'>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className="row text-align-center">
                                            <div className="col md-6 col-12">
                                                <h3>Subtotal: <span>Rs.799</span></h3>
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <Model show={showModal} onHide={() => setShowModal(false)} />
        </>
    )
}

export default Navbar2;
