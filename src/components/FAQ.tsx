import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQProps {
  onNavigate?: (page: string) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a vehicle?',
      answer: 'You can book through our website, WhatsApp, or by calling us directly. Simply provide your travel details, and our team will arrange everything for you.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and bank transfers. Payment can be made in advance or upon service completion, depending on your preference.',
    },
    {
      question: 'Are your drivers licensed and experienced?',
      answer: 'Yes, all our drivers are fully licensed, experienced, and undergo regular training. They are familiar with all routes in Makkah, Madinah, and Jeddah.',
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify your booking. Please contact us at least 24 hours in advance for full refund. Cancellations within 24 hours may incur charges.',
    },
    {
      question: 'Do you provide child seats?',
      answer: 'Yes, we provide child seats upon request at no additional charge. Please inform us when booking so we can arrange this for you.',
    },
    {
      question: 'What is included in your hotel booking service?',
      answer: 'We assist with finding and booking hotels according to your budget and preferences. We offer options from budget-friendly to 5-star accommodations near the Haram.',
    },
    {
      question: 'Is airport pickup service available 24/7?',
      answer: 'Yes, our airport transfer service operates 24/7, 365 days a year. We track your flight and adjust pickup times accordingly.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We primarily serve Makkah, Madinah, and Jeddah, including all airports. We also provide intercity travel to other major Saudi cities.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-slate-100 overflow-hidden hover:border-amber-500 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-amber-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-gray-300 mb-6">Our support team is here to help you 24/7</p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
