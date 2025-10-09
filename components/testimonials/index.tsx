import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/outline";
import { InfiniteMovingCardsDemo } from "./infinite-moving-testimonials";

const testimonials = [
  {
    name: "Christopher Martinez",
    role: "",
    image: "",
    content:
      "Working with this investment company has been a game-changer for me. They have a deep understanding of the commercial real estate market and have helped me identify and invest in high-quality properties that have generated significant returns.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "",
    image: "",
    content:
      "I have invested with the managing partners for several years now, and they continue to impress me with their exceptional service, attention to detail, and investment performance. They have helped me achieve my financial goals and build a secure financial future for myself and my family.",
    rating: 5,
  },
  {
    name: "Daniel Edwards",
    role: "",
    image: "",
    content:
      "Crowdvest truly exceeded my expectations. They have an outstanding team of professionals who are knowledgeable, experienced, and genuinely care about their clients' success. I highly recommend them to anyone interested in commercial real estate investing.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "",
    image: "",
    content:
      "I like that they focus on stable, income-producing centers rather than risky projects. The reporting is transparent and I always know how my investment is performing.",
    rating: 5,
  },
  {
    name: "Alicia Rodriguez",
    role: "",
    image: "",
    content:
      "I’ve been in several real estate deals, but what stood out here is that the team actually invests alongside us. The communication and quarterly updates have been reliable every time.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Investors
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied investors building wealth with CrowdVest
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: "easeInOut",
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image ?? ""}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
}

export default Testimonials;
