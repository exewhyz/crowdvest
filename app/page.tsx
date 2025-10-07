"use client";

import NextavestForm from "@/components/contact";
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

      {/* Contact Section */}
      <NextavestForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FrontierPlaza;
