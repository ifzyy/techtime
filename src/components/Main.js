import React, { useEffect } from 'react'
import Courses from './Courses'
import Community from './Community'
import FAQ from './FAQ'
import Maindata from './data/Maindata'
import Maincard from './Maincard'
import Testimonial from './Testimonial'
import AOS from 'aos'
import 'aos/dist/aos.css'

import '../styles/main.css'
const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <>
            <div className="main">
                <div className="main__one">
                    <div className="main__one__content" data-aos="fade-left">
                        <img src="images/cockhead.png" alt="" className='cock-head' />
                        <h2>high quality video, audio & live classes</h2>
                        <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard  meaning for high definition, generally any standard video image</p>
                        <button className="view__courses">View Courses</button>
                        <ul className="benefits">
                            <li><img src="images/audio-classes.png" alt="" /> Audio classes</li>
                            <li><img src="images/live-classes.png" alt="" /> Live classes</li>
                            <li><img src="images/recorded-classes.png" alt="" />recorded classes</li>
                            <li><img src="images/Notes.png" alt="" />50+ Notes</li>
                        </ul>
                    </div>
                    <div className="main__one__content__two" data-aos="fade-right">
                        <img src="images/green-zigzag.png" alt="" className='green-zigzag' />
                        <img src="images/stones.png" alt="" className='stones' />
                        <img src="images/ring.png" alt="" className='ring' />
                        <img src="images/small-purple.png" alt="" className='small-purple' />
                        <img src="images/main-one-mobile.png" alt="" className='mobile-main-one' />
                        <img src="images/main-one.png" alt="" className='main-one' />
                        <img src="images/students.png" alt="" className='enrolled' />

                    </div>
                </div>
                <div className="main__two">
                    <div className="main__two__content" data-aos="flip-left">
                        <img src="images/small-orange.png" alt="" className='small-orange' />
                        <img src="" alt="" />
                        <h2>this is why we are best from others</h2>
                        <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

                        <img src="images/main-two-big.png" alt="" className="main__two__big" />

                    </div>

                    <div className="main__two__content__two" data-aos="zoom-in">
                        <img src="images/orange-zigzag.png" alt="" className='orange-zigzag' />
                        <img src="images/big-purple.png" alt="" className='big-purple' />
                        {Maindata.map(data => (
                            <Maincard
                                key={data.name}
                                name={data.name}
                                description={data.description}
                                image={data.image}
                            />
                        ))}
                    </div>


                </div>
            </div>
            <Courses />
            <Testimonial />
            <Community />
            <FAQ />
        </>
    )
}

export default Main
