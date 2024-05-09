import React from 'react';
import './Contact.css';
import Sdog from '../../image/Sdog.png';

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
        <h2 className='text-center'>Contact <span>Us</span> Form</h2>
          <div className='col md-4'>
            <img src={Sdog} alt="A dog" className='sdog '/>
          </div>
          <div className='col md-6'>
            <form action="#">
              <div className="mb-5 row">
                <div className="col">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" required maxLength="50" className="form-control" id="first_name" name="first_name" />
                </div>
                <div className="col">
                  <label htmlFor="last_name">Last Name</label>
                  <input type="text" required maxLength="50" className="form-control" id="last_name" name="last_name" />
                </div>
              </div>
              <div className="mb-5 row">
                <div className="col">
                  <label htmlFor="email_addr">Email address</label>
                  <input type="email" required maxLength="50" className="form-control" id="email_addr" name="email" placeholder="name@example.com" />
                </div>
                <div className="col">
                  <label htmlFor="phone_input">Phone</label>
                  <input type="tel" required maxLength="50" className="form-control" id="phone_input" name="Phone" placeholder="Phone" />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" id ="btn-contact" className="btn btn-primary w-100 ">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
