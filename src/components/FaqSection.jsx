import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time based on your requirements.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your plan anytime from the settings page. There will be no charges for cancellation.'
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, we can include additional information in your invoice upon request.'
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is done on a monthly or yearly basis depending on the plan you choose.'
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email in the account settings page.'
    }
  ];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <p className="text-center mb-6">Everything you need to know about the product and billing.</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center bg-gray-50 py-16 px-4 lg:px-8 mt-8 rounded-lg">
        <p className='text-2xl font-bold text-gray-900'>Still have questions?</p>
        <p className='mt-6'>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FaqSection;
