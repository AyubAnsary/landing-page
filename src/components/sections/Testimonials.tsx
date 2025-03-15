
import React from "react";
import AnimatedText from "../ui/AnimatedText";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Citivise transformed our local presence. Our Google Business Profile visits increased by 210% and we've seen a significant boost in store visits.",
      author: "Ahmed Al-Mansoori",
      role: "Owner",
      company: "Al Mansoori Electronics",
    },
    {
      quote: "The team at Citivise really understands the Middle Eastern market. They helped us optimize our local SEO strategy and the results have been exceptional.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Dubai Wellness Center",
    },
    {
      quote: "We've tried other SEO agencies before, but none delivered the way Citivise has. Our local visibility has improved dramatically.",
      author: "Mohammed Al-Qasimi",
      role: "CEO",
      company: "Al Qasimi Properties",
    },
    {
      quote: "Their approach to local SEO is strategic and effective. We're now ranking #1 for our key local search terms in Abu Dhabi.",
      author: "Layla Mahmoud",
      role: "Digital Manager",
      company: "Taste of Lebanon Restaurant",
    },
    {
      quote: "Remarkable results! Our clinic has seen a 75% increase in new patient inquiries since working with Citivise on our local SEO.",
      author: "Dr. Faisal Al-Zaabi",
      role: "Director",
      company: "Gulf Medical Center",
    },
    {
      quote: "Citivise helped us establish a strong local presence across multiple locations in Saudi Arabia. Highly recommended!",
      author: "Tariq Al-Obeidi",
      role: "Regional Manager",
      company: "Arabian Retail Group",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-citivise-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-citivise-100/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex px-4 py-1 rounded-full bg-citivise-50 text-citivise-700 text-sm font-medium mb-4 opacity-0 animate-fade-down" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Client Success Stories
          </h2>
          <AnimatedText
            text="What Our Clients Say"
            className="section-title"
            delay={200}
            as="h2"
          />
          <AnimatedText
            text="Don't just take our word for it. Here's what businesses across the Middle East are saying about our local SEO services."
            className="section-subtitle"
            delay={300}
            as="p"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <h3 className="text-xl font-semibold mb-4">Ready to boost your local presence?</h3>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-citivise-600 text-white font-medium hover:bg-citivise-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
