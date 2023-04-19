import React from 'react'
import './HomepageStyles.css'

function Homepage() {
  return (
    <div className='homepage-container'>
    <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Our Mission: To Serve You with the best detailing services in the PNW
                        </h1>
                        <p class="text-small">
                        Dynamic Detailing, a local business based in Liberty Lake, Washington, that provides power washing services for garbage cans, concrete, and other items that need detailing. Their team of professionals is committed to delivering the best service to their customers within the Pacific Northwest region.                        </p>
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