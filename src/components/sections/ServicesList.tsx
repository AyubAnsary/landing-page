
import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../ui/FeatureCard";
import { ChevronRight, Search, MapPin, BarChart, Star, LineChart, Users, Award, GlobeIcon } from "lucide-react";

// Mock service data for the list page
const services = [
  {
    id: 1,
    title: "Google Business Profile Optimization",
    slug: "google-business-profile-optimization",
    description: "Maximize your local visibility and attract more customers with our comprehensive Google Business Profile optimization services.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Local SEO Strategy",
    slug: "local-seo-strategy",
    description: "Customized local SEO strategies designed specifically for Middle East businesses to improve rankings and drive relevant traffic.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Reputation Management",
    slug: "reputation-management",
    description: "Build and maintain a positive online reputation with our comprehensive review management and response services.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Local Content Marketing",
    slug: "local-content-marketing",
    description: "Create location-specific content that resonates with your local audience and drives relevant traffic to your business.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Citation Building",
    slug: "citation-building",
    description: "Build consistent business listings across authoritative local directories to improve your local search presence.",
    icon: GlobeIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Local SEO Analytics",
    slug: "local-seo-analytics",
    description: "Track and measure your local SEO performance with comprehensive analytics and reporting tailored to the Middle East market.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  }
];

const ServicesList: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="reveal-animation" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <Link to={`/services/${service.slug}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-citivise-600" />
                    </div>
                    <Link to={`/services/${service.slug}`}>
                      <h3 className="text-xl font-semibold mb-3 hover:text-citivise-600 transition-colors">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-citivise-600 font-medium hover:text-citivise-700 transition-colors"
                    >
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
