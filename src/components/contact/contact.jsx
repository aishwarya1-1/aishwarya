import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form=useRef();
    const sendEmail =(e) =>{
        e.preventDefault();
        emailjs.sendForm('service_1w2dzj6','template_fsyiy5c',form.current,'P9u8t2xyR3sTdRChB')
        e.target.reset();
    };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail  className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>aishwaryakalburgi990@gmail.com</h5>
                    <a href="mailto:aishwaryakalburgi990@gmail.com" target='__blank'>Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+918073592311</h5>
                    <a href="https://api.whatsapp.com/send?phone=918073592311" target='__blank'>Send a message</a>
                </article>
           
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='name' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact