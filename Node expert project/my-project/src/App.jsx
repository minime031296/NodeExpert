import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Main from './component/Main';
import TextContent from './componentTwo/TextContent';
import SmallText from './componentTwo/SmallText';
import Cards from './componentTwo/Cards';
import One from './componentThree/One';
import Two from './componentThree/Two';
import Three from './componentThree/Three';
import Four from './componentFour/Four';
import Five from './componentFour/Five';
import Six from './componentFour/Six';
import Eight from './componentsFive/Eight';
import Seven from './componentsFive/Seven';
import MainFooter from './componentSix/MainFooter';




function App() {
 

  return (
    <div className="boxy">
      <div className='main'>
      <Navbar/>
      <Main/>
    </div>
    <div className="main-one">
      <TextContent/>
      <SmallText/>
      <Cards/>
    </div>
    <div className='main-two'>
      <One/>
      <Two/>
      <Three/>
    </div>

    <div className="main-three">
      <Four/>
      <Five/>
      <Six/>
    </div>

    <div className="main-four">
      <Seven/>
      <Eight/>
    </div>

    <div className="footer">
      <MainFooter/>
    </div>
    </div>
    
  )
}

export default App
