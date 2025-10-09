import React from "react";
import { motion } from "framer-motion";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  CircleStackIcon,
  LifebuoyIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Recession-Resistant Demand",
    description:
      "Groceries are a fundamental need, ensuring a consistent customer base and stable demand for your center, regardless of economic ups and downs.",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
  },
  {
    title: "Consistent Foot Traffic",
    description:
      "The anchor grocery store acts as a magnet, drawing in a steady stream of daily visitors who then shop at surrounding retail and service tenants.",
    icon: <UsersIcon className="w-8 h-8" />,
  },
  {
    title: "Reliable Passive Income",
    description:
      "Secure long-term leases with creditworthy tenants provide dependable, passive monthly cash flow for predictable and secure returns.",
    icon: <CircleStackIcon className="w-8 h-8" />,
  },
  {
    title: "Value-Add Potential",
    description:
      "Actively increase the property's value by leasing up vacant units, developing outparcels (pad sites), and strategically adjusting rents.",
    icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
  },
  {
    title: "Natural Inflation Hedge",
    description:
      "Leases are structured to include rent escalations, ensuring your income keeps pace with inflation and protects your investment's value.",
    icon: <BanknotesIcon className="w-8 h-8" />,
  },
  {
    title: "Significant Tax Advantages",
    description:
      "Leverage powerful strategies like cost segregation and accelerated depreciation to reduce your tax burden and improve net returns.",
    icon: <ScaleIcon className="w-8 h-8" />,
  },
  {
    title: "Scalable & Diversified",
    description:
      "A single asset provides multiple income streams from a diverse tenant mix, simplifying portfolio growth and risk management.",
    icon: <BuildingOffice2Icon className="w-8 h-8" />,
  },
  {
    title: "Low CapEx. Streamlined Management",
    description:
      "The centers we buy let us collect more income with less upkeep. Most of the heavy lifting roofs, paving, HVAC major CapEx was already completed by the seller years ago. No surprises. No deferred maintenance. No hidden renovation costs.",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
  },
  {
    title: "Essential, Everyday Stability",
    description:
      "Grocery-anchored centers thrive through all market cycles — people always need essentials. This steady demand creates resilient cash flow and long-term stability, even when other sectors slow down.",
    icon: <LifebuoyIcon className="w-8 h-8" />,
  },
];

function Why() {
  return (
    <section className="relative py-24 overflow-hidden" id="why">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e4de3f381b706026e0d078.jpeg"
          alt="Business background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Grocery-Anchored
            </span>{" "}
            Shopping Centers?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic investments in essential retail infrastructure that
            thrives in any economic climate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-50px" }}
              // transition={{
              //   duration: 0.4,
              //   delay: index * 0.1,
              //   ease: "easeOut",
              // }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="will-change-transform bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 hover:border-orange-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 will-change-transform">
                <div className="text-orange-400">{benefit.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
