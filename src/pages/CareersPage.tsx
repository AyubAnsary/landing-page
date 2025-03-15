
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Careers | Citivise</title>
        <meta name="description" content="Join our team at Citivise and help businesses across the Middle East improve their local online presence." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/careers" />
      </Helmet>
      
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 pt-24 pb-16">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Careers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              <p className="mb-4">At Citivise, we're on a mission to help businesses across the Middle East improve their local online presence and connect with customers in their communities.</p>
              <p className="mb-4">We're looking for passionate individuals who are driven by innovation, excellence, and making a real impact on the businesses we work with.</p>
              <p>Join our team of experts and grow your career in the dynamic world of local SEO and digital marketing.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-citivise-600 mr-2">•</span>
                  <span><strong>Innovation:</strong> We stay ahead of industry trends and continuously refine our strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-citivise-600 mr-2">•</span>
                  <span><strong>Client Success:</strong> We measure our success by the success of our clients.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-citivise-600 mr-2">•</span>
                  <span><strong>Integrity:</strong> We operate with transparency and honesty in all our interactions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-citivise-600 mr-2">•</span>
                  <span><strong>Excellence:</strong> We strive for excellence in everything we do.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold mb-6">Open Positions</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-16">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Senior SEO Specialist</h3>
              <p className="text-gray-600 mb-4">Full-time • Dubai, UAE</p>
              <p className="mb-4">We're looking for an experienced SEO Specialist with a strong focus on local SEO strategies to join our growing team. In this role, you'll work directly with clients to develop and implement effective local search optimization plans.</p>
              <button className="bg-citivise-600 text-white px-4 py-2 rounded hover:bg-citivise-700 transition-colors">Apply Now</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Content Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">Full-time • Remote</p>
              <p className="mb-4">We're seeking a talented Content Marketing Specialist to create engaging, SEO-optimized content for our clients. The ideal candidate will have experience writing for local businesses and understanding the nuances of local content marketing.</p>
              <button className="bg-citivise-600 text-white px-4 py-2 rounded hover:bg-citivise-700 transition-colors">Apply Now</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Client Success Manager</h3>
              <p className="text-gray-600 mb-4">Full-time • Riyadh, KSA</p>
              <p className="mb-4">We're looking for a Client Success Manager to be the main point of contact for our clients. You'll work closely with our SEO team to ensure client satisfaction, report on campaign performance, and identify opportunities for growth.</p>
              <button className="bg-citivise-600 text-white px-4 py-2 rounded hover:bg-citivise-700 transition-colors">Apply Now</button>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
