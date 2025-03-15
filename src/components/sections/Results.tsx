
import React from "react";
import AnimatedText from "../ui/AnimatedText";
import Counter from "../ui/Counter";
import { Check } from "lucide-react";

const Results: React.FC = () => {
  const metrics = [
    { value: 250, label: "Businesses Helped", suffix: "+" },
    { value: 89, label: "Increase in Local Traffic", suffix: "%" },
    { value: 74, label: "More Phone Calls", suffix: "%" },
    { value: 65, label: "Revenue Growth", suffix: "%" },
  ];

  const benefits = [
    "Higher rankings in local search results",
    "Increased visibility in Google Maps",
    "More website visitors from your target area",
    "Better conversion rates from local traffic",
    "Improved return on marketing investment",
    "Competitive edge in your local market",
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-radial from-citivise-50/40 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-citivise-50/30 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex px-4 py-1 rounded-full bg-citivise-50 text-citivise-700 text-sm font-medium mb-4 opacity-0 animate-fade-down" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Real Results
          </h2>
          <AnimatedText
            text="Measurable Impact for Our Clients"
            className="section-title"
            delay={200}
            as="h2"
          />
          <AnimatedText
            text="Our local SEO strategies deliver tangible results that directly impact your business growth."
            className="section-subtitle"
            delay={300}
            as="p"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center glass-card p-6 rounded-2xl opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Counter
                end={metric.value}
                suffix={metric.suffix}
                className="text-3xl md:text-4xl lg:text-5xl text-citivise-600 mb-2"
              />
              <p className="text-muted-foreground text-center">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText
              text="How Our Local SEO Services Benefit Your Business"
              className="text-2xl md:text-3xl font-display font-bold mb-6 tracking-tight"
              delay={400}
              as="h3"
            />
            
            <AnimatedText
              text="Our local SEO strategies are designed to help businesses in the Middle East connect with customers in their specific geographic area, driving more targeted traffic and increasing conversions."
              className="text-muted-foreground mb-8"
              delay={500}
              as="p"
            />
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start opacity-0 animate-fade-up"
                  style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="w-6 h-6 rounded-full bg-citivise-50 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-citivise-600" />
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover-card-animation">
              <h3 className="text-xl font-semibold mb-4">Case Study: Dubai Restaurant Chain</h3>
              <p className="text-muted-foreground mb-6">
                A popular restaurant chain in Dubai approached us with the challenge of increasing foot traffic to their 5 locations.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Google Map Views</span>
                  <span className="text-sm font-medium">+187%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full">
                  <div className="bg-citivise-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Click-to-Call Actions</span>
                  <span className="text-sm font-medium">+93%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full">
                  <div className="bg-citivise-500 h-2 rounded-full" style={{ width: "93%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">In-Store Visits</span>
                  <span className="text-sm font-medium">+64%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full">
                  <div className="bg-citivise-500 h-2 rounded-full" style={{ width: "64%" }}></div>
                </div>
              </div>
              
              <a href="#" className="text-citivise-600 font-medium hover:text-citivise-700 transition-colors duration-200 inline-flex items-center">
                Read Full Case Study
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-citivise-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-citivise-50 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
