import React from 'react';
import './eight.css'
import man from '../assets/man.png'
import stars from '../assets/stars.png'

const Eight = () => {
  return (
    <div className='parent'>
        <div className='image-child'>
            <img src={man} alt="" />
        </div>

        <div className='content-child'>
            <div className="stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
            </div>

            <div className="middle-content">
                <span>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit <br />
                Voluptatem Accusantium Doloremque <br /> 
                Laudantium, <br /> 
                Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</span>
            </div>

            <div className="name">
                <span><b>Riad Isalm</b></span>
            </div>

            <div className="details">
                <h6 className='black-detail'>Product Manager.</h6> <h6 className='blue-detail'>@Learning.Com</h6>
            </div>
        </div>
    </div>
  )
}

export default Eight
