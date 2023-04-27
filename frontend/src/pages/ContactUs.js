import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import BasicText from '../components/BasicText/BasicText'
function ContactUs() {
  return (
    <div className="App">
      <Navbar/>
      <ContactUsForm className='contactUsHero'/>
      <BasicText/>
      <Footer/>
    </div>
  )
}

export default ContactUs