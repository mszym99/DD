import React, {useState} from 'react'
import {HiOutlineMenuAlt4, HiOutlineMail} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa'
import {MdRateReview} from 'react-icons/md'
import {Link, Switch} from 'react-router-dom'
import DDlongTransparent from '../../assets/DD_long_transparent-11.png'
import DDSmall from '../../assets/Dynamic_Detailing_RS_Alt.png'
import './NavbarStyles.css'

function Navbar() {
    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return(
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className='logo'>
            <Link to='/'>
                <img src={DDlongTransparent} width='350px' height= 'auto'alt='Dynamic Detailing'></img>
            </Link>
            </div>
            <ul className='nav-menu'>
                <li><Link to='/about-us'>About Us</Link></li>
                <Link to ='/client-reviews'><li>Client Reviews</li></Link>
                <Link to ='/contact-us'><li>Contact Us</li></Link>
            </ul>
            <div className='DDSmallLogo'>
                <img src={DDSmall} width='40px' height= 'auto' style={{marginRight: '1rem'}}></img>
                
            </div>
            <div className='hamburger' onClick={handleNav}>
                <HiOutlineMenuAlt4 className='icon'/>
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                <li><Link to='/about-us'>About Us</Link></li>
                <Link to ='/client-reviews'><li>Client Reviews</li></Link>
                <Link to ='/contact-us'><li>Contact Us</li></Link>
                </ul>
            
                <div classname='mobile-menu-bottom'>
                    <div className='mobile-menu-icons'>
                        <Link to='/contact-us'>
                        <button>Contact Us Today!</button></Link>
                    </div>
                    <div className='social-icons-mobile-menu'>  
                        <FaInstagram classname='icon' onClick={()=> window.open('https://www.instagram.com/dynamicdetailingofficial/')}></FaInstagram>
                        <FaYoutube classname='icon' onClick={()=> window.open('https://www.youtube.com/channel/UCYnR3hOx-kJSumWCLiKuN5w')}></FaYoutube>
                        <FaFacebook classname='icon' onClick={()=> window.open('https://www.facebook.com/DynamicDetailingSpokane')}></FaFacebook>
                        <FaTiktok classname='icon' onClick={()=> window.open('https://www.tiktok.com/@dynamicdetailingofficial')}></FaTiktok>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar