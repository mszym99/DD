import React, {useState} from 'react'
import {HiOutlineMenuAlt4, HiOutlineMail} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa'
import {MdRateReview} from 'react-icons/md'
import {Link, Switch} from 'react-router-dom'
import DDlongTransparent from '../../assets/DD_long_transparent-11.png'
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
            <div className='nav-icons'>
                <HiOutlineMail className='icon' style={{marginRight: '1rem'}}/>
                <MdRateReview className='icon' />
            </div>
            <div className='hamburger' onClick={handleNav}>
                <HiOutlineMenuAlt4 className='icon'/>
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>About Us</li>
                    <li>Client Reviews</li>
                    <li>Contact Us</li>
                </ul>
            
                <div classname='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                    </div>
                    <div className='social-icons'>
                        <FaInstagram classname='icon' onClick={()=> window.open('https://github.com/mszym99/DD')}></FaInstagram>
                        <FaYoutube classname='icon' onClick={()=> window.open('https://github.com/mszym99/DD')}></FaYoutube>
                        <FaFacebook classname='icon' onClick={()=> window.open('https://github.com/mszym99/DD')}></FaFacebook>
                        <FaTiktok classname='icon' onClick={()=> window.open('https://github.com/mszym99/DD')}></FaTiktok>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar