import React from 'react'
import './services.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
  
import "react-vertical-timeline-component/style.min.css"
import {MdWork} from 'react-icons/md'
import {MdSchool} from 'react-icons/md'

const timelineElements=[
    {
        id: 1,
        title: "AMAZON",
        location:"Support Engineer II",
        description:"I worked at Amazon Academy, where I enhanced the Live Lectures component, automated content validation, and implemented features for content pack mapping, significantly reducing manual efforts. Later, I transitioned to the Kindle Accounting team, managing accounting launches for ebooks and Kindle Unlimited, as well as addressing tech debts. I automated two critical accounting reports using technologies like Spark. Additionally, I successfully addressed a substantial financial impact issue, totaling approximately $1MM, stemming from unbooked transactions.",
        date: "May 2022 - present",
        icon: "work",
      },
      {
        id: 2,
        title: "PRODAPT",
        location:"Senior Software Developer",
        description:"Worked on a Python-based SNMP query tool, optimizing network management and distribution as a standalone application. Transitioned from a file-based to API-driven approach for data routing to Assure1's ESP component, expanding data handling capabilities. Gained experience with technologies like Go and Microservices in the Assure1 environment.",
        date: "Dec 2021 - May 2022",
        icon: "work",
      },
      {
        id: 3,
        title: "MICROFOCUS",
        location:"Cloud and Automation Engineer",
        description:
         "During my tenure, I gained valuable experience in working with the ELK stack and Micro Focus tools such as Operation Orchestration, Server Automation, and HCM. My primary focus was on automation, and I successfully completed various projects utilizing these tools. These projects spanned a wide range of domains, including banking applications, dashboard creation, API development, and infrastructure building. I actively contributed to the implementation of these projects, which allowed for streamlined processes and improved efficiency across different areas of the organization",
        date: "November 2017 -  October 2021",
        icon: "work",
      },
      {
        id: 4,
        title: "Bachelors Degree",
        description:
         "Graduated from B.V Bhoomaraddi College of Enginnering.I designed and developed a college database management system with a user-friendly GUI using Java and MySQL. Additionally, I implemented an online results system for the college. My experience extends to game development, where I worked on a hand gesture-controlled game in Unity 3D integrated with OpenCV. Furthermore, I contributed to the development of an optimized face recognition system using Gabor filters and SVM classifiers.",
        date: "June 2013 - July 2017",
        icon: "school",
      },
     
]
const services = () => {

  return (
    <section id="services">
         <h5>My Journey So Far</h5>
        <h2>Experience</h2>
        <VerticalTimeline className='vertical-timeline'>
        {timelineElements.map(element => {
          let isWorkIcon = element.icon === "work"

          return (
            <VerticalTimelineElement
            className='vertical-timeline-content'
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={{background: 'var(--color-primary)'}}
              icon={isWorkIcon ? <MdWork /> : <MdSchool />}
              animate={true}
              contentStyle={{
                background: 'var(--color-bg-variant)',
                border: '1px solid transparent', 
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'var(--transition)', 
              }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(44, 44, 108)' }}
              contentClassName='timeline-element-content' // Add this class
              // Add the hover effect directly to the contentStyle
              style={{
                ':hover': {
                  background: 'white', // Replace with your desired hover color
                },
              }}
             
            >
              
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p className='desc-vertical' id="description">{element.description}</p>
         
            </VerticalTimelineElement>
          )
        })}
            </VerticalTimeline>  
    </section>
  )
}

export default services