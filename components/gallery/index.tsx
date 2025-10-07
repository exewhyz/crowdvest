import React from "react";
import { motion } from "framer-motion";
import { BentoGridSecondDemo } from "../bento";

function Gallery() {
  return (
    <section id="property-overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Property{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore every aspect of Frontier Plaza - from anchor tenants to
            modern amenities
          </p>
        </motion.div>

        {/* Large Image Grid */}
        <BentoGridSecondDemo />
      </div>
    </section>
  );
}

export default Gallery;
