import React from 'react';

interface FooterSimpleProps {
  brand: string;
  columns: { title: string; items: { label: string; href?: string }[] }[];
  copyright: string;
  links: { label: string; href: string }[];
}

const FooterSimple: React.FC<FooterSimpleProps> = ({ brand, columns, copyright, links }) => {
  return (
    <footer className="py-12 border-t text-center">
      <h3 className="font-bold text-lg mb-6">{brand}</h3>
      <div className="flex justify-center gap-12 mb-8">
        {columns.map((c, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-2">{c.title}</h4>
            {c.items.map((i, k) => <a key={k} href={i.href} className="block text-sm">{i.label}</a>)}
          </div>
        ))}
      </div>
      <p className="text-xs">{copyright}</p>
      <div className="flex justify-center gap-4 mt-4">
        {links.map((l, idx) => <a key={idx} href={l.href} className="text-xs underline">{l.label}</a>)}
      </div>
    </footer>
  );
};

export default FooterSimple;