import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scroll from './components/scroll';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
        {
        loading ? (
          <Preloader /> 
        ) : (
        <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Scroll />
        <Footer />
        </div>
        )};
    </div>
  );
};

export default App;
