
import React from "react";
import { Calendar, User, Tag } from "lucide-react";

interface BlogDetailProps {
  slug?: string;
}

// Mock blog post data
const blogPost = {
  id: 1,
  slug: "local-seo-best-practices-2023",
  title: "Local SEO Best Practices for 2023",
  content: `
    <p class="mb-4">In today's competitive digital landscape, local SEO has become increasingly important for businesses in the Middle East. With more consumers turning to online searches to find local products and services, optimizing your online presence for local search has never been more crucial.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">1. Optimize Your Google Business Profile</h2>
    <p class="mb-4">Your Google Business Profile is the cornerstone of your local SEO strategy. Ensure that your business information is accurate and complete, including your business name, address, phone number, website URL, business hours, and categories.</p>
    <p class="mb-4">Regularly update your profile with fresh content, such as posts, photos, and special offers. Encourage customers to leave reviews and respond to them promptly to build credibility and improve your local rankings.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">2. Focus on Local Keywords</h2>
    <p class="mb-4">Identify and target keywords that are relevant to your business and location. Include city names, neighborhoods, and regional terms in your website content, meta descriptions, and title tags.</p>
    <p class="mb-4">Use tools like Google Keyword Planner, SEMrush, or Ahrefs to research local keywords and phrases that potential customers are using to find businesses like yours.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">3. Create Location-Specific Content</h2>
    <p class="mb-4">Develop high-quality, location-specific content that provides value to your local audience. This could include blog posts about local events, community initiatives, or industry trends specific to your region.</p>
    <p class="mb-4">Create separate location pages for each area you serve, with unique content that highlights your services and connection to that specific location.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">4. Build Local Backlinks</h2>
    <p class="mb-4">Establish relationships with other local businesses, community organizations, and industry associations to build relevant local backlinks. Consider sponsoring local events, joining chambers of commerce, or participating in community initiatives to increase your local visibility and earn valuable backlinks.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">5. Mobile Optimization</h2>
    <p class="mb-4">With the majority of local searches happening on mobile devices, ensuring that your website is mobile-friendly is essential. Optimize your site for mobile users by implementing responsive design, improving page load speed, and making it easy for users to contact you or find directions to your location.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">6. Monitor and Manage Online Reviews</h2>
    <p class="mb-4">Online reviews play a significant role in local search rankings and consumer decision-making. Implement a strategy to encourage satisfied customers to leave positive reviews on platforms like Google, Yelp, and industry-specific review sites.</p>
    <p class="mb-4">Respond to all reviews, both positive and negative, in a professional and constructive manner. This demonstrates your commitment to customer satisfaction and can help mitigate the impact of negative reviews.</p>
    
    <h2 class="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
    <p class="mb-4">By implementing these local SEO best practices, businesses in the Middle East can improve their visibility in local search results, attract more qualified leads, and ultimately drive more conversions. Remember that local SEO is an ongoing process that requires consistent effort and adaptation to changing algorithms and consumer behaviors.</p>
  `,
  date: "October 15, 2023",
  author: "Ahmed Al-Mansoori",
  category: "SEO Strategies",
  image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  tags: ["Local SEO", "Google Business", "Middle East", "Digital Marketing", "SEO Strategy"]
};

const BlogDetail: React.FC<BlogDetailProps> = ({ slug }) => {
  // In a real application, you would fetch the blog post data based on the slug
  console.log("Blog post slug:", slug);
  
  return (
    <article className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src={blogPost.image} 
          alt={blogPost.title} 
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <div className="flex flex-wrap items-center mb-6 text-sm text-gray-500 gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {blogPost.date}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            By {blogPost.author}
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            {blogPost.category}
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>
        
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
        
        <div className="flex flex-wrap gap-2 mt-8">
          {blogPost.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="p-2 bg-blue-500 text-white rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 bg-blue-400 text-white rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-2 bg-green-500 text-white rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M18.885 7.773A1.763 1.763 0 0017.122 6H6.878A1.763 1.763 0 005.115 7.773L12 14.658l6.885-6.885z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M2.879 7.121A1.762 1.762 0 002 8.5v7c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 15.5v-7c0-.547-.243-1.028-.621-1.379L12 16.5 2.879 7.121z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
