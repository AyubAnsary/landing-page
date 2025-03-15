
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms & Conditions | Citivise</title>
        <meta name="description" content="The terms and conditions governing your use of Citivise services and website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/terms" />
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
                <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>
          
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>Welcome to Citivise. These Terms & Conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.</p>
            
            <h2>2. Definitions</h2>
            <p>In these Terms & Conditions:</p>
            <ul>
              <li>"Citivise", "we", "our", or "us" refers to Citivise LLC.</li>
              <li>"Website" refers to www.citivise.com and all subdomains.</li>
              <li>"Services" refers to the local SEO and digital marketing services provided by Citivise.</li>
              <li>"Client", "you", or "your" refers to the individual or entity using our website or services.</li>
            </ul>
            
            <h2>3. Services</h2>
            <p>Citivise provides local SEO and digital marketing services to businesses in the Middle East. The specific services and deliverables will be outlined in a separate service agreement between Citivise and the client.</p>
            
            <h2>4. Intellectual Property</h2>
            <p>All content on our website, including text, graphics, logos, images, and software, is the property of Citivise or our content suppliers and is protected by international copyright laws. The compilation of all content on this website is the exclusive property of Citivise.</p>
            
            <h2>5. User Content</h2>
            <p>By submitting content to our website (such as comments, reviews, or testimonials), you grant Citivise a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide.</p>
            
            <h2>6. Limitation of Liability</h2>
            <p>Citivise shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website. In no event shall our liability exceed the amount paid by the client for the specific services giving rise to such liability.</p>
            
            <h2>7. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Citivise, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses relating to or arising out of your use of our website or services, your violation of these Terms & Conditions, or your violation of any rights of another.</p>
            
            <h2>8. Governing Law</h2>
            <p>These Terms & Conditions shall be governed by the laws of the United Arab Emirates. Any disputes arising under or in connection with these Terms & Conditions shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.</p>
            
            <h2>9. Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or services after any changes to these Terms & Conditions constitutes your acceptance of such changes.</p>
            
            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
            <p>Email: legal@citivise.com<br />
            Address: Dubai Internet City, Dubai, UAE</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
