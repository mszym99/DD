import React from 'react'
import collynfunny from '../../assets/collynfunny.jpg'

function AboutUsHero() {
  return (
        <section className='about-us-hero'>
            
            <div className='about-us-hero-container'>
                <img src={collynfunny} alt='collynfunny' style={{width: '500px', height: '500px'}}></img>
                <div className='about-us-hero-text'>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.John Smith is a highly 
                        motivated and accomplished individual with a passion for technology and innovation. He graduated 
                        with honors from XYZ University with a degree in Computer Science and has since been working in the tech 
                        industry for over a decade. During his career, he has developed a wide range of skills, including programming, 
                        project management, and team leadership. John is known for his exceptional work ethic, attention to detail, and 
                        ability to solve complex problems. In his free time, he enjoys hiking, playing basketball, and spending time with his family. 
                    </p>   
                </div>
            </div>
        </section> 
    
  )
}

export default AboutUsHero