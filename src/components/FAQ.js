import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
import '../styles/faq.css'
const FAQ = () => {
    const [open, setopen] = useState(true);
    const handleClick = () => {
        if (open) {
            setopen(false);
        } else {
            setopen(true);
        }
    };
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="faq">
            <img src="images/big-blue.png" alt="" className='big-blue' />
            <img src="images/yellow-zigzag.png" alt="" className='faq-zag' />
            <img src="images/ring-two.png" alt="" className='ring-two' />
            <img src="images/ring-two-again.png" alt="" className='ring-two-again' />
            <h2 data-aos="zoom-in-up">frequently asked questions</h2>
            <p data-aos="flip-down">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <ul className="faq__list" data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="3000">
                <li>
                    <div className="space">
                        Is there free trial available?
                        <button className={open ? "opened faq_button" : "faq_button"} onClick={handleClick}>-</button>
                    </div>
                    <div className={open ? "open " : "closed"}>
                        high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.
                    </div>
                </li>
                <li>
                    <div className="faq__list__item">
                        can i change my plan later?
                        <button className="faq_button">+</button>
                    </div>
                </li>
                <li>
                    <div className="faq__list__item">
                        are the courses lifetime?
                        <button className="faq_button">+</button>
                    </div>
                </li>
                <li>
                    <div className="faq__list__item">
                        do i get certified after taking courses?
                        <button className="faq_button">+</button>
                    </div>
                </li>
                <li>
                    <div className="faq__list__item">
                        how do i reach out to mentors?
                        <button className="faq_button">+</button>
                    </div>
                </li>
                <li>
                    <div className="faq__list__item">
                        do we get job ready after taking courses?
                        <button className="faq_button">+</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FAQ
