import React from 'react';
import './footer.css';
import fb from '../assets/fb.png';
import tw from '../assets/tw.png';
import pin from '../assets/pin.png';
import link from '../assets/link.png';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-box'>
      
      
      
      
      <div className='grid-boxes'>
              <div className='grid-box-one'>
                <div className='logo-top'> 
                  <img src={logo} alt=""  className='logos-img'/><span className="learning-exp">Learning Exp.</span>
                </div>
                
                <div className='small-logos'>
                <img src={fb} alt="" className='fb'/>
                <img src={tw} alt="" className='tw'/>
                <img src={link} alt="" className='in'/>
                <img src={pin} alt="" className='pin'/>
                </div>
               
              </div>
              <div className='grid-box-one'>
                <div className='header'>
                  <h5>Links</h5>
                  <ul className='list'>
                    <li>Home</li>
                    <li>Price</li>
                    <li>Download</li>
                    <li>About</li>
                    <li>Service</li>
                  </ul>
                </div>
              </div>
              <div className='grid-box-one'>
                <div className='header'>
                  <h5>Support</h5>
                  <ul className='list'>
                    <li>FAQ</li>
                    <li>How it</li>
                    <li>Features</li>
                    <li>Contact</li>
                    <li>Reporting</li>
                  </ul>
                </div>
              </div>
              <div className='grid-box-one'>
                <div className='header'>
                  <h5 >Contact Us</h5>
                  <ul className='list'>
                    <li>+880 12345678</li>
                    <li>youremail@gmail.com</li>
                    <li>Pune City</li>
                  </ul>
                </div>
              </div>
        </div>

      <div className='small-texts'>
        <span className='copyrights'></span>
        <span className='terms'></span>
      </div>
    </div>
  )
}

export default Footer
