import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { Menu, X, ChevronRight } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <BuildingOffice2Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">
                    CrowdVest
                  </div>
                  <div className="text-xs text-slate-600">
                    Real Estate Investments
                  </div>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex gap-8 items-center">
              <Link
                href="/#why"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Why?
              </Link>
              <Link
                href="/#overview"
                className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
              >
                Overview
              </Link>
              <Link
                href="/#property-overview"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Properties
              </Link>
              <Link
                href="/#testimonials"
                className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
              >
                Testimonials
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                <Link href="/#contact">Invest Now</Link>
              </motion.button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            x: mobileMenuOpen ? 0 : "100%",
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="md:hidden fixed top-[73px] right-0 bottom-0 w-64 bg-white shadow-2xl z-50 overflow-y-auto border-l border-slate-200"
        >
          <div className="px-6 py-8 space-y-4">
            <a
              href="#opportunity"
              className="flex items-center justify-between text-slate-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Opportunity
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="flex items-center justify-between text-slate-700 hover:text-orange-600 transition-colors font-medium py-3 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#team"
              className="flex items-center justify-between text-slate-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-between text-slate-700 hover:text-orange-600 transition-colors font-medium py-3 border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Invest Now
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Overlay to close menu when clicking outside */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            {/* //menu items */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="flex flex-col gap-8 items-center">
                <Link
                  href="/#why"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Why?
                </Link>
                <Link
                  href="/#overview"
                  className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Overview
                </Link>
                <Link
                  href="/#property-overview"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Properties
                </Link>
                <Link
                  href="/#testimonials"
                  className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Testimonials
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
                >
                  <Link href="/#contact">Invest Now</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
