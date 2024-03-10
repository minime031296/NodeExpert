import React from 'react';
import './three.css';
import image from '../assets/image.png';
import Btg from '../assets/Btg.png';

const Three = () => {
  return (
    <div id="three">
      <div className="vdo-img">
        <img src={image} alt="" className='image' />
      </div>
      <div className="Text-content">
        <div className="header">
          <h3>Crafting Your Dream Career: <br />Building a Path You Love with us</h3>
        </div>
        <div className="paragraphs">
          <p>At Learning Exp. We Are Committed To Providing You With A Superior <br />Learning Experience That Empowers You To Achieve Your Goals. Join Us <br />Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
          <br />
          <p>Our Platform Is Designed To Empower Learners Like <br /> You To Excel In Today’s Dynamic World.</p>
        </div>
        <div className="btg-image">
          <img src={Btg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Three;
