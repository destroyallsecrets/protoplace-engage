
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import TransitionWrapper from "./TransitionWrapper";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  iconClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  className,
  iconClassName,
}) => {
  return (
    <TransitionWrapper
      animation="slide-up"
      delay={delay}
      className={cn("group relative", className)}
    >
      <div className="h-full glass rounded-xl p-6 transition-all duration-300 hover:shadow-md">
        <div className={cn(
          "w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 transition-all group-hover:bg-primary group-hover:text-white",
          iconClassName
        )}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </TransitionWrapper>
  );
};

export default FeatureCard;
