
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Citivise</title>
        <meta name="description" content="Our privacy policy explains how we collect, use, and protect your personal information when you use our services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/privacy-policy" />
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
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>
          
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>At Citivise ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you fill out forms on our website.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, device information, and other technology identifiers when you browse our website.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send you marketing and promotional materials (with your consent)</li>
              <li>To analyze and improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We may share your personal information with:</p>
            <ul>
              <li>Service providers who help us deliver our services</li>
              <li>Professional advisors, such as lawyers and accountants</li>
              <li>Regulatory authorities, when required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Right to access your personal information</li>
              <li>Right to rectify inaccurate or incomplete information</li>
              <li>Right to erasure of your personal information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2>7. Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings. For more information, please see our <a href="/cookie-policy" className="text-citivise-600 hover:underline">Cookie Policy</a>.</p>
            
            <h2>8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
            <p>Email: privacy@citivise.com<br />
            Address: Dubai Internet City, Dubai, UAE</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
