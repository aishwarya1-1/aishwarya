import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const skills=[
    {
        id:1,
        skillName:'Python',
        level:'Experienced'
    },
    {
        id:2,
        skillName:'React',
        level:'Intermediate'
    },
    {
        id:3,
        skillName:'PySpark',
        level:'Intermediate'
    },
    {
        id:4,
        skillName:'Git',
        level:'Experienced'
    },
    {
        id:5,
        skillName:'Linux',
        level:'Intermediate'
    },
    {
        id:6,
        skillName:'Flask',
        level:'Intermediate'
    },
    {
        id:7,
        skillName:'ELK Stack',
        level:'Experienced'
    },
    {
        id:8,
        skillName:'Data Structures and Algorithms',
        level:'Intermediate'
    },
    {
        id:9,
        skillName:'Object Oriented Programming',
        level:'Experienced'
    },
    {
        id:10,
        skillName:'MySQL',
        level:'Experienced'
    },
    {
        id:11,
        skillName:'AWS Services',
        level:'Intermediate'
    },
    {
        id:12,
        skillName:'Kotlin',
        level:'Beginner'
    },
    {
        id:13,
        skillName:'Machine Learning',
        level:'Beginner'
    }



]
const experience = () => {
  return (
    <section id="experience">
        <h5>I Have Worked On</h5>
        <h2>Skills</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <div className="experience__content">
                   {
                       skills.map(({id,skillName,level}) => {
                                return (
                            <article key={id} className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>{skillName}</h4>
                        <small className="text-light">{level}</small>
                       </div>
                    </article>
                           )
                       }
                       )
                   }
                </div>

            </div>
        </div>
    </section>
  )
}

export default experience