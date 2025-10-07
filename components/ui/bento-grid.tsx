"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // We'll remove the auto-rows to allow items to have their own height
        "grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  tag,
  transition,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  tag?: string;
  transition?: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={transition}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-xl",
        className
      )}
    >
      {/* Background Image */}
      {img && (
        <img
          src={img}
          alt={typeof title === "string" ? title : "bento-grid-image"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">{title}</h3>
        <pre className="text-neutral-200 text-sm">{description}</pre>
      </div>

      {/* Tag */}
      {tag && (
        <div className="absolute top-6 right-6 px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {tag}
        </div>
      )}
    </motion.div>
  );
};