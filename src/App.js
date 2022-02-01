import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return(
    <div className="h-full">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
};

export default App;
