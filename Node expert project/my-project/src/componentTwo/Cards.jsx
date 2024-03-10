import React from 'react';
import Dashboard from '../assets/Dashboard.png';
import layout from '../assets/layout.png';
import smartphone from '../assets/smartphone.png'
import './Cards.css';

const Cards = () => {
  return (
    <div className='Cards'>
      <div className="img-one-card">
        <img src={smartphone} alt="" />
        <span><b>Learn Anything</b></span>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable  </p>
      </div>
      <div className="img-two-card">
        <img src={Dashboard} alt="" />
        <span><b>Flexible Learning</b></span>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
      </div>
      <div className="img-three-card">
        <img src={layout} alt="" />
        <span><b>Expert Connect</b></span>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable  </p>
      </div>
    </div>
  );
};

export default Cards;

