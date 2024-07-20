import React from 'react'
import '../styles/heropage.css'

import Heroimg from '../assets/OBJECTS.png'
const HeroPage = () => {
  return (
    <div className='heropage' id='home'>
        <div className='hero-img-container'> 
         <img src={Heroimg} alt="heroimage" className='hero-img' />
        </div>
        <div className='hero-text'>
            <h1>Your New <span style={{backgroundColor:"#EF9748"}}>Home</span></h1>
            <h1> And <span style={{backgroundColor:'#FFD600'}}>Community</span></h1>
            <h1> Await With</h1>
            <h1 className='tribzy-text'> Tribzy</h1>

        </div>
    </div>
  )
}

export default HeroPage