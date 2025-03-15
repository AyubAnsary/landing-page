
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const startTime = Date.now();
          const countStep = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smoother animation
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const currentCount = Math.min(easedProgress * end, end);
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(countStep);
            } else {
              setHasAnimated(true);
            }
          };
          
          requestAnimationFrame(countStep);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className={cn('font-display font-bold', className)}>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {suffix}
    </div>
  );
};

export default Counter;
