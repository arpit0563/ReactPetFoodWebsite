import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className='f-left col-md-4'>
            <h3>About Us</h3>
            <p>Passionate about pets, we craft nutritious, delicious pet food using quality ingredients, ensuring pets thrive with every meal.</p>
            <div className="social">
              <SocialIcon url="#" network="whatsapp" style={{ height: 40, width: 40 }} />
              <SocialIcon url="#" network="twitter" style={{ height: 40, width: 40 }}/>
              <SocialIcon url="#" network="telegram" style={{ height: 40, width: 40 }}/>
            </div>
          </div>
          <div className='col-md-4'>
            <h3>Information</h3>
            <ul className='f-list d-flex flex-column'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Testimonial</a></li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3>Our Policy</h3>
            <div>
            <ul className='f-list d-flex flex-column'>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Copyright Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
