
import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    slug: "local-seo-best-practices-2023",
    title: "Local SEO Best Practices for 2023",
    excerpt: "Learn the most effective strategies to boost your local SEO performance in the Middle East market.",
    date: "October 15, 2023",
    author: "Ahmed Al-Mansoori",
    category: "SEO Strategies",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    slug: "google-business-profile-optimization",
    title: "How to Optimize Your Google Business Profile",
    excerpt: "A comprehensive guide to optimizing your Google Business Profile for maximum visibility in local search results.",
    date: "September 23, 2023",
    author: "Sarah Johnson",
    category: "Google Business",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    slug: "local-content-marketing-strategies",
    title: "Local Content Marketing Strategies That Drive Traffic",
    excerpt: "Discover how to create location-specific content that resonates with your local audience and drives traffic.",
    date: "August 18, 2023",
    author: "Mohammed Al-Qasimi",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    slug: "mobile-first-optimization-tips",
    title: "Mobile-First Optimization Tips for Local Businesses",
    excerpt: "Learn how to optimize your website for mobile users to improve local search rankings and user experience.",
    date: "July 30, 2023",
    author: "Layla Mahmoud",
    category: "Mobile SEO",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    slug: "review-management-guide",
    title: "The Complete Guide to Review Management",
    excerpt: "Master the art of managing online reviews to build trust and improve your local search rankings.",
    date: "June 12, 2023",
    author: "Dr. Faisal Al-Zaabi",
    category: "Online Reputation",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    slug: "local-seo-analytics-tools",
    title: "Top 10 Local SEO Analytics Tools for Middle East Businesses",
    excerpt: "Discover the best analytics tools to track and measure your local SEO performance in the Middle East market.",
    date: "May 27, 2023",
    author: "Tariq Al-Obeidi",
    category: "SEO Tools",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
  }
];

const BlogList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <Link to={`/blog/${post.slug}`}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-citivise-50 text-citivise-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-citivise-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link to={`/blog/${post.slug}`} className="text-citivise-600 font-medium hover:text-citivise-700 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default BlogList;
