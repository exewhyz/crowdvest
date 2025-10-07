import React from "react";
import { motion } from "framer-motion";

function Performance() {
  return (
    <section className="relative py-24 overflow-hidden" id="performance">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="City background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-orange-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Track Record of Performance
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Consistent returns across market cycles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              metric: "Average IRR",
              value: "18.4%",
              description: "Across 12 completed deals",
            },
            {
              metric: "Cash-on-Cash",
              value: "8.2%",
              description: "Average annual distribution",
            },
            {
              metric: "Equity Multiple",
              value: "2.1x",
              description: "Total return on invested capital",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: "easeInOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/20 hover:border-orange-400/50 transition-all"
            >
              <div className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">
                {stat.metric}
              </div>
              <div className="text-6xl font-bold text-white mb-4">
                {stat.value}
              </div>
              <div className="text-blue-200">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">
            Past performance is not indicative of future results. All
            investments involve risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Performance;
