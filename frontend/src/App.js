/*import Footer from "./components/Footer/Footer";*/
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar"; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
