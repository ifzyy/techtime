import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__one">
                <div className="footer__one__head">
                    <img src="images/logo.png" alt="" />
                </div>
                <div className="footer__one__content">
                    <p>reach out to us on any of our social media networks</p>
                    <ul className="footer__one__content__social">
                        <li><img src="images/facebook.png" alt="" /></li>
                        <li><img src="images/twitter.png" alt="" /></li>
                        <li><img src="images/youtube.png" alt="" /></li>
                        <li><img src="images/instagram.png" alt="" /></li>
                        <li><img src="images/discord.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <ul className="footer__two">
               <h2>Useful Links</h2>
               <li><Link to="#">Home</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Our courses</Link></li>
                <li><Link to="#">Testimonials</Link></li>
                <li><Link to="#">Our community</Link></li>
            </ul>
            <ul className="footer__three">
                <h2>Community</h2>
                <li><Link to="#">Help centers</Link></li>
                <li><Link to="#">Partners</Link></li>
                <li><Link to="#">Sugestion</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Newsletter</Link></li>
            </ul>
            <div className="footer__four">
                <h2>Subscribe us</h2>
                <form className="form">
                    <input type="text" className="input" value="johnsonnifemi8@gmail.com" />
                    <button type="submit">Send Message</button>
                </form>
                
            </div>
        </div>
    )
}

export default Footer
