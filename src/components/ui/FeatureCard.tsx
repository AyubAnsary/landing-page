
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index = 0,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add("opacity-100", "translate-y-0");
            card.classList.remove("opacity-0", "translate-y-10");
          }, index * 100);
          observer.unobserve(card);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 rounded-2xl hover-card-animation opacity-0 translate-y-10 transition-all duration-700",
        className
      )}
    >
      <div className="w-12 h-12 mb-4 bg-citivise-50 rounded-xl flex items-center justify-center text-citivise-600">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
