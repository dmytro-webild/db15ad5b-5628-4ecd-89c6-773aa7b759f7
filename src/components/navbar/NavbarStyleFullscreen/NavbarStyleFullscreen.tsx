import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarStyleFullscreenProps {
  navItems: NavItem[];
  brandName: string;
}

export default function NavbarStyleFullscreen({ navItems, brandName }: NavbarStyleFullscreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent">
      <div className="text-xl font-bold tracking-tight text-foreground">{brandName}</div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative z-50 p-2 text-foreground focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background flex flex-col justify-center items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}