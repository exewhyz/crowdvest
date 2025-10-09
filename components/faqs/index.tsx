"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can invest in Frontier Plaza?",
    answer: "This opportunity is open to accredited investors only. Yes, international investors can also participate."
  },
  {
    question: "What is the minimum investment?",
    answer: "$25,000."
  },
  {
    question: "What's the target hold period?",
    answer: "4–5 years, with quarterly distributions planned."
  },
  {
    question: "How do I receive returns?",
    answer: "Distributions are sent quarterly, directly to your account."
  },
  {
    question: "When do I start receiving distributions?",
    answer: "Since our deals are cash-flowing from day one, you'll receive your first distribution in the next quarterly cycle."
  },
  {
    question: "Can I invest with my IRA or through a 1031 exchange?",
    answer: "Yes — our offerings are structured to accept both self-directed IRAs and 1031 exchange funds."
  },
  {
    question: "What makes this deal different from others?",
    answer: "Frontier Plaza is anchored by Giant Eagle with a rare profit-sharing lease, 97% occupancy, and flexible exit strategies across four separate parcels."
  },
  {
    question: "Who manages the property?",
    answer: "We provide in-house management, ensuring hands-on oversight, efficient operations, and alignment with investor interests."
  }
];

function FAQs() {
  return (
    <section id="faqs" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about investing in Frontier Plaza
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-base sm:text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-3 text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQs;