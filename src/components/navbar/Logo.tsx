import React from 'react';

interface LogoProps {
  name: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ name, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
    >
      {name}
    </button>
  );
};

export default Logo;