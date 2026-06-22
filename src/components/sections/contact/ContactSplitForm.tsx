import React from 'react';

interface ContactSplitFormProps {
  tag: string;
  title: string;
  description: string;
  inputs: { name: string; type: string; placeholder: string }[];
  buttonText: string;
  imageSrc: string;
}

const ContactSplitForm: React.FC<ContactSplitFormProps> = ({ title, description, inputs, buttonText, imageSrc }) => {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <form className="mt-8 flex flex-col gap-4">
          {inputs.map((i) => <input key={i.name} type={i.type} placeholder={i.placeholder} className="p-3 border rounded-lg" />)}
          <button className="bg-primary p-3 rounded-lg text-white">{buttonText}</button>
        </form>
      </div>
      <img src={imageSrc} className="w-full h-full object-cover rounded-2xl" />
    </section>
  );
};

export default ContactSplitForm;