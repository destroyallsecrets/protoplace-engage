
import React, { useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "slide-up" | "slide-down" | "scale-in" | "blur-in";

interface TransitionWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!entry.isIntersecting && !once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentElement = document.getElementById(`transition-${Date.now()}-${Math.random()}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once, hasAnimated]);

  return (
    <div
      id={`transition-${Date.now()}-${Math.random()}`}
      className={cn(
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
