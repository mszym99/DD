import React from 'react'
import './HomepageStyles.css'
import homepageImg from '../../assets/homepageimg.jpg'
function Homepage() {
  return (
    
    <div className='homepage-container'>
    
    <section class="section">
        
                <div class="box-main">
                    <div class="firstHalf">
                        
                        <h1 class="text-big">
                        Transform Your Property with Our Expert Power Washing Services                        </h1>
                        <ul>
                            <li>Garbage can cleaning: Our team uses state-of-the-art equipment to clean and sanitize your garbage cans, eliminating foul odors and harmful bacteria.</li>
                            <li>Our power washing services can remove years of grime, dirt, and stains from your concrete surfaces, leaving them looking like new.  </li>
                            <li>Affordable pricing: We offer competitive pricing for all of our services, so you can enjoy a cleaner and more beautiful space without breaking the bank.</li>
                        </ul>
                        <img src={homepageImg} alt='homepageImg'></img>
                    </div>
                </div>
    </section>
            </div>
  )
}

export default Homepage