import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Coursesdata from './data/Coursesdata'
import Card from './Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/hero.css'
import '../styles/courses.css'
const Courses = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="courses">
            <img src="images/cross.png" alt="" className='cross'/>
            <h2 data-aos="zoom-in-left">browse our popular courses</h2>
            <p data-aos="zoom-in">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <ul className="courses__nav" data-aos="fade-right">
                <li><Link to="/#">All Categories </Link></li>
                <Link to="/#"> Design </Link>
                <Link to="/#"> Development </Link>
                <Link to="/#"> Marketing </Link>
            </ul>
            <div className="cards" data-aos="zoom-in">
                {Coursesdata.map(data =>(
                    <Card 
                    key={data.profile_name}
                    design={data.design}
                    image={data.image}
                    views={data.views}
                    views_plus={data.views_plus}
                    header={data.header}
                    time={data.time}
                    lessons={data.lessons}
                    profile__image={data.profile__image}
                    profile__name={data.profile__name}
                    price={data.price}
                    />
                ))}

            </div>
            <button className="explore">Explore All Courses</button>
        </div>
    )
}

export default Courses
