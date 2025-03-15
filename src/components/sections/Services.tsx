
import React from "react";
import AnimatedText from "../ui/AnimatedText";
import FeatureCard from "../ui/FeatureCard";
import { MapPin, Search, Smartphone, BarChart, Star, Edit } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Google Business Profile Optimization",
      description: "Optimize your Google Business Profile to improve local rankings and attract more customers.",
      icon: MapPin,
    },
    {
      title: "Local Keyword Research",
      description: "Identify the perfect keywords that local customers use to find businesses like yours.",
      icon: Search,
    },
    {
      title: "Mobile-First Optimization",
      description: "Ensure your website is optimized for mobile devices for better rankings and user experience.",
      icon: Smartphone,
    },
    {
      title: "Local SEO Analytics",
      description: "Track and measure your local search performance with detailed analytics and reporting.",
      icon: BarChart,
    },
    {
      title: "Review Management",
      description: "Build and manage your online reputation through strategic review acquisition and management.",
      icon: Star,
    },
    {
      title: "Local Content Creation",
      description: "Develop engaging, location-specific content that resonates with your local audience.",
      icon: Edit,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-citivise-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-citivise-100/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex px-4 py-1 rounded-full bg-citivise-50 text-citivise-700 text-sm font-medium mb-4 opacity-0 animate-fade-down" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Our Services
          </h2>
          <AnimatedText
            text="Comprehensive Local SEO Solutions"
            className="section-title"
            delay={200}
            as="h2"
          />
          <AnimatedText
            text="We offer a full suite of local SEO services tailored to businesses in the Middle East, helping you connect with customers in your area."
            className="section-subtitle"
            delay={300}
            as="p"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-citivise-600 text-white font-medium hover:bg-citivise-700 transition-colors duration-200 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Get Started with Local SEO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
