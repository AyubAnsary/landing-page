
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import CaseStudyDetail from "@/components/sections/CaseStudyDetail";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CaseStudyPage = () => {
  const { slug } = useParams();
  
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

  // Since case studies should be noindexed as per requirements
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Study | Citivise</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://citivise.com/work`} />
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
                <BreadcrumbLink href="/work">Our Work</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Case Study</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CaseStudyDetail slug={slug} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
