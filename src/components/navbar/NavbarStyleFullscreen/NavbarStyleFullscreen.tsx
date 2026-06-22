import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-transparent">
      <div className="text-2xl font-bold tracking-tight">{brandName}</div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-background flex flex-col justify-center items-center gap-8 z-40">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-light hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}