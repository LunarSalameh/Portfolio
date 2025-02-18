import React from 'react';

import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Navbar from './components/navbar';
// import HeroSection from './pages/heroSection';
import Projects from './pages/projects';
import Skills from './pages/skills';
import ContactMe from './pages/contactMe';
import AboutMe from './pages/aboutMe';
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';


function App() {
  return (
      <div className="dark:text-dark-text text-light-text dark:bg-dark-background bg-light-background  min-h-screen flex flex-col items-center ">
        <Navbar />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="aboutMe" element={<AboutMe />} />
              <Route path="contactMe" element={<ContactMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contactMe" element={<ContactMe />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
