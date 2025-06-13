import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './pages/Listings';
import Features from './pages/Features';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Addproperty from './pages/Postproperty';
import HomePage from './pages/HomePage';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Postproperty from './pages/Postproperty';
import Propertydetails from './subpages/Propertydetails';
import Postrequirement from './pages/Postrequirement';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/postproperty" element={<Postproperty />} />
            <Route path="/postrequirement" element={<Postrequirement />} />


            {/* Sub-Pages */}
            <Route path="/property/:id" element={<Propertydetails />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;