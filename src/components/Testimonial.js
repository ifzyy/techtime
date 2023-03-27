import React, { useEffect } from 'react'
import Testcard from './testcard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <div className="testimonial">
            <h2 data-aos="zoom-in-up">what our clients are saying</h2>
            <p data-aos="flip-down">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <div className="testimonial__cards" data-aos="zoom-in-up">
                <Testcard />
            </div>

        </div>
    )
}

export default Testimonial
