'use client'
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 rounded-lg"
      >
        <h3 className="font-semibold">{question}</h3>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="p-4 bg-white border border-gray-200 rounded-b-lg">{answer}</p>}
    </div>
  );
};

export default FAQItem;