
import React from "react";
import { LineChart, Users, BarChart3, TrendingUp, Calendar, MapPin, Building } from "lucide-react";

interface CaseStudyDetailProps {
  slug?: string;
}

// Mock case study data
const caseStudyData = {
  "dubai-restaurant-chain-local-seo": {
    title: "How We Increased Local Foot Traffic by 75% for a Dubai Restaurant Chain",
    subtitle: "A Comprehensive Local SEO Strategy for a Multi-Location Restaurant Business",
    client: "Al Manaar Restaurant Group",
    location: "Dubai, UAE",
    industry: "Restaurant",
    date: "October 2023",
    duration: "6 months",
    heroImage: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    challenge: `
      <p>Al Manaar Restaurant Group, a fast-growing chain with 5 locations across Dubai, was struggling to attract local customers despite offering exceptional Mediterranean cuisine. Despite having a loyal customer base, they were failing to attract new customers through local search.</p>
      
      <p>The main challenges included:</p>
      <ul>
        <li>Inconsistent Google Business Profiles with outdated information</li>
        <li>Poor visibility in local search results for relevant keywords</li>
        <li>Limited online reviews and poor response management</li>
        <li>No location-specific content strategy</li>
        <li>High competition in Dubai's saturated restaurant market</li>
      </ul>
    `,
    solution: `
      <p>Our team developed a comprehensive local SEO strategy tailored specifically for the restaurant industry in Dubai:</p>
      
      <h3>1. Google Business Profile Optimization</h3>
      <p>We completely revamped all five Google Business Profiles with accurate and consistent information, high-quality photos, and detailed service descriptions. We implemented a posting schedule with weekly updates including special offers and events.</p>
      
      <h3>2. Local Keyword Strategy</h3>
      <p>We conducted in-depth keyword research focused on location-specific terms and food-related searches in Dubai. We identified high-value, low-competition keywords and implemented them across the website and local profiles.</p>
      
      <h3>3. Review Management System</h3>
      <p>We implemented a proactive review management system, encouraging satisfied customers to leave reviews and establishing a protocol for responding to all reviews within 24 hours. Staff were trained on proper review response techniques.</p>
      
      <h3>4. Location-Specific Content</h3>
      <p>We created individual location pages with unique content highlighting neighborhood-specific information, nearby attractions, and location-specific menu items. We also developed a blog content strategy focused on local food events and community involvement.</p>
      
      <h3>5. Local Link Building</h3>
      <p>We built relationships with local food bloggers, community websites, and neighborhood businesses to generate high-quality backlinks to each location page.</p>
    `,
    results: `
      <p>After six months of implementing our local SEO strategy, Al Manaar Restaurant Group saw remarkable results:</p>
      
      <ul>
        <li><strong>75% increase in foot traffic</strong> across all five locations</li>
        <li><strong>120% increase in Google Business Profile views</strong></li>
        <li><strong>89% increase in direction requests</strong> from Google Maps</li>
        <li><strong>Top 3 rankings for 37 local keywords</strong> across Dubai neighborhoods</li>
        <li><strong>163% increase in positive reviews</strong> (from average 3.2 to 4.7 stars)</li>
        <li><strong>42% increase in website traffic</strong> from local searches</li>
        <li><strong>28% increase in overall revenue</strong></li>
      </ul>
    `,
    testimonial: {
      quote: "The impact of Citivise's local SEO strategy has been transformative for our business. We're now seeing a steady stream of new customers across all our locations, and our online presence has never been stronger. The ROI has far exceeded our expectations.",
      author: "Mohammed Al-Qasimi",
      position: "Marketing Director, Al Manaar Restaurant Group"
    },
    metrics: [
      {
        label: "Increase in Foot Traffic",
        value: "75%",
        icon: Users
      },
      {
        label: "Increase in Online Visibility",
        value: "120%",
        icon: TrendingUp
      },
      {
        label: "Local Keyword Rankings",
        value: "Top 3",
        icon: BarChart3
      },
      {
        label: "Revenue Growth",
        value: "28%",
        icon: LineChart
      }
    ]
  }
};

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ slug = "dubai-restaurant-chain-local-seo" }) => {
  // In a real application, you would fetch the case study data based on the slug
  console.log("Case study slug:", slug);
  
  const caseStudy = caseStudyData["dubai-restaurant-chain-local-seo"];
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src={caseStudy.heroImage} 
          alt={caseStudy.title} 
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{caseStudy.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Building className="w-4 h-4 text-citivise-600 mr-2" />
              <h3 className="text-sm font-medium">Client</h3>
            </div>
            <p className="text-gray-700">{caseStudy.client}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <MapPin className="w-4 h-4 text-citivise-600 mr-2" />
              <h3 className="text-sm font-medium">Location</h3>
            </div>
            <p className="text-gray-700">{caseStudy.location}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 text-citivise-600 mr-2" />
              <h3 className="text-sm font-medium">Duration</h3>
            </div>
            <p className="text-gray-700">{caseStudy.duration}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Building className="w-4 h-4 text-citivise-600 mr-2" />
              <h3 className="text-sm font-medium">Industry</h3>
            </div>
            <p className="text-gray-700">{caseStudy.industry}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-citivise-50 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-citivise-600" />
              </div>
              <h3 className="text-3xl font-bold text-citivise-700 mb-2">{metric.value}</h3>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.results }}
          />
        </div>
        
        <div className="bg-citivise-50 p-8 rounded-2xl mb-12">
          <blockquote className="text-xl italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <p className="font-medium">{caseStudy.testimonial.author}</p>
              <p className="text-gray-600">{caseStudy.testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
