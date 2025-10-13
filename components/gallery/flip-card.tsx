"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Building2,
  DollarSign,
  Users,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import InvestNwowButton from "../invest-now-button";

export interface CardFlipProps {
  title?: string;
  description?: string;
  img?: string;
  className?: string;
}

export default function CardFlip({
  title,
  description,
  img,
  className,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Parse the description string to get individual metrics
  const metrics = description?.split("\n").map((line) => {
    const [key, value] = line.split(":");
    return { key, value };
  });

  return (
    <div
      className="group relative h-[400px] w-full [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(0deg)] [backface-visibility:hidden]",
            "overflow-hidden rounded-2xl",
            "border border-slate-200",
            "shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Property Image */}
          <div className="relative h-full">
            <img src={img} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]",
            "rounded-2xl p-6",
            "bg-white",
            "border border-slate-200",
            "shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>

            <div className="space-y-3">
              {metrics?.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ChevronRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-600">{metric.key}</span>
                    <span className="block text-sm font-semibold text-slate-900">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-200">
            <InvestNwowButton />
          </div>
        </div>
      </div>
    </div>
  );
}
