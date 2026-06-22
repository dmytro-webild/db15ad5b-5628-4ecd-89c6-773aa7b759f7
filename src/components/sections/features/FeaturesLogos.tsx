import React from 'react';

interface FeaturesLogosProps {
  title: string;
  items: { icon: any; title: string; description: string }[];
}

const FeaturesLogos: React.FC<FeaturesLogosProps> = ({ title, items }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl text-center font-bold mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {items.map((item, index) => (
          <div key={index} className="p-6 rounded-xl border flex flex-col items-center text-center">
            <item.icon className="w-12 h-12 mb-4" />
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesLogos;