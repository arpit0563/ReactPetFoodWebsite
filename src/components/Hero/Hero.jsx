import React from 'react'
import './Hero.css'
import herodog from '../../image/herodog.png';
import layerbg from '../../image/layerbg.png'

function Hero() {
  return (
  <>
    <div className='hero'>
      <div className='container-fluid hero-bg'>
        <div className='row'>
            <div className='hero-left col md-6'>
                <span >We Care For Your Pet</span><br/>
                <span>Best Pet Products And Toys</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia ut? Sint eligendi, ducimus nisi laudantium exercitationem repudiandae praesentium incidunt assumenda, placeat doloremque, ipsam odit possimus. Quasi sunt rerum labore!</p>
                <button className='btn btn-info'>Shop now</button>
            </div>
            <div className='hero-right col md-6 '>
                <img src={herodog} alt="herodog"  className='img1'/>
            </div>
        </div>
       
      </div>
      <div className="wave">
          {/* <img src={layerbg} alt="layer" className='img2'/> */}
        </div>
    </div>
  </>
  )
}

export default Hero
