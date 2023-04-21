import React from 'react'
import './HomepageStyles.css'

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
                    </div>
                </div>
    </section>
    <section class='section'>
        <div className='box-main'>
            <div className='firstHalf'>
                <h1 className='text-big'>
                    New Company Big Goals
                </h1>
                <p className='text-small'>
                Zach and Ryan are two enthusiastic individuals who are eager to launch their new company, Dynamic Detailing. Both with a passion for providing high-quality services, they are excited to offer their expertise in power washing for garbage cans, concrete, and other items that need detailing. They have a shared vision of creating a local business that caters to the Pacific Northwest region and provides the best service possible. With their combined skills and dedication, Zach and Ryan are ready to take on this new venture and make Dynamic Detailing a success. </p>
            </div>
        </div>

    </section>
            </div>
  )
}

export default Homepage