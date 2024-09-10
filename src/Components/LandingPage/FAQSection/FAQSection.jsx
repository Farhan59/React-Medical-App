import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by visiting our website and selecting your preferred date and time from the available slots.',
    },
    {
      question: 'What specialties of doctors are available?',
      answer: 'We have a range of specialists including general physicians, dermatologists, pediatricians, and more.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we prioritize the security and confidentiality of your personal information. We use advanced encryption methods to protect your data.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open selected FAQ
    }
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>&#x25bc;</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
