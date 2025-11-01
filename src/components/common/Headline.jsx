"use client";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { cn } from "@/lib/utils";

export const Headline = ({
  subtitle,
  title,
  align = "center", // "left" | "center" | "right"
  className = "",
  subtitleClass = "",
  titleClass = "",
  type = "slideUp",
  delay = 0,
}) => {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn("flex flex-col gap-2 mb-12", alignments[align], className)}
    >
      {/* Subtitle */}
      {subtitle && (
        <MotionWrapper type={type} delay={delay}>
          <p
            className={cn(
              "uppercase tracking-widest text-sm text-gray-400 font-semibold",
              subtitleClass
            )}
          >
            {subtitle}
          </p>
        </MotionWrapper>
      )}

      {/* Title */}
      {title && (
        <MotionWrapper type={type} delay={delay + 0.1}>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-extrabold text-gray-900",
              titleClass
            )}
          >
            {title}
          </h2>
        </MotionWrapper>
      )}
    </div>
  );
};
