
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index?: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
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
          }, index * 150);
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
        "glass-card p-6 rounded-2xl opacity-0 translate-y-10 transition-all duration-700 hover-card-animation",
        className
      )}
    >
      <svg
        className="w-8 h-8 text-citivise-400 mb-4 opacity-50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.13456 9H4.40018C4.29507 9 4.2101 9.03869 4.14865 9.10761C4.08719 9.17653 4.05409 9.27321 4.05921 9.37806C4.25135 13.2867 5.96031 14.0001 7.77819 14.0001C8.93127 14.0001 9.8614 13.0699 9.8614 11.917C9.8614 10.764 8.93127 9.83386 7.77819 9.83386C7.16289 9.83386 6.60433 10.089 6.23127 10.5129C5.99409 10.7929 5.87364 11.0908 5.8188 11.2655C5.79819 11.3323 5.78935 11.3692 5.78491 11.3861L5.7826 11.3948C5.75237 11.4865 5.61614 11.5047 5.5675 11.4224C5.56238 11.4138 5.55762 11.4049 5.55322 11.3956C5.52127 11.3323 5.47531 11.2359 5.4308 11.1136C5.33667 10.8551 5.28629 10.5745 5.28629 10.2841C5.28629 8.47254 6.75545 7.00003 8.56701 7.00003H9.13456C9.28076 7.00003 9.40019 7.11946 9.40019 7.26566V8.73435C9.40019 8.88055 9.28076 8.99998 9.13456 8.99998V9Z"
          fill="currentColor"
        />
        <path
          d="M19.5996 9H14.8652C14.7601 9 14.6751 9.03869 14.6137 9.10761C14.5522 9.17653 14.5191 9.27321 14.5242 9.37806C14.7164 13.2867 16.4254 14.0001 18.2432 14.0001C19.3963 14.0001 20.3264 13.0699 20.3264 11.917C20.3264 10.764 19.3963 9.83386 18.2432 9.83386C17.6279 9.83386 17.0694 10.089 16.6963 10.5129C16.4591 10.7929 16.3387 11.0908 16.2838 11.2655C16.2632 11.3323 16.2544 11.3692 16.2499 11.3861L16.2476 11.3948C16.2174 11.4865 16.0812 11.5047 16.0325 11.4224C16.0274 11.4138 16.0227 11.4049 16.0183 11.3956C15.9863 11.3323 15.9403 11.2359 15.8958 11.1136C15.8017 10.8551 15.7513 10.5745 15.7513 10.2841C15.7513 8.47254 17.2205 7.00003 19.032 7.00003H19.5996C19.7458 7.00003 19.8652 7.11946 19.8652 7.26566V8.73435C19.8652 8.88055 19.7458 8.99998 19.5996 8.99998V9Z"
          fill="currentColor"
        />
      </svg>
      <p className="text-muted-foreground mb-4">{quote}</p>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
