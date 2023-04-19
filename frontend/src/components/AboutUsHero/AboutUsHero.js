import React from 'react'
import rose from '../../assets/images/rose.jpg'
import './AboutUsHero.css'
function AboutUsHero() {
  return (
        <section className='about-us'>
            
            <div className='about-us-main'>
                <img src={rose} alt='rose'></img>
                <div className='about-us-text'>
                    <h1>Zachary</h1>
                    <h5>Powerwasher</h5>
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
            <div className='about-us-main'>
                <div className='about-us-text'>
                    <h1>Ryan</h1>
                    <h5>Powerwasher</h5>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.John Smith is a highly 
                        motivated and accomplished individual with a passion for technology and innovation. He graduated 
                        with honors from XYZ University with a degree in Computer Science and has since been working in the tech 
                        industry for over a decade. During his career, he has developed a wide range of skills, including programming, 
                        project management, and team leadership. John is known for his exceptional work ethic, attention to detail, and 
                        ability to solve complex problems. In his free time, he enjoys hiking, playing basketball, and spending time with his family. 
                    </p>   
                </div>
                <img src={rose} alt='rose'></img>
            </div>
        </section> 
    
  )
}

export default AboutUsHero