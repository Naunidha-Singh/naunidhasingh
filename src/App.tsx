import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import MatrixRain from './components/MatrixRain';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AwardsPage from './pages/AwardsPage';
import LeadershipPage from './pages/LeadershipPage'; // 1. Import LeadershipPage

function App() {
  const navigate = useNavigate(); // 2. Initialize navigate
  
  // 3. Create the function to pass as a prop
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      {/* Matrix background (loops behind content) */}
      <MatrixRain backdrop="rgba(15,23,42,1)" color="#00ff9c" />

      {/* Site content above the background */}
      <div className="relative z-10 min-h-screen bg-transparent">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Articles />
                <Contact />
              </main>
            }
          />
          {/* 4. Update AwardsPage route */}
          <Route path="/awards" element={<AwardsPage onBack={handleBack} />} />
          
          {/* 5. Add LeadershipPage route */}
          <Route path="/leadership" element={<LeadershipPage onBack={handleBack} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;