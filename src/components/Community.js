import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
import '../styles/community.css'
const Community = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 })
  }, [])
  return (
    <div className="community">
      <p data-aos="flip-down">join our community</p>
      <h2 data-aos="zoom-in-up">are you  ready to connect with the future talent of the tech world</h2>
      <p className="p-again" data-aos="zoom-in-up">meet up with other techstars and grow together</p>
      <div className='world-image' data-aos="zoom-in-up" data-aos-duration="5000">
        <img src="images/community.png" alt=""  className='desk-community'/>
        <img src="images/mobile-community.png" alt="" className='mobile-community'/>
      </div>

      <button className="join">Join our Community</button>
    </div>
  )
}

export default Community
