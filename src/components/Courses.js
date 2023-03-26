import React from 'react'
import { Link } from 'react-router-dom'
import Coursesdata from './data/Coursesdata'
import Card from './Card'
import '../styles/courses.css'
const Courses = () => {
    return (
        <div className="courses">
            <img src="images/cross.png" alt="" className='cross'/>
            <h2>browse our popular courses</h2>
            <p>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <ul className="courses__nav">
                <li><Link to="/#">All Categories </Link></li>
                <Link to="/#"> Design </Link>
                <Link to="/#"> Development </Link>
                <Link to="/#"> Marketing </Link>
            </ul>
            <div className="cards">
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
