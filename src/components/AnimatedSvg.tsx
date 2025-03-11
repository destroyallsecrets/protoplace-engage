
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedSvgProps {
  className?: string;
}

const AnimatedSvg: React.FC<AnimatedSvgProps> = ({ className }) => {
  return (
    <svg
      className={cn("w-12 h-12", className)}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="animate-float">
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 5"
          className="opacity-40"
        />
        <circle
          cx="30"
          cy="30"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse-slow"
        />
        <circle
          cx="30"
          cy="30"
          r="8"
          fill="currentColor"
          className="animate-pulse-slow"
        />
        <g className="animate-pulse-slow opacity-70">
          <rect x="27" y="5" width="6" height="2" rx="1" fill="currentColor" />
          <rect x="27" y="53" width="6" height="2" rx="1" fill="currentColor" />
          <rect x="5" y="33" width="6" height="2" rx="1" transform="rotate(-90 5 33)" fill="currentColor" />
          <rect x="53" y="33" width="6" height="2" rx="1" transform="rotate(-90 53 33)" fill="currentColor" />
        </g>
      </g>
    </svg>
  );
};

export default AnimatedSvg;
