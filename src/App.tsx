import React from 'react';
import Header from './components/header/Header';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about-me/AboutSection';
// import Testimonies from './components/about-me/Testimonies';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="section-wave-top"></div>
        <ProjectsSection />
        <div className="section-wave-bottom"></div>
        <AboutSection />
        <div className="section-wave-top"></div>
        <ContactSection />
        <div className="section-wave-bottom"></div>
        <Footer />
      </main>
    </>
  );
}

export default App;
