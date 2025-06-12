import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listing from './pages/Listings';
import Features from './pages/Features';
// import Pages from './pages/Pages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Addproperty from './pages/Addproperty';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/features" element={<Features />} />
            {/* <Route path="/pages" element={<Pages />} /> */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-property" element={<Addproperty />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;