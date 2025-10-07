"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  MapPin,
  DollarSign,
  Calendar,
  Menu,
  X,
  Play,
  Star,
  Award,
  Home,
  ChevronRight,
} from "lucide-react";
import DrivePlayer from "@/components/drive-player";
import { BentoGridSecondDemo } from "@/components/bento";
// import Portfolio from "@/components/portfolio";
import {
  ShieldCheckIcon,
  UsersIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ScaleIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/24/outline";
import NextavestForm from "@/components/contact";
import Link from "next/link";
import Portfolio from "@/components/portfolio";

const FrontierPlaza = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const benefits = [
    {
      title: "Recession-Resistant Demand",
      description:
        "Groceries are a fundamental need, ensuring a consistent customer base and stable demand for your center, regardless of economic ups and downs.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
    },
    {
      title: "Consistent Foot Traffic",
      description:
        "The anchor grocery store acts as a magnet, drawing in a steady stream of daily visitors who then shop at surrounding retail and service tenants.",
      icon: <UsersIcon className="w-8 h-8" />,
    },
    {
      title: "Reliable Passive Income",
      description:
        "Secure long-term leases with creditworthy tenants provide dependable, passive monthly cash flow for predictable and secure returns.",
      icon: <CircleStackIcon className="w-8 h-8" />,
    },
    {
      title: "Value-Add Potential",
      description:
        "Actively increase the property's value by leasing up vacant units, developing outparcels (pad sites), and strategically adjusting rents.",
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
    },
    {
      title: "Natural Inflation Hedge",
      description:
        "Leases are structured to include rent escalations, ensuring your income keeps pace with inflation and protects your investment's value.",
      icon: <BanknotesIcon className="w-8 h-8" />,
    },
    {
      title: "Significant Tax Advantages",
      description:
        "Leverage powerful strategies like cost segregation and accelerated depreciation to reduce your tax burden and improve net returns.",
      icon: <ScaleIcon className="w-8 h-8" />,
    },
    {
      title: "Scalable & Diversified",
      description:
        "A single asset provides multiple income streams from a diverse tenant mix, simplifying portfolio growth and risk management.",
      icon: <BuildingOffice2Icon className="w-8 h-8" />,
    },
    {
      title: "Streamlined Management",
      description:
        "With Triple-Net (NNN) leases, tenants cover most operational expenses, minimizing landlord obligations and simplifying property oversight.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

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
                  <Building2 className="w-6 h-6 text-white" />
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

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e3f12cccdd184f930234c5.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-orange-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-orange-200 text-sm font-semibold">
                  We make our money on the buy
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Frontier Plaza
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Invest in Frontier Plaza, a 90%+ leased, grocery-anchored
                shopping center in Marietta, Ohio, featuring stable cash flow,
                multiple exit strategies, and significant value-add potential.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/new/#property-overview">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                  >
                    View Properties
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  <Link
                    href={
                      "https://crowdvestllc.docdroid.com/CvxczdZ/frontier-plaza-om-pdf"
                    }
                    target="_blank"
                  >
                    Download Brochure
                  </Link>
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { value: "26%", label: "Target Investor IRR" },
                  { value: "7.39%", label: "Target Cash on Cash" },
                  { value: "2.9X", label: "Target Equity Multiple" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Property Card with Video */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="relative aspect-video bg-slate-900">
                  {/* <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="https://drive.google.com/file/d/1j2iM3QWA3GtEwcIgfLxEzu_EuiqApY18/preview"
                      type="video/mp4"
                    />
                  </video> */}
                  {/* <DrivePlayer
                    url="https://drive.google.com/file/d/1j2iM3QWA3GtEwcIgfLxEzu_EuiqApY18/preview"
                    width="100%"
                    height="480px"
                  /> */}
                  {/* <iframe
                    src="https://drive.google.com/file/d/1j2iM3QWA3GtEwcIgfLxEzu_EuiqApY18/preview"
                    className="w-full h-full object-cover"
                  ></iframe> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /> */}

                  {/* Play/Pause Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleVideo}
                    animate={{ opacity: isVideoPlaying ? 0.3 : 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur group hover:bg-white transition-all"
                  >
                    {isVideoPlaying ? (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-6 bg-orange-600 rounded-sm group-hover:bg-orange-700 transition-colors"></div>
                          <div className="w-1.5 h-6 bg-orange-600 rounded-sm group-hover:bg-orange-700 transition-colors"></div>
                        </div>
                      </div>
                    ) : (
                      <Play
                        className="w-6 h-6 text-orange-600 ml-1 group-hover:text-orange-700 transition-colors"
                        fill="currentColor"
                      />
                    )}
                  </motion.button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        Virtual Property Tour
                      </h3>
                      <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur rounded-full">
                        {isVideoPlaying ? (
                          <>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-semibold">
                              LIVE
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-white text-xs font-semibold">
                              PAUSED
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        label: "Property Type",
                        value: "Retail Center",
                        icon: <Building2 className="w-5 h-5" />,
                      },
                      {
                        label: "Location",
                        value: "Marietta, Ohio",
                        icon: <MapPin className="w-5 h-5" />,
                      },
                      {
                        label: "Target IRR",
                        value: "26%",
                        icon: <TrendingUp className="w-5 h-5" />,
                      },
                      {
                        label: "Hold Period",
                        value: "5-7 Years",
                        icon: <Calendar className="w-5 h-5" />,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-3 bg-slate-50 rounded-lg hover:bg-orange-50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-orange-600 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <span className="text-xs text-slate-600 font-medium">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar with Background */}
      <section className="relative py-16 overflow-hidden" id="stats">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center text-white">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                value: "$1,000",
                label: "Price Per Share",
              },
              {
                icon: <Home className="w-8 h-8" />,
                value: "$5,840,000",
                label: "Target Raise",
              },
              {
                icon: <Users className="w-8 h-8" />,
                value: "$25,000",
                label: "Minimum Investment",
              },
              {
                icon: <Award className="w-8 h-8" />,
                value: "5 Years",
                label: "Investment Period",
              },
              {
                icon: <CalendarDateRangeIcon className="w-8 h-8" />,
                value: "Quarterly",
                label: "Distribution Schedule",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="font-bold text-3xl mb-1">{item.value}</div>
                <div className="text-blue-100 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section with Background Image */}
      <section className="relative py-24 overflow-hidden" id="why">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e4de3f381b706026e0d078.jpeg"
            alt="Business background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Grocery-Anchored
              </span>{" "}
              Shopping Centers?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic investments in essential retail infrastructure that
              thrives in any economic climate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-orange-400">{benefit.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
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
              A detailed look at the strategic advantages and financial
              structure of the Frontier Plaza offering.
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
                  shopping center in Marietta, Ohio. Strategically located at
                  128 Gross Street near major highways, it benefits from strong
                  regional demand drivers.
                </p>
                <p>
                  Currently <strong>over 90% leased</strong> to a robust mix of
                  national and regional tenants—including Giant Eagle, Subway,
                  and Smoker Friendly—the center generates secure and
                  predictable cash flow. This stability is reinforced by
                  primarily <strong>Triple-Net (NNN) lease structures</strong>,
                  which minimize landlord responsibilities.
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

      {/* Property Gallery - Enhanced Bento Grid */}
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

      {/* Testimonials with Photos */}
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
              Join thousands of satisfied investors building wealth with
              CrowdVest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
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
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative py-24 overflow-hidden" id="performance">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="City background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-orange-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Track Record of Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Consistent returns across market cycles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Average IRR",
                value: "18.4%",
                description: "Across 12 completed deals",
              },
              {
                metric: "Cash-on-Cash",
                value: "8.2%",
                description: "Average annual distribution",
              },
              {
                metric: "Equity Multiple",
                value: "2.1x",
                description: "Total return on invested capital",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/20 hover:border-orange-400/50 transition-all"
              >
                <div className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">
                  {stat.metric}
                </div>
                <div className="text-6xl font-bold text-white mb-4">
                  {stat.value}
                </div>
                <div className="text-blue-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-blue-200 max-w-2xl mx-auto">
              Past performance is not indicative of future results. All
              investments involve risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <NextavestForm />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" text-center text-slate-600 text-sm">
            <p>
              © {new Date().getFullYear()} CrowdVest LLC. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              This material does not constitute an offer to sell or solicitation
              to buy securities. Investing involves risk, including possible
              loss of principal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontierPlaza;
