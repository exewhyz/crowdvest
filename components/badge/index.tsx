import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Badge({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-400/50 rounded-full mb-6 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Badge;
