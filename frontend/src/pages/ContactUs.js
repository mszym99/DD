import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import BasicText from '../components/BasicText/BasicText'
import '../components/ContactUsForm/ContactUsForm.css'
function ContactUs() {
  return (
    <div className="App">
      <Navbar/>
      <div className='contactUsHero'>
      <ContactUsForm />
      </div>
      <BasicText/>
      <Footer/>
    </div>
  )
}

export default ContactUs