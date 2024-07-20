
import React, { useState } from 'react';
import '../styles/navbar.css';
import Logo from '../assets/logo.png'
import User from '../assets/user.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggleOpen = () => {
      setIsOpen(prevIsOpen => !prevIsOpen);
    };
  
   
  
    return (
      <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className='logo' />
          <span>Tribzy</span>
        </div>
        <div className='navbar-links'>
          <a href="#home"  onClick={() => setActive('home')} className={ active==='home'? 'active':' '} >Home</a>
          <a href="#community"  onClick={() => setActive('community')} className={ active==='community'? 'active':' '}>Communities</a>
          <a href="#about" onClick={() => setActive('about')}className={ active==='about'? 'active':' '}>Abous Us</a>
          <a href="#service"  onClick={() => setActive('service')} className={ active==='service'? 'active':' '}>Services</a>
          <a href="#contact"  onClick={() => setActive('contact')} className={ active==='contact'? 'active':' '}>Contact Us</a>
        </div>
        <div className='navbar-auth'>
            <button className='login-btn'>
            <a href="#login">Log in</a>
            </button>
            
            
          <button className='signin-btn'>
          <a href="#signup">Sign Up</a>
          </button>
   
        </div>
        
      </nav>
      <div className=  {isOpen===true?"open-nav-mobile":"mobile-nav-container"}>
          <div onClick={toggleOpen} className='cancel-btn'>X</div>
          <div className='navbar-links-mobile'>
          <a href="#home"onClick={toggleOpen} >Home</a>
          <a href="#community" onClick={toggleOpen}>Communities</a>
          <a href="#about" onClick={toggleOpen}>Abous Us</a>
          <a href="#service" onClick={toggleOpen} >Services</a>
          <a href="#contact" onClick={toggleOpen}>Contact Us</a>
        </div>
        </div>
      <nav className='mobile-nav'>
        
      <div className="navbar-logo">
          <img src={Logo} alt="Logo" className='logo' />
          <span>Tribzy</span>
        </div>
        <div className='mobile-action'>
          <div className='mobile-auth'>
            <img src={User} alt="user" />
            <p>Log In</p>
          </div>
          
          <div className='hamburger-menu-mobile'onClick={toggleOpen}>
            <div className='ham-icon'></div>
            <div className='ham-icon'></div>
            <div className='ham-icon'></div>
           
          </div>
        </div>
      </nav>
      </>
    );
  };
  
  export default Navbar;