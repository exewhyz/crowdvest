"use client";

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  DollarSign,
  Calendar,
  BarChart3,
  Menu,
  X,
  Phone,
  Mail,
  Play,
  Star,
  Award,
  Target,
  Briefcase,
  Home,
  ChevronRight
} from 'lucide-react';

const FrontierPlaza = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Recession-Resistant Asset",
      description: "Groceries are essential — demand stays strong regardless of economic conditions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consistent Foot Traffic",
      description: "Grocery anchors drive daily visits, strengthening surrounding tenant performance"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Passive Monthly Income",
      description: "Long-term NNN leases provide stable, predictable cash flow"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Force Appreciation",
      description: "Increase value through strategic leasing, pad additions, and rent optimization"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tax Advantages",
      description: "Maximize returns through cost segregation and depreciation benefits"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inflation Hedge",
      description: "Rents naturally rise with inflation, protecting your purchasing power"
    }
  ];

  const teamMembers = [
    {
      name: "Michael Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "20+ years in commercial real estate"
    },
    {
      name: "Sarah Chen",
      role: "Investment Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "Former Goldman Sachs analyst"
    },
    {
      name: "David Martinez",
      role: "Asset Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "$500M+ in managed properties"
    },
    {
      name: "Emily Roberts",
      role: "Investor Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Dedicated to investor success"
    }
  ];

  const testimonials = [
    {
      name: "John Thompson",
      role: "Angel Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "CrowdVest has consistently delivered strong returns. Their transparency and communication are exceptional.",
      rating: 5
    },
    {
      name: "Patricia Williams",
      role: "Real Estate Portfolio Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content: "The team's expertise in grocery-anchored properties is unmatched. Great passive income stream.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Tech Executive",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      content: "Professional management and detailed reporting. This is how real estate investing should be done.",
      rating: 5
    }
  ];

  const portfolio = [
    {
      name: "Sunset Plaza",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=600&q=80",
      status: "Fully Funded",
      irr: "19.2%"
    },
    {
      name: "Metro Center",
      location: "Dallas, TX",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
      status: "Exited 2024",
      irr: "17.8%"
    },
    {
      name: "Gateway Commons",
      location: "Houston, TX",
      image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80",
      status: "Performing",
      irr: "16.5%"
    }
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
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">CrowdVest</div>
                <div className="text-xs text-slate-600">Real Estate Investments</div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex gap-8 items-center">
              <a href="#opportunity" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Opportunity</a>
              <a href="#portfolio" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Portfolio</a>
              <a href="#team" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Team</a>
              <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                Invest Now
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
      </motion.nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-orange-900/85" />
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
                <span className="text-orange-200 text-sm font-semibold">Now Accepting Investments</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Frontier Plaza
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Invest in a premier grocery-anchored shopping center offering stable cash flow, 
                tax advantages, and appreciation potential in a recession-resistant asset class.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                >
                  View Investment Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Download Offering
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "15-18%", label: "Target IRR" },
                  { value: "$50K", label: "Min Investment" },
                  { value: "5-7 Yrs", label: "Hold Period" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
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
                  <img 
                    src="https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&q=80" 
                    alt="Property"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur group"
                  >
                    <Play className="w-6 h-6 text-orange-600 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </motion.button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Virtual Property Tour</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Property Type", value: "Retail Center", icon: <Building2 className="w-5 h-5" /> },
                      { label: "Location", value: "Texas", icon: <MapPin className="w-5 h-5" /> },
                      { label: "Target IRR", value: "15-18%", icon: <TrendingUp className="w-5 h-5" /> },
                      { label: "Hold Period", value: "5-7 Years", icon: <Calendar className="w-5 h-5" /> }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-3 bg-slate-50 rounded-lg hover:bg-orange-50 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-orange-600 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                        </div>
                        <div className="text-lg font-bold text-slate-900">{item.value}</div>
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: <Building2 className="w-8 h-8" />, value: "$1.2B+", label: "Assets Under Management" },
              { icon: <Home className="w-8 h-8" />, value: "50+", label: "Properties Acquired" },
              { icon: <Users className="w-8 h-8" />, value: "2,500+", label: "Happy Investors" },
              { icon: <Award className="w-8 h-8" />, value: "18.4%", label: "Average IRR" }
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

      {/* Property Gallery - Enhanced Bento Grid */}
      <section id="opportunity" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Property <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore every aspect of Frontier Plaza - from anchor tenants to modern amenities
            </p>
          </motion.div>

          {/* Large Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=800&q=80" 
                alt="Grocery anchor"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-bold mb-2">Premium Grocery Anchor</h3>
                  <p className="text-blue-100">30,000 sq ft of essential retail</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Anchor Tenant
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" 
                alt="Plaza exterior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-bold mb-2">Modern Retail Plaza</h3>
                  <p className="text-orange-100">85,000 sq ft total leasable space</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=600&q=80", title: "Ample Parking", desc: "500+ spaces" },
              { img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80", title: "Retail Units", desc: "15 tenant spaces" },
              { img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80", title: "Outdoor Areas", desc: "Community space" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80"
            alt="Business background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Grocery-Anchored</span> Shopping Centers?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic investments in essential retail infrastructure that thrives in any economic climate
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
                  <div className="text-orange-400">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Images */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Portfolio</span>
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
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{property.name}</h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-600">Actual IRR</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">{property.irr}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Photos */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your investment success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              What Our <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Investors</span> Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of satisfied investors building wealth with CrowdVest
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
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative py-24 overflow-hidden">
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
              { metric: "Average IRR", value: "18.4%", description: "Across 12 completed deals" },
              { metric: "Cash-on-Cash", value: "8.2%", description: "Average annual distribution" },
              { metric: "Equity Multiple", value: "2.1x", description: "Total return on invested capital" }
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
                <div className="text-slate-300 text-sm font-semibold uppercase tracking-wider mb-4">{stat.metric}</div>
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
              Past performance is not indicative of future results. All investments involve risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Success background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 via-blue-700/95 to-orange-600/95" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Invest in Frontier Plaza?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join sophisticated investors building wealth through recession-resistant retail real estate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Investment
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Get in <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Have questions about this investment opportunity? Our team is here to help.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Call Us</div>
                    <div className="font-semibold text-slate-900">(555) 123-4567</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Email Us</div>
                    <div className="font-semibold text-slate-900">invest@crowdvest.com</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 rounded-3xl p-8 border border-slate-200 shadow-xl"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white" 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white" 
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your investment goals..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">CrowdVest</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Building wealth through strategic real estate investments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Resources</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Legal</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Disclosures</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>© 2025 CrowdVest LLC. All rights reserved.</p>
            <p className="mt-2 text-xs">
              This material does not constitute an offer to sell or solicitation to buy securities. 
              Investing involves risk, including possible loss of principal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontierPlaza;