import React from 'react';

interface NavbarFullscreenProps {
  logo: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const NavbarFullscreen: React.FC<NavbarFullscreenProps> = ({ logo, navItems, ctaButton }) => {
  return (
    <nav className="flex items-center justify-between p-6 bg-transparent">
      <div className="text-2xl font-bold">{logo}</div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-medium">{item.name}</a>
        ))}
      </div>
      <a href={ctaButton.href} className="px-4 py-2 bg-primary text-white rounded-full">{ctaButton.text}</a>
    </nav>
  );
};

export default NavbarFullscreen;