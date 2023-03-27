import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Navigation = () => {

    return (
        <div className="header__nav">
           <Link to="/#" ><img src="images/logo.png" alt="" className="logo" /></Link> 
                <img id="hamburgerBtn" className="image" src="/images/menu.png" alt="dropdown" />

            <nav className="primary-nav">
                <Link to="/#"> Home </Link>
                <Link to="/#">About</Link>
                <Link to="/#">Courses</Link>
                <Link to="/#">Testimonial</Link>
                <Link to="/#">Community</Link>
                <button className="but">Enroll Now</button>
            </nav>
        </div>

    )
}

export default Navigation
