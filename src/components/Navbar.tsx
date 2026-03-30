import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-6 md:px-12 flex justify-between items-center bg-mario-blue/90 backdrop-blur-sm border-b-4 border-black">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-lg md:text-2xl font-pixel text-mario-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        PORTOFOLIO
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-xs uppercase hover:text-mario-yellow transition-colors"
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 pixel-border bg-mario-red text-white active:translate-y-1 active:shadow-none transition-all"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[170px] bg-mario-blue z-40 flex flex-col items-center justify-center gap-3 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-pixel text-red hover:text-mario-yellow transition-colors drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Decoration for mobile menu */}
            <div className="absolute bottom-12 flex gap-4 mb-4">
              <div className="w-8 h-8 bg-mario-red pixel-border animate-bounce" />
              <div className="w-8 h-8 bg-mario-yellow pixel-border animate-bounce delay-100" />
              <div className="w-8 h-8 bg-mario-green pixel-border animate-bounce delay-200" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
