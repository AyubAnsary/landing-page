
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import CaseStudiesList from "@/components/sections/CaseStudiesList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const WorkPage = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('revealed');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Work | Citivise - Case Studies & Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful local SEO case studies and client success stories from across the Middle East." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/work" />
        <meta property="og:title" content="Our Work | Citivise" />
        <meta property="og:description" content="Explore our portfolio of successful local SEO case studies and client success stories from across the Middle East." />
        <meta property="og:url" content="https://citivise.com/work" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Citivise Case Studies",
              "description": "Portfolio of successful local SEO case studies and client success stories",
              "url": "https://citivise.com/work",
              "provider": {
                "@type": "Organization",
                "name": "Citivise",
                "url": "https://citivise.com"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 pt-24 pb-6">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Our Work</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold mb-8">Our Work</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore our portfolio of successful local SEO campaigns and case studies. See how we've helped businesses across the Middle East improve their online visibility and drive sustainable growth.
          </p>
        </div>
        <CaseStudiesList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
