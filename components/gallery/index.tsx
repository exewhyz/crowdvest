import React from "react";
import { motion } from "framer-motion";
import CardFlip from "./flip-card";
import { items } from "../bento"; // Import items from bento.tsx

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

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={item.className}
            >
              <CardFlip
                title={item.title}
                description={item.description}
                img={item.img}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
