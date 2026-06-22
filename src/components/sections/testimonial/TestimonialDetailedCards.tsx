import React from 'react';

interface TestimonialDetailedCardsProps {
  tag: string;
  title: string;
  description: string;
  testimonials: { title: string; quote: string; name: string; role: string; imageSrc: string }[];
}

const TestimonialDetailedCards: React.FC<TestimonialDetailedCardsProps> = ({ testimonials }) => {
  return (
    <section className="py-16">
      {testimonials.map((t, idx) => (
        <div key={idx} className="max-w-xl mx-auto p-8 border rounded-2xl flex flex-col items-center text-center">
          <img src={t.imageSrc} className="w-16 h-16 rounded-full mb-4" />
          <p className="text-lg italic">"{t.quote}"</p>
          <h4 className="font-bold mt-4">{t.name}</h4>
          <p className="text-sm">{t.role}</p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialDetailedCards;