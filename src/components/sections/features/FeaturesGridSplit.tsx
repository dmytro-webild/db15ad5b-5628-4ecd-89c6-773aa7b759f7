import React from 'react';

interface FeaturesGridSplitProps {
  tag: string;
  title: string;
  description: string;
  topItems: { title: string; description: string; imageSrc: string }[];
  bottomItem: { title: string; description: string; primaryButton: { text: string; href: string }; imageSrc: string };
}

const FeaturesGridSplit: React.FC<FeaturesGridSplitProps> = ({ tag, title, description, topItems, bottomItem }) => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <span className="uppercase text-xs tracking-widest">{tag}</span>
        <h2 className="text-4xl font-bold mt-2">{title}</h2>
        <p className="mt-4">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {topItems.map((item, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl">
            <img src={item.imageSrc} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGridSplit;