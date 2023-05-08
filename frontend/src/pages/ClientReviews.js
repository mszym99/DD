import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ClientReviewStatic from '../components/ClientReviewFeedStatic/ClientReviewStatic'
function ClientReviews() {
  return (
    <div className="App">
    <Navbar/>
    <ClientReviewStatic/>
    <Footer/>
    </div>
  )
}

export default ClientReviews