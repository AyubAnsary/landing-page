
import React from "react";
import FeatureCard from "../ui/FeatureCard";
import { Check, MapPin, BarChart, Star } from "lucide-react";

interface ServiceDetailProps {
  slug?: string;
}

// Mock service data
const serviceData = {
  "google-business-profile-optimization": {
    title: "Google Business Profile Optimization",
    description: "Maximize your local visibility and attract more customers with our comprehensive Google Business Profile optimization services.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="mb-4">Your Google Business Profile is often the first impression potential customers have of your business in local search results. Our optimization service ensures that your profile stands out from the competition and drives more local customers to your business.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
      <p class="mb-4">Our Google Business Profile optimization service includes a comprehensive review and enhancement of your profile to improve your local search visibility and attract more customers.</p>
    `,
    features: [
      "Complete profile setup with accurate business information",
      "Strategic keyword optimization for local search visibility",
      "High-quality photo and video content to showcase your business",
      "Regular posting schedule to keep your profile active and engaging",
      "Review management and response strategy",
      "Competitor analysis and benchmarking",
      "Monthly performance reports and insights"
    ],
    benefits: [
      {
        title: "Increased Local Visibility",
        description: "Improve your rankings in local search results and Google Maps to reach more potential customers in your area.",
        icon: MapPin
      },
      {
        title: "Improved Performance Metrics",
        description: "Track and analyze key performance metrics to continuously optimize your local presence and drive better results.",
        icon: BarChart
      },
      {
        title: "Enhanced Reputation",
        description: "Build trust and credibility with potential customers through a well-managed online reputation and review strategy.",
        icon: Star
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "$499",
        duration: "per month",
        features: [
          "Initial profile optimization",
          "Monthly content updates",
          "Basic review management",
          "Quarterly performance reports"
        ]
      },
      {
        name: "Professional",
        price: "$899",
        duration: "per month",
        features: [
          "Comprehensive profile optimization",
          "Weekly content updates",
          "Proactive review management",
          "Monthly performance reports",
          "Competitor analysis",
          "Local citation building"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$1,499",
        duration: "per month",
        features: [
          "Advanced profile optimization",
          "Custom content strategy",
          "Premium review management",
          "Weekly performance reports",
          "Advanced competitor analysis",
          "Comprehensive local citation building",
          "Dedicated account manager"
        ]
      }
    ]
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug = "google-business-profile-optimization" }) => {
  // In a real application, you would fetch the service data based on the slug
  console.log("Service slug:", slug);
  
  const service = serviceData["google-business-profile-optimization"];
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{service.description}</p>
        
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold mb-6">Key Features</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-citivise-600 mr-3 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {service.benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold mb-6">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {service.pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-6 ${plan.popular ? 'bg-citivise-50 border-2 border-citivise-200 relative' : 'bg-white border border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-citivise-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.duration}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-citivise-600 mr-2 mt-1" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`block text-center py-2 px-4 rounded-lg font-medium ${plan.popular ? 'bg-citivise-600 text-white hover:bg-citivise-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors duration-200`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
