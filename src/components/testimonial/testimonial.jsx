import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/cardistry.gif'
import AVTR2 from '../../assets/kindle.gif'
import AVTR3 from '../../assets/airplane.gif'
import {  Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import 'swiper/css/navigation';


const testimonial = () => {
  return (
    <section id='testimonial'>
        <h5>Outside Of Work</h5>
        <h2>Personal Interests</h2>

        <Swiper className="container testimonial__container"
        modules={[ Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        
        >
            <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    <img src={AVTR1} alt="Avatar 1" />
                    </div>
                    <h3 className='interest-text'>Cardistry</h3>
                    <a href="https://instagram.com/cardist_z?igshid=OGQ5ZDc2ODk2ZA==" className='btn btn-primary' target='__blank'>Cardistry Page</a>
                
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    <img src={AVTR2} alt="Avatar 2" />
                    </div>
                    <h3>Reading</h3>
                   
                
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    
                    <img src={AVTR3} alt="Avatar 3" />
                    </div>
                    <h3>Travelling</h3>
                   
               
            </SwiperSlide>
        </Swiper>

    </section>
  )
}

export default testimonial