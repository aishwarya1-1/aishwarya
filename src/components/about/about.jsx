import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
   <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

       <div className="container about__container">
           <div className="about__me">
               <div className="about__me-image">
                   <img src={ME} alt="About Me" />
               </div>
           </div>
           <div className="about__content">
               <div className="about__cards">
                   <article className="about__card">
                       <FaAward  className='about__icon'/>
                       <h5>Experience</h5>
                       <small>5+ yrs Working</small>
                   </article>
                
                   <article className="about__card">
                       <VscFolderLibrary  className='about__icon'/>
                       <h5>Projects</h5>
                       <small> 35+ Completed</small>
                   </article>
               </div>
               <p>
               As a passionate Software Engineer deeply committed to crafting cutting-edge solutions, I thrive on staying ahead of the tech curve. My continuous skill enhancement fuels my ability to excel in collaborative teams. I'm excited to leverage my expertise to make a significant impact for our customers.
               </p>
               <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div>
       </div>
   </section>
  )
}

export default about