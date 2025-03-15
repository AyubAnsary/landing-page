
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import ServicesList from "@/components/sections/ServicesList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const ServicesListPage = () => {
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
        <title>Our Services | Citivise - Leading Local SEO Agency in Middle East</title>
        <meta name="description" content="Explore our comprehensive local SEO services designed specifically for businesses in the Middle East. Drive local traffic and increase conversions." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/services" />
        <meta property="og:title" content="Our Services | Citivise" />
        <meta property="og:description" content="Explore our comprehensive local SEO services designed specifically for businesses in the Middle East." />
        <meta property="og:url" content="https://citivise.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Citivise Services",
              "description": "Comprehensive local SEO services for Middle East businesses",
              "url": "https://citivise.com/services",
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
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Discover our comprehensive range of local SEO services designed specifically for businesses in the Middle East. Our expert team delivers customized solutions to help you attract more local customers and grow your business.
          </p>
        </div>
        <ServicesList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesListPage;
