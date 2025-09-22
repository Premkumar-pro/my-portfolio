import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Project1 from './Components/ProjectDetails/Project1' // Add this import
import Project2 from './Components/ProjectDetails/Project2' // Add this import
import Project3 from './Components/ProjectDetails/Project3' // Add this import
import Project4 from './Components/ProjectDetails/Project4' // Add this import
import Resume from './Pages/Resume'
import './App.css'
import './index.css'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className="App min-h-screen bg-gray-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </motion.div>
          } />
          <Route path="/resume" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Resume />
            </motion.div>
          } />
          <Route path="/projects/project1" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Project1 />
            </motion.div>
            
          } />
          <Route path="/projects/project2" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Project2 />
            </motion.div>
            
          } />
          <Route path="/projects/project3" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Project3 />
            </motion.div>
            
          } />
          <Route path="/projects/project4" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Project4 />
            </motion.div>
            
          } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App