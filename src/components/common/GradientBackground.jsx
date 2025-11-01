import React from "react";
import { cn } from "@/lib/utils";

export const GradientBackground = ({
  children,
  className = "",
  variant = "default", // supports multiple color themes
}) => {
  const variants = {
    default: "bg-gradient-to-br from-amber-50 via-pink-50 to-indigo-50",
    blue: "bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50",
    green: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-screen overflow-hidden",
        variants[variant],
        className
      )}
    >
      {/* ✨ Soft glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 -z-10" />

      {children}
    </section>
  );
};
