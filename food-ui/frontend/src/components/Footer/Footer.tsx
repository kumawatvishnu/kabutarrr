import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>© 2024 Food Delivery. All rights reserved.</p>
                <p>We are a food delivery service dedicated to bringing you the best meals from your favorite restaurants right to your doorstep. Our mission is to make food ordering easy, convenient, and enjoyable for everyone.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact Us</h2>
                <ul>
                    <li>Email: info@kabutarrr.com</li>
                    <li>Phone: +91 1234567890</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>© 2026 Kabutarrr.com - All rights reserved.</p>
    </div>
  )
}

export default Footer