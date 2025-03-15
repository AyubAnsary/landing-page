
import React, { useEffect, useRef } from "react";
import AnimatedText from "../ui/AnimatedText";
import { cn } from "@/lib/utils";
import { MapPin, TrendingUp, Landmark, Globe } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current || !heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      // Calculate relative position
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Limit the movement to a smaller range for subtle effect
      const moveX = 40 * (x - 0.5);
      const moveY = 40 * (y - 0.5);
      
      orbRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    const hero = heroRef.current;
    
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (hero) {
        hero.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={orbRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-citivise-50/50 to-transparent blur-3xl opacity-60 transition-transform duration-300 ease-out"
        ></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>

      <div className="container px-6 mx-auto z-10 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-citivise-50 text-citivise-700 text-sm font-medium mb-6 animate-fade-down opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <TrendingUp className="w-4 h-4 mr-1" />
            Leading Local SEO Agency in the Middle East
          </div>
          
          <AnimatedText
            text="Dominate Local Search Results in the Middle East"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight"
            delay={400}
            as="h1"
          />
          
          <AnimatedText
            text="We help businesses optimize their online presence to attract more local customers, increase foot traffic, and grow revenue."
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
            delay={600}
            as="p"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-citivise-600 text-white font-medium hover:bg-citivise-700 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full opacity-0 animate-fade-up" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-citivise-600" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Local Maps</span>
                Optimization
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mb-3">
                <Landmark className="w-5 h-5 text-citivise-600" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Business</span>
                Citations
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5 text-citivise-600" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Local</span>
                Content
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-citivise-600" />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground block mb-1">Performance</span>
                Tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
