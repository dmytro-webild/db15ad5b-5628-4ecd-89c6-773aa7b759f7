import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  brandName: string;
}

export default function NavbarStyleFullscreen({ navItems, brandName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-transparent w-full">
      <Link href="/" className="text-2xl font-bold">
        {brandName}
      </Link>

      <button 
        className="z-50 block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <div 
        className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-white/95 transition-all duration-300 md:static md:flex md:flex-row md:bg-transparent ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="text-2xl md:text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}