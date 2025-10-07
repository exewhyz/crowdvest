import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";

function Overview() {
  return (
    <section id="overview" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            The Investment{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Opportunity
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A detailed look at the strategic advantages and financial structure
            of the Frontier Plaza offering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Property Overview
              </h3>
              <p className="text-lg text-slate-500">
                A closer look at the asset and its strategic position.
              </p>
            </div>

            <div className="text-slate-700 leading-relaxed text-lg space-y-4 border-t border-slate-200 pt-6">
              <p>
                This investment features a{" "}
                <strong>±52,000-square-foot Giant Eagle–anchored</strong>{" "}
                shopping center in Marietta, Ohio. Strategically located at 128
                Gross Street near major highways, it benefits from strong
                regional demand drivers.
              </p>
              <p>
                Are you currently in a 1031 exchange or possibly looking to
                invest using your IRA? Our properties are fully structured to
                accommodate both — including 1031-qualified entities and
                self-directed IRA investments, making the process simple and
                compliant from start to finish.
              </p>
            </div>

            {/* Key Value Drivers */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-xl text-slate-800 mb-4">
                Key Value Drivers
              </h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    The property is uniquely structured with{" "}
                    <strong>four separate retail strip buildings</strong>,
                    allowing for multiple, flexible exit strategies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    The high-performing anchor has a rare{" "}
                    <strong>profit-sharing lease</strong>, signaling strong
                    commitment and providing additional revenue potential.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    A major tenant has offered to purchase their space for{" "}
                    <strong>$2.5 million</strong>, validating strong buyer
                    demand and the property's market value.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Offering Highlights
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <span className="text-slate-700">
                  <strong>
                    Giant Eagle anchor with rare profit-sharing lease,
                  </strong>{" "}
                  adding revenue and ensuring long-term stability.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <span className="text-slate-700">
                  <strong>Four strip buildings on separate parcels</strong>{" "}
                  allow flexible exit and reduced investment risk.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <span className="text-slate-700">
                  <strong>Plan to convert tenants to NNN at renewal,</strong>{" "}
                  shifting expenses and protecting cash flow.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
