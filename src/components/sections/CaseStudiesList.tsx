
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

// Mock case studies data
const caseStudies = [
  {
    id: 1,
    slug: "dubai-restaurant-chain-local-seo",
    title: "How We Increased Local Foot Traffic by 75% for a Dubai Restaurant Chain",
    excerpt: "Learn how our targeted local SEO strategy helped a multi-location restaurant business dramatically increase their walk-in customers.",
    date: "October 2023",
    category: "Restaurant",
    location: "Dubai, UAE",
    results: "75% increase in foot traffic, 120% increase in Google Business Profile views",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    slug: "riyadh-retail-store-local-visibility",
    title: "Boosting Local Search Visibility for a Riyadh Retail Chain",
    excerpt: "Discover how we optimized Google Business Profiles and local content to increase search visibility across multiple retail locations.",
    date: "August 2023",
    category: "Retail",
    location: "Riyadh, KSA",
    results: "142% increase in local search visibility, 95% increase in direction requests",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    slug: "abu-dhabi-healthcare-provider-local-seo",
    title: "Local SEO Success for an Abu Dhabi Healthcare Provider",
    excerpt: "See how our comprehensive local SEO strategy helped a healthcare provider dominate local search results and attract more patients.",
    date: "July 2023",
    category: "Healthcare",
    location: "Abu Dhabi, UAE",
    results: "89% increase in appointment bookings, #1 rankings for 27 local keywords",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    slug: "doha-real-estate-firm-lead-generation",
    title: "Generating 350+ Monthly Leads for a Doha Real Estate Firm",
    excerpt: "Learn how our local SEO and content strategy transformed online visibility and lead generation for this Qatari real estate company.",
    date: "June 2023",
    category: "Real Estate",
    location: "Doha, Qatar",
    results: "350+ monthly leads, 215% increase in organic traffic",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    slug: "manama-automotive-dealership-local-seo",
    title: "Revving Up Business for a Manama Automotive Dealership",
    excerpt: "Discover how our local SEO optimization helped this Bahraini automotive dealership increase test drive appointments by 65%.",
    date: "May 2023",
    category: "Automotive",
    location: "Manama, Bahrain",
    results: "65% increase in test drive appointments, 112% rise in local organic traffic",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    slug: "muscat-hospitality-group-review-management",
    title: "Transforming Online Reputation for a Muscat Hospitality Group",
    excerpt: "See how our review management strategy increased positive reviews by 137% and improved overall star ratings for this hotel chain.",
    date: "April 2023",
    category: "Hospitality",
    location: "Muscat, Oman",
    results: "137% increase in positive reviews, Average rating improved from 3.6 to 4.7 stars",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  }
];

const CaseStudiesList: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article 
              key={study.id} 
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 reveal-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/work/${study.slug}`}>
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-citivise-50 text-citivise-700 px-3 py-1 rounded-full text-xs font-medium">
                    {study.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {study.location}
                  </span>
                  <div className="flex items-center ml-auto">
                    <Calendar className="w-4 h-4 mr-1" />
                    {study.date}
                  </div>
                </div>
                <Link to={`/work/${study.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-citivise-600 transition-colors">{study.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{study.excerpt}</p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <h4 className="text-sm font-medium mb-1">Results</h4>
                  <p className="text-sm text-gray-700">{study.results}</p>
                </div>
                <div className="flex justify-end">
                  <Link to={`/work/${study.slug}`} className="inline-flex items-center text-citivise-600 font-medium hover:text-citivise-700 transition-colors">
                    View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesList;
