import React from 'react'
import Logo from '../assets/logo-img.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Linkdin from '../assets/linkdin.png'
import Facebook from '../assets/facebook.png'
import '../styles/footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='horizontal-footer'>
        <div className='footer-icons'>
             <img src={Logo} alt="logo" />
             <p>Your New Home And Community Await With Tribsy</p>
             <div className='icons-social'>
              <img src={Twitter} alt="twitter" className='icons-social-png'  />
              <img src={Facebook} alt="Facebook"   className='icons-social-png'/>
              <img src={Instagram} alt="Instagram"  className='icons-social-png' />
              <img src={Linkdin} alt="Linkdin" className='icons-social-png'  />
             </div>
        </div>
        <div className='footer-links'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#how">How it works </a>
          <a href="#career">Career </a>
        </div>
        <div className='footer-links faqs'>
          <a href="#contact">Contact Us</a>
          <a href="#faqs">FAQs</a>
          <a href="#blogs">Blogs</a>
    
        </div>
      </div>
      <div className='vertical-footer'>
        <div className='footer-community'>
        <a href="">Community Standards</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms</a>
        <a href="">Cookie Policy</a>
        </div>

        <div className='copyright'>
          <p>© 2024 Tribsy. All rights reserved.</p>
        </div>
       
      </div>
    </div>
{/* mobile footer */}

    <div className='mobile-footer'>
      <div className='horizontal-mobile-footer'>
      <div className='quick-link'>
        <h2>Quick Links</h2>
        <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#how">How it works </a>
          <a href="#career">Career </a>
          <a href="#contact">Contact Us</a>
          <a href="#faqs">FAQs</a>
          <a href="#blogs">Blogs</a>
      </div>
      <div className='follow-us'>
        <h2>Follow Us</h2>
     
            <div className='follow-us-link'>
            <img src={Twitter} alt="twitter" className='icons-social-png'  />
            <p>Twitter</p>
            </div>
               <div className='follow-us-link'>
              <img src={Facebook} alt="Facebook"   className='icons-social-png'/>
              <p>Facebook</p>
               </div>
               <div className='follow-us-link'>
              <img src={Instagram} alt="Instagram"  className='icons-social-png' />
              <p>Instagram</p>

               </div >
               <div className='follow-us-link'>
              <img src={Linkdin} alt="Linkdin" className='icons-social-png'  />
              <p>Linkdin</p>

               </div>
             </div>
      </div>
      <div className='vertical-footer'>
        <div className='footer-community'>
        <a href="">Community Standards</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms</a>
        <a href="">Cookie Policy</a>
        </div>

        <div className='copyright'>
          <p>© 2024 Tribsy. All rights reserved.</p>
        </div>
       
      </div>
      
      
    </div>

    </>

  )
}

export default Footer