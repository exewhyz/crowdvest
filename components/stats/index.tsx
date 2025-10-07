import React from "react";

import { motion } from "framer-motion";

import {
  Users,
  DollarSign,
  Award,
  Home,
} from "lucide-react";

import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";

function Stats() {
  return (
    <section className="relative py-16 overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center text-white">
          {[
            {
              icon: <DollarSign className="w-8 h-8" />,
              value: "$1,000",
              label: "Price Per Share",
            },
            {
              icon: <Home className="w-8 h-8" />,
              value: "$5,840,000",
              label: "Target Raise",
            },
            {
              icon: <Users className="w-8 h-8" />,
              value: "$25,000",
              label: "Minimum Investment",
            },
            {
              icon: <Award className="w-8 h-8" />,
              value: "5 Years",
              label: "Investment Period",
            },
            {
              icon: <CalendarDateRangeIcon className="w-8 h-8" />,
              value: "Quarterly",
              label: "Distribution Schedule",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="font-bold text-3xl mb-1">{item.value}</div>
              <div className="text-blue-100 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
