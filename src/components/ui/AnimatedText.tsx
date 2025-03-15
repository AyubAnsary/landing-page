
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: React.ElementType;
  animation?: 'fade-up' | 'fade-in' | 'fade-down';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 700,
  once = true,
  as: Component = "div",
  animation = 'fade-up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, delay);
          
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.style.opacity = '0';
          
          if (animation === 'fade-up') {
            element.style.transform = 'translateY(20px)';
          } else if (animation === 'fade-down') {
            element.style.transform = 'translateY(-20px)';
          }
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, once, animation]);
  
  const initialStyles = {
    opacity: 0,
    transform: animation === 'fade-up' 
      ? 'translateY(20px)' 
      : animation === 'fade-down'
        ? 'translateY(-20px)'
        : 'none',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
  };
  
  return (
    <Component
      ref={elementRef}
      className={cn(className)}
      style={initialStyles}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
