import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
const Hero = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <>
            <div className="hero" >
                <div className="hero__one" data-aos="zoom-in-up" data-aos-duration="3000">
                    <h1 className="hero__one__intro">
                        Grow your skills to advance your career path
                    </h1>
                    <p className="hero__one__support">
                        build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
                    </p>
                    <div className="actions">
                        <button className="get__started">Get Started Now <img src="images/arrow_outward.png" alt="" /></button>
                        <button className="but">Enroll Now</button>
                    </div>
                    <div className="previews">
                        <img src="images/enrolled.png" alt="" className='hero-enrol' />
                        <img src="images/mobile-hero-enrol.png" alt="" className='mobile-hero-enrol' />
                    </div>
                    <img src="images/vector.png" alt="" className="vector" />
                    <img src="images/yellow-round.png" alt="" className="yellow-round-two" />
                    <img src="images/zigzag.png" alt="" className='zigzag' />
                    <img src="images/arrow.png" alt="" className='arrow' />
                    <img src="images/mobile-arrow.png" alt="" className='mobile-arrow' />
                </div>
                <div className="hero__two" data-aos="zoom-in-right">
                    <img src="images/hero-image.png" alt="" className="hero-image" />
                </div>
            </div>
            <div className="hero__footer" data-aos="fade-left">
               <img src="images/Zoom svg.png" alt="" className='desk' />
               <img src="images/stripe.png" alt="" className='desk' />
               <img src="images/monday.com svg.png" alt="" className='desk' />
               <img src="images/slack.png" alt="" className='desk' />
               <img src="images/Dropbox svg.png" alt="" className='desk' />
               <img src="images/mobile-zoom.png" alt="" className='mob' />
               <img src="images/mobile-stripe.png" alt="" className='mob' />
               <img src="images/mobile-monday.png" alt="" className='mob' />
               <img src="images/mobile-slack.png" alt="" className='mob' />
               <img src="images/mobile-dropbox.png" alt="" className='mob' />
            </div>
        </>
    )
}

export default Hero
