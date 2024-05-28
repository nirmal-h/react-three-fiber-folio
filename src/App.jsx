import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from './components';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const [count, setCount] = useState(0)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <motion.div className="progress-bar z-10 bg-[#915EFF]" style={{ scaleX }} />
    <div className="h-dvh relative z-0 bg-primary">
      <div className="bg-gradient-to-r from-slate-900 to-gray-900 bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
      <Contact />
      <StarsCanvas />
      </div>
      
    </div>
    </BrowserRouter>
  )
}

export default App
