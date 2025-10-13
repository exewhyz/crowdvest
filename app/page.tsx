"use client";

import Performance from "@/components/performance";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";
import Why from "@/components/why";
import Stats from "@/components/stats";
import Overview from "@/components/overview";
import Hero from "@/components/hero";
import ProgressBar from "@/components/progress-bar";
import FAQs from "@/components/faqs";
import ContactWithDisclaimer from "@/components/contact";
import CardFlip from "@/components/gallery/flip-card";

const FrontierPlaza = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Progress Bar */}
      <ProgressBar />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <Hero />

      {/* Stats Bar with Background */}
      <Stats />

      {/* Investment Opportunity Section */}
      <Overview />

      {/* Why Invest Section with Background Image */}
      <Why />

      {/* Property Gallery - Enhanced Bento Grid */}
      <Gallery />

      {/* Testimonials with Photos */}
      <Testimonials />

      {/* Performance Section */}
      <Performance />

      {/* FAQs Section */}
      <FAQs />

      {/* Contact Section */}
      <ContactWithDisclaimer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FrontierPlaza;
