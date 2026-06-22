import React from 'react';

interface FeaturesRevealCardsBentoProps {
  tag: string;
  title: string;
  description: string;
  items: { title: string; description: string; href: string; imageSrc: string }[];
}

const FeaturesRevealCardsBento: React.FC<FeaturesRevealCardsBentoProps> = ({ tag, title, description, items }) => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        {items.map((item, idx) => (
          <a key={idx} href={item.href} className="block border rounded-lg p-4">
            <img src={item.imageSrc} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-bold">{item.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRevealCardsBento;