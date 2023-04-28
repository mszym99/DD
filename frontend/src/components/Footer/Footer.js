import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            
                <div className='footer-link-items'>
                    <h2>Contact Us Now</h2>
                    <a href="tel:+1-509-855-9255">509-855-9255</a>
                    <a href='mailto:dynamicdetailingofficial@gmail.com'>dynamicdetailingofficial@gmail.com</a>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <div className='social-icons'>  
                        <FaInstagram classname='icon' onClick={()=> window.open('https://www.instagram.com/dynamicdetailingofficial/')}></FaInstagram>
                        <FaYoutube classname='icon' onClick={()=> window.open('https://www.youtube.com/channel/UCYnR3hOx-kJSumWCLiKuN5w')}></FaYoutube>
                        <FaFacebook classname='icon' onClick={()=> window.open('https://www.facebook.com/DynamicDetailingSpokane')}></FaFacebook>
                        <FaTiktok classname='icon' onClick={()=> window.open('https://www.tiktok.com/@dynamicdetailingofficial')}></FaTiktok>
                    </div>
                </div>
        </div>

        <section className='social-media'>
                <small className='footer-est'>DYNAMIC DETAILING est. 2023</small>
        </section>
    </div>
  )
}

export default Footer