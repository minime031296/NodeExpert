import React from 'react';
import './contact.css'

const ContactUs = () => {
  return (
    <div id="contact-us"> 
      <div className='con-content'>
        <h3>Contact Us!</h3>
        <span>There are many variations of passages of Lorem Ipsum
          <br /> but the majority have suffered alteration.</span>
      </div>


      <input type="email" placeholder="Email here"className='con-input' /><button className='con-btn'>Send</button>
    </div>
  )
}

export default ContactUs
