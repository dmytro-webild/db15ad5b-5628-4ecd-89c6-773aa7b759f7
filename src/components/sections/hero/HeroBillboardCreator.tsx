import React from 'react';

interface HeroBillboardCreatorProps {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryButton: { text: string; href: string };
  note?: string;
  badgeText?: string;
  videos?: string[];
}

const HeroBillboardCreator: React.FC<HeroBillboardCreatorProps> = ({ tag, title, titleHighlight, description, primaryButton }) => {
  return (
    <section className="py-20 text-center">
      <span className="text-sm font-bold uppercase tracking-widest">{tag}</span>
      <h1 className="text-6xl font-extrabold mt-4">{title} <span className="text-primary">{titleHighlight}</span></h1>
      <p className="mt-6 text-xl max-w-2xl mx-auto">{description}</p>
      <div className="mt-10">
        <a href={primaryButton.href} className="px-8 py-3 bg-primary text-white rounded-lg">{primaryButton.text}</a>
      </div>
    </section>
  );
};

export default HeroBillboardCreator;