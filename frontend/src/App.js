/*import Footer from "./components/Footer/Footer";*/
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar"; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUsForm/>
      <Homepage />
      
      <Footer />
    </div>
  );
}

export default App;
