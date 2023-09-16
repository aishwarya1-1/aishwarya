import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram }  from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

const footer = () => {
  return (
   <footer> 
       <a href="#" className='footer__logo'>AISHWARYA</a>
       <ul className="permalinks">
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#experience">Skills</a></li>
           <li><a href="#services">Experience</a></li>
           <li><a href="#testimonial">Interests</a></li>
           <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
           <a href="https://www.facebook.com/aishwarya.kalburgi.5?mibextid=LQQJ4d" target='__blank'><FaFacebookF/></a>
           <a href="https://instagram.com/aishwaryakalburgi15?igshid=OGQ5ZDc2ODk2ZA==" target='__blank'><FiInstagram/></a>
           <a href="https://www.linkedin.com/in/aishwarya-kalburgi-721150120" target='__blank'><FiLinkedin/></a>
       </div>

       <div className="footer__copyright">
           <small>&copy; AK</small>
       </div>
   </footer>
  )
}

export default footer