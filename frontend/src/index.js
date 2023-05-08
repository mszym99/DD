import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Test from './pages/Test';
import ContactUs from './pages/ContactUs';
import ClientReviews from './pages/ClientReviews';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      
    </Router>
  </React.StrictMode>
);


