import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiHackerrank} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/aishwarya-kalburgi-721150120' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/aishwarya1-1' target='_blank'><BsGithub/></a>
        <a href='https://www.hackerrank.com/AXAXAXAXXA' target='_blank'><SiHackerrank/></a>
    </div>
  )
}

export default HeaderSocials