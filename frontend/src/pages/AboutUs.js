import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Homepage from '../components/Homepage/Homepage'
import Footer from '../components/Footer/Footer'
import AboutUsHero from '../components/AboutUsHero/AboutUsHero'
import VisionBar from '../components/VisionBar/VisionBar'
function AboutUs() {
  return (
    <div className="App">
      <Navbar/>
      <VisionBar/>
      <AboutUsHero />
      <Footer/>
    </div>
  )
}

export default AboutUs