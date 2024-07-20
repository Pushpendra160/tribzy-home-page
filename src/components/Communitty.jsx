import React from 'react'
import '../styles/community.css'
import Blvd from '../assets/blvd.png'
import Stone from '../assets/stone.png'
const Communitty = () => {
  return (
    <div className='community' id='community'>
       
        <div className='community-heading'>
            <h1>Communities</h1>
        </div>
        
        <div className='community-card-content'>
        <div className='view-button'>
            <p >View All</p>
            <p>{'>'}</p>
        </div>
            <div className='community-card'>
                <div className='community-card-img'>
                <img src={Blvd} alt="blvd" />
                </div>
               <div className='card-info'>
               <h2>BLVD Gainesville</h2>
                <p style={{color:'#6F7276'}}>4000 SW 37th Blvd, Gainesville, FL 32608</p>
                <p className='card-learn-more'>Learn More</p>
               </div>
                
            </div>
            <div className='community-card'>
            <div className='community-card-img'>
                <img src={Stone} alt="blvd" />
                </div>
                <div className='card-info'>
                <h2>Stoneridge</h2>
                <p style={{color:'#6F7276'}}>4000 SW 37th Blvd, Gainesville, FL 32608</p>
                <p className='card-learn-more'>Learn More</p>
                </div>
                
            </div>
        </div   >
        <div className='view-btn-container'>
        <div className='view-btn'>
            <p>View More Communities</p>
        </div>
        </div>
       
        </div>
  )
}

export default Communitty