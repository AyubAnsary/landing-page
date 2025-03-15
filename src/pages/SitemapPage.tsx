
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

// This would be dynamically generated in a real implementation
const sitemapData = {
  mainPages: [
    { title: "Home", url: "/" },
    { title: "Services", url: "/services" },
    { title: "Our Work", url: "/work" },
    { title: "Blog", url: "/blog" },
    { title: "About Us", url: "/about" },
    { title: "Careers", url: "/careers" },
    { title: "Contact Us", url: "/#contact" }
  ],
  services: [
    { title: "Google Business Profile Optimization", url: "/services/google-business-profile-optimization" },
    { title: "Local SEO Strategy", url: "/services/local-seo-strategy" },
    { title: "Reputation Management", url: "/services/reputation-management" },
    { title: "Local Content Marketing", url: "/services/local-content-marketing" },
    { title: "Citation Building", url: "/services/citation-building" },
    { title: "Local SEO Analytics", url: "/services/local-seo-analytics" }
  ],
  caseStudies: [
    { title: "Dubai Restaurant Chain Local SEO", url: "/work/dubai-restaurant-chain-local-seo" },
    { title: "Riyadh Retail Store Local Visibility", url: "/work/riyadh-retail-store-local-visibility" },
    { title: "Abu Dhabi Healthcare Provider Local SEO", url: "/work/abu-dhabi-healthcare-provider-local-seo" },
    { title: "Doha Real Estate Firm Lead Generation", url: "/work/doha-real-estate-firm-lead-generation" },
    { title: "Manama Automotive Dealership Local SEO", url: "/work/manama-automotive-dealership-local-seo" },
    { title: "Muscat Hospitality Group Review Management", url: "/work/muscat-hospitality-group-review-management" }
  ],
  blogPosts: [
    { title: "Local SEO Best Practices for 2023", url: "/blog/local-seo-best-practices-2023" },
    { title: "How to Optimize Your Google Business Profile", url: "/blog/google-business-profile-optimization" },
    { title: "Local Content Marketing Strategies That Drive Traffic", url: "/blog/local-content-marketing-strategies" },
    { title: "Mobile-First Optimization Tips for Local Businesses", url: "/blog/mobile-first-optimization-tips" },
    { title: "The Complete Guide to Review Management", url: "/blog/review-management-guide" },
    { title: "Top 10 Local SEO Analytics Tools for Middle East Businesses", url: "/blog/local-seo-analytics-tools" }
  ],
  legalPages: [
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Terms & Conditions", url: "/terms" },
    { title: "Refund & Cancellation Policy", url: "/refund-policy" },
    { title: "Disclaimer", url: "/disclaimer" },
    { title: "Cookie Policy", url: "/cookie-policy" }
  ]
};

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sitemap | Citivise</title>
        <meta name="description" content="Explore the complete sitemap of Citivise website, your guide to all our pages and content." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/sitemap" />
      </Helmet>
      
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container mx-auto px-6">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sitemap</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold mb-12">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-citivise-700">Main Pages</h2>
              <ul className="space-y-2">
                {sitemapData.mainPages.map((page, index) => (
                  <li key={index}>
                    <Link to={page.url} className="hover:text-citivise-600 transition-colors">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-citivise-700">Services</h2>
              <ul className="space-y-2">
                {sitemapData.services.map((page, index) => (
                  <li key={index}>
                    <Link to={page.url} className="hover:text-citivise-600 transition-colors">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-citivise-700">Legal Pages</h2>
              <ul className="space-y-2">
                {sitemapData.legalPages.map((page, index) => (
                  <li key={index}>
                    <Link to={page.url} className="hover:text-citivise-600 transition-colors">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4 text-citivise-700">Blog Posts</h2>
              <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                {sitemapData.blogPosts.map((page, index) => (
                  <li key={index}>
                    <Link to={page.url} className="hover:text-citivise-600 transition-colors">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-citivise-700">Case Studies</h2>
              <ul className="space-y-2">
                {sitemapData.caseStudies.map((page, index) => (
                  <li key={index}>
                    <Link to={page.url} className="hover:text-citivise-600 transition-colors">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
