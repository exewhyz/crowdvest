import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function InvestNowButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
    >
      <Link href="/#contact">Invest Now</Link>
    </motion.button>
  );
}

export default InvestNowButton;
