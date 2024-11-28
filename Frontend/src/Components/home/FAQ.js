import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/Faqdata';

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null); 

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id); 
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Find answers to common questions about our services
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <div className="divide-y divide-gray-200">
                        {faqData.map((item) => (
                            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                                <button
                                    className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                                    onClick={() => toggleFAQ(item.id)}
                                >
                                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                                    {openFAQ === item.id ? (
                                        <ChevronUp className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
