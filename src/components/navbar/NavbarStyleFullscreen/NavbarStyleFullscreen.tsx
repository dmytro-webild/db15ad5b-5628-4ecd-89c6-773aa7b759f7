import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  id?: string;
}

interface NavbarStyleFullscreenProps {
  navItems: NavItem[];
  brandName: string;
}

export default function NavbarStyleFullscreen({ navItems, brandName }: NavbarStyleFullscreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
      <div className="text-2xl font-bold tracking-tighter">{brandName}</div>

      <button onClick={() => setIsOpen(!isOpen)} className="z-50 p-2">
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
          <ul className="flex flex-col items-center gap-8 text-4xl font-light">
            {navItems.map((item, index) => (
              <li key={`${item.id ?? 'nav'}-${index}`}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
