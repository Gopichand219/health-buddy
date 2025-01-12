import React, { useState } from "react";

const FAQs = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="p-4">
      <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-4 bg-white transition-transform"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <button className="text-black-200 text-lg">
                {expandedIndex === index ? "−" : "+"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="mt-2 text-gray-600 text-sm">
                {faq.answer}
                {faq.points && (
                  <ul className="list-disc ml-5 mt-2">
                    {faq.points.map((point, idx) => (
                      <li key={idx}>{point.pnt}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
