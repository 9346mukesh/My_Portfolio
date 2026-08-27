import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route
            path="/*"
            element={
              <AnimatePresence>
                {loading ? (
                  <Loader key="loader" />
                ) : (
                  <motion.div
                    key="app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-bg text-bone min-h-screen"
                  >
                    <Header />
                    <main>
                      <Hero />
                      <Projects />
                      <About />
                      <Skills />
                      <Experience />
                      <Education />
                      <Contact />
                    </main>
                    <Footer />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          />
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
