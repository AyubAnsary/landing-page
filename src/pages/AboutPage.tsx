
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const AboutPage = () => {
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
        <title>About Us | Citivise - Leading Local SEO Agency in Middle East</title>
        <meta name="description" content="Learn about Citivise, the leading local SEO agency in the Middle East. Discover our mission, values, and expert team dedicated to helping businesses succeed online." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/about" />
        <meta property="og:title" content="About Us | Citivise" />
        <meta property="og:description" content="Learn about Citivise, the leading local SEO agency in the Middle East." />
        <meta property="og:url" content="https://citivise.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Citivise",
              "description": "Information about Citivise, the leading local SEO agency in the Middle East",
              "url": "https://citivise.com/about",
              "provider": {
                "@type": "Organization",
                "name": "Citivise",
                "url": "https://citivise.com",
                "logo": "https://citivise.com/logo.png",
                "foundingDate": "2018",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Ahmed Al-Mansoori"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Dubai",
                  "addressRegion": "Dubai",
                  "addressCountry": "UAE"
                }
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
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold mb-8">About Citivise</h1>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl">Citivise is the Middle East's premier local SEO agency, dedicated to helping businesses improve their online visibility and attract more local customers.</p>
                
                <h2>Our Mission</h2>
                <p>Our mission is to empower Middle Eastern businesses with effective local search strategies that drive sustainable growth and meaningful customer connections. We believe that every business, regardless of size, deserves to be discoverable by local customers searching for their products and services.</p>
                
                <h2>Our Approach</h2>
                <p>At Citivise, we understand that effective local SEO requires a combination of technical expertise, local market knowledge, and creative strategy. Our approach is:</p>
                <ul>
                  <li><strong>Data-Driven:</strong> We base our strategies on comprehensive research and analysis.</li>
                  <li><strong>Customized:</strong> We recognize that every business and market is unique, requiring tailored solutions.</li>
                  <li><strong>Holistic:</strong> We address all aspects of local search, from technical optimization to content creation and reputation management.</li>
                  <li><strong>Transparent:</strong> We provide clear reporting and maintain open communication throughout our partnership.</li>
                </ul>
                
                <h2>Our Team</h2>
                <p>Our team consists of experienced local SEO specialists, content creators, web developers, and data analysts who are passionate about helping businesses succeed in local search. With deep knowledge of the Middle Eastern market and the latest SEO trends, our experts work collaboratively to deliver exceptional results for our clients.</p>
                
                <h2>Our Values</h2>
                <p>Our work is guided by a set of core values that define who we are and how we operate:</p>
                <ul>
                  <li><strong>Excellence:</strong> We strive for excellence in everything we do, from client service to technical execution.</li>
                  <li><strong>Integrity:</strong> We maintain the highest ethical standards and always act in our clients' best interests.</li>
                  <li><strong>Innovation:</strong> We continuously explore new strategies and technologies to stay ahead of the curve.</li>
                  <li><strong>Collaboration:</strong> We believe in the power of partnership, working closely with our clients to achieve shared goals.</li>
                  <li><strong>Results:</strong> We are committed to delivering measurable results that contribute to our clients' business success.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
