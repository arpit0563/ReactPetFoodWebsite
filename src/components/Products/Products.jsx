import React from 'react'
import './Products.css'
import BlueBuffalo from '../../image/BlueBuffalo.jpg'
import Dog from '../../image/Dog.jpg'
import FELINE from '../../image/FELINE.png';
import Ultra from '../../image/Ultra.png';
import Health from '../../image/Health.png';
import Purina from '../../image/Purina.jpg';

function Products() {
  return (
    <>
      <div className='products-container'>
      <div className="container">
        <div className="row p-row text-center align-items-center justify-content-center">
          <h1>Best Selling Products</h1>
          <span>Lorem ipsum dolor sit amet.</span>
          <div className="row">
            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={BlueBuffalo} className="product-img" alt="" />
                <h4>BLUE: Life Protection Formula</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={Dog} className="product-img" alt="" />
                <h4>Wag: Wholesome Grains</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={FELINE} className="product-img" alt="" />
                <h4>Greenies</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={Ultra} className="product-img" alt="" />
                <h4>Ultra</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={Health} className="product-img" alt="" />
                <h4>Air Dried</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            <div className="col-md-4">
              <div className='product-col text-center d-flex justify-content-center align-items-center'>
                <img src={Purina} className="product-img" alt="" />
                <h4>Tender Select Blend</h4>
                <span>Rs.799</span> 
                <button className='product-btn d-flex justify-content-center align-items-center'>Add to cart</button>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
