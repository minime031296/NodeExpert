import React from 'react'
import './six.css'
import clipboard from '../assets/clipboard.png';
import people from '../assets/people.png'

const Six = () => {
  return (
    <div className='six'>
      <div className="card-one">
            <div className="img-card-one">
            <img src={clipboard} alt=""  className="clipboard" id="one"/>
            </div>
            <div className="content-card-one">
               <span><b>100+</b> <br />Batch complete</span>
            </div>
      </div>
      <div className="card-two">
      <div className="img-card-two">
            <img src={clipboard} alt=""  className="clipboard"/>
            </div>
            <div className="content-card-two">
               <span><b>50+</b> <br />Active Batches</span>
            </div>
      </div>
      <div className="card-three">
      <div className="img-card-three">
            <img src={people} alt=""  className="people"/>
            </div>
            <div className="content-card-three">
               <span><b>10,000+</b> <br />Student Satisfied</span>
            </div>
      </div>
      <div className="card-four">
      <div className="img-card-four">
            <img src={people} alt=""  className="people"/>
            </div>
            <div className="content-card-four">
               <span><b>10+</b> <br />Course Modules</span>
            </div>
      </div>
    </div>
  )
}

export default Six
