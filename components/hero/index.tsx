import React, { Suspense } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  Building2,
  TrendingUp,
  ExternalLink,
  MapPin,
  Calendar,
  Play,
} from "lucide-react";
import DrivePlayer from "../drive-player";
import Badge from "../badge";
import { cn } from "@/lib/utils";

function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);
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
  return (
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
            <Badge>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-orange-200 text-sm font-semibold">
                We make our money on the buy
              </span>
            </Badge>

            <h1 className=" relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Frontier Plaza
              <sup className="text-xs align-super border border-white px-1 sm:px-2 py-1 rounded-full">
                10% Cap
              </sup>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Invest in Frontier Plaza, a 90%+ leased, grocery-anchored shopping
              center in Marietta, Ohio, featuring stable cash flow, multiple
              exit strategies, and significant value-add potential.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={"https://docdro.id/CvxczdZ"} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                >
                  View OM
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href={"https://docdro.id/swoottd"} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2 group"
                >
                  View Rent Roll
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href={"https://docdro.id/s3irzcB"} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                >
                  View Financials
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div> */}

            <div className="grid md:grid-cols-3 gap-2 sm:gap-4 mb-4">
              {[
                {
                  href: "https://docdro.id/CvxczdZ",
                  label: "View OM",
                },
                { href: "https://docdro.id/swoottd", label: "View Rent Roll" },
                { href: "https://docdro.id/s3irzcB", label: "View Financials" },
              ].map((link, idx) => (
                <Link
                  href={link.href}
                  target="_blank"
                  key={idx}
                  className="flex items-center w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full cursor-pointer px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur text-sm sm:text-sm",
                      (idx + 1) % 2 === 0
                        ? "border-white text-white hover:text-blue-600 hover:bg-white/90"
                        : "bg-white/90 text-blue-600 hover:bg-white"
                    )}
                  >
                    {link.label}
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              ))}
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: "26%", label: "Target Investor IRR" },
                { value: "7.39%", label: "Target Cash on Cash" },
                { value: "2.9x", label: "Target Equity Multiple" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-center py-4 px-6 bg-white/10 backdrop-blur rounded-xl border border-white/20"
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
                <Suspense fallback={<p>Loading video...</p>}>
                  {/* <Video /> */}
                  <DrivePlayer
                    videoRef={videoRef as React.RefObject<HTMLVideoElement>}
                    url="https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e523bc2cc26110e87dd833.webm"
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Play/Pause Button */}

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      Virtual Property Tour
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleVideo}
                      animate={{ opacity: isVideoPlaying ? 0.3 : 1 }}
                      className=" w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur group hover:bg-white transition-all"
                    >
                      {isVideoPlaying ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="flex gap-1.5">
                            <div className="w-1 h-4 bg-orange-600 rounded-sm group-hover:bg-orange-700 transition-colors"></div>
                            <div className="w-1 h-4 bg-orange-600 rounded-sm group-hover:bg-orange-700 transition-colors"></div>
                          </div>
                        </div>
                      ) : (
                        <Play
                          className="w-4 h-4 text-orange-600 group-hover:text-orange-700 transition-colors"
                          fill="currentColor"
                        />
                      )}
                    </motion.button>
                    {/* <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur rounded-full">
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
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="p-6 hidden md:block">
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
  );
}

export default Hero;
