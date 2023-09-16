
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.JPG'
import HeaderSocial from './HeaderSocials'
import React from "react";




const Header = () => {
    
  return (
    <header>
        
        <div className="container header__container">
     
            <h5>Hello I'm</h5>
            <h1>Aishwarya Kalburgi</h1>
            <h5 className="text-light">Software Developer</h5>
            <CTA/>
            <HeaderSocial />
            <div className="me">
                <img src={ME} alt="me"/>
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header