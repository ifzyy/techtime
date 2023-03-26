import React from 'react'
import '../styles/community.css'
const Community = () => {
  return (
    <div className="community">
      <p>join our community</p>
      <h2>are you  ready to connect with the future talent of the tech world</h2>
      <p className="p-again">meet up with other techstars and grow together</p>
      <div className='world-image'>
        <img src="images/community.png" alt=""  className='desk-community'/>
        <img src="images/mobile-community.png" alt="" className='mobile-community'/>
      </div>

      <button className="join">Join our Community</button>
    </div>
  )
}

export default Community
