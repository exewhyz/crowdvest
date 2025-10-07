import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
const portfolio = [
  {
    name: "Sunset Plaza",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1555529902-5261145633bf?w=600&q=80",
    status: "Fully Funded",
    irr: "19.2%",
  },
  {
    name: "Metro Center",
    location: "Dallas, TX",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
    status: "Exited 2024",
    irr: "17.8%",
  },
  {
    name: "Gateway Commons",
    location: "Houston, TX",
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80",
    status: "Performing",
    irr: "16.5%",
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track record of successful investments delivering strong returns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  {property.name}
                </h3>
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-600">Actual IRR</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    {property.irr}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
