import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-mario-yellow selection:text-black">
      {/* Progress Bar - Mario Style */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-black z-[60]">
        <motion.div
          className="h-full bg-mario-yellow"
          style={{ scaleX }}
        />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Works />
      </main>

      <Footer />

      {/* Retro Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
}
