"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const NextavestForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.nextavest.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex items-center flex-col justify-center p-10 bg-gradient-to-r from-blue-600 to-orange-600 "
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Investor Interest Form
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Please answer a few quick questions so we can tailor opportunities
          that fit your goals.
        </p>
      </div>
      {/* Glassmorphism effect wrapper for a nice contrast */}
      <div className="w-full md:p-10 max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        <iframe
          src="https://link.nextavest.com/widget/form/yoIqbTCObTLf7dNJL4ol"
          className="w-full h-[803px] border-none rounded-2xl"
          id="inline-yoIqbTCObTLf7dNJL4ol"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 2"
          data-height="803"
          data-layout-iframe-id="inline-yoIqbTCObTLf7dNJL4ol"
          data-form-id="yoIqbTCObTLf7dNJL4ol"
          title="Form 2"
        ></iframe>
      </div>
      <Disclaimer />
    </motion.div>
  );
};

export default NextavestForm;

// Disclaimer Section
export function Disclaimer() {
  return (
    <section className="max-w-3xl mx-auto mt-16 mb-8 px-4 text-center">
      <h3 className="text-sm font-bold mb-2 text-muted text-center">
        Risk Disclosure
      </h3>
      <ul className="list-none pl-6 text-muted space-y-2 text-xs">
        <li>
          All investments involve risk, including potential loss of capital,
          illiquidity, and market fluctuations. Projections are hypothetical and
          not guaranteed. Please review the full Offering Memorandum and consult
          your financial advisor before investing.
        </li>
        <li className="flex items-center w-full justify-center">
          <Link
            href="https://docdro.id/CvxczdZ"
            target="_blank"
            className="underline flex justify-center gap-2 hover:text-blue-200"
          >
            View Full Risk Factors in the OM
            <ExternalLink className="w-4 h-4" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
