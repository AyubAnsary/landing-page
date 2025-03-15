
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Refund & Cancellation Policy | Citivise</title>
        <meta name="description" content="Our refund and cancellation policy details the terms under which we provide refunds for our services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/refund-policy" />
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
                <BreadcrumbPage>Refund & Cancellation Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>
          
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>At Citivise, we are committed to providing high-quality local SEO services to our clients. This Refund & Cancellation Policy outlines the terms under which we provide refunds and handle cancellations for our services.</p>
            
            <h2>2. Service Agreements</h2>
            <p>All our services are provided under a service agreement that specifies the scope of work, deliverables, timeline, and payment terms. Before requesting a refund or cancellation, please review your service agreement for specific terms applicable to your engagement with us.</p>
            
            <h2>3. Cancellation Policy</h2>
            <h3>3.1 Cancellation by Client</h3>
            <p>If you wish to cancel our services, the following terms apply:</p>
            <ul>
              <li><strong>Within 48 Hours of Purchase:</strong> Full refund, minus any setup fees or costs already incurred.</li>
              <li><strong>After Initial 48 Hours but Before Work Begins:</strong> 75% refund, minus any setup fees or costs already incurred.</li>
              <li><strong>After Work Has Begun:</strong> Prorated refund based on the percentage of work completed, minus any setup fees or costs already incurred.</li>
              <li><strong>For Monthly Recurring Services:</strong> 30 days written notice required for cancellation. No refund for the current month's service.</li>
            </ul>
            
            <h3>3.2 Cancellation by Citivise</h3>
            <p>We reserve the right to cancel services under the following circumstances:</p>
            <ul>
              <li>Non-payment or late payment of fees</li>
              <li>Violation of our terms and conditions</li>
              <li>Provision of false or misleading information</li>
              <li>Requests for services that violate search engine guidelines or applicable laws</li>
            </ul>
            <p>In the event of cancellation by Citivise, we will provide a prorated refund for any prepaid services that have not been delivered.</p>
            
            <h2>4. Refund Policy</h2>
            <h3>4.1 Eligibility for Refunds</h3>
            <p>Refunds may be issued under the following circumstances:</p>
            <ul>
              <li>Cancellation of services as outlined in Section 3</li>
              <li>Failure by Citivise to deliver the agreed-upon services</li>
              <li>Services that substantially deviate from the agreed-upon scope of work</li>
            </ul>
            
            <h3>4.2 Refund Process</h3>
            <p>To request a refund, please contact your account manager or email billing@citivise.com with the following information:</p>
            <ul>
              <li>Your name and company name</li>
              <li>Invoice number or order reference</li>
              <li>Reason for the refund request</li>
              <li>Relevant documentation supporting your refund request</li>
            </ul>
            <p>We will review refund requests within 5 business days and process approved refunds within 10 business days.</p>
            
            <h3>4.3 Method of Refund</h3>
            <p>Refunds will be issued using the same payment method used for the original purchase. For bank transfers or other payment methods, we may request additional information to process the refund.</p>
            
            <h2>5. No Refund Scenarios</h2>
            <p>Refunds will not be issued in the following situations:</p>
            <ul>
              <li>After services have been fully delivered and accepted</li>
              <li>For services cancelled after work has been completed</li>
              <li>For setup fees, unless required by law</li>
              <li>If the client has violated our terms and conditions</li>
            </ul>
            
            <h2>6. Changes to This Policy</h2>
            <p>We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will not apply retroactively to orders already placed or services already in progress.</p>
            
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Refund & Cancellation Policy, please contact us at:</p>
            <p>Email: billing@citivise.com<br />
            Phone: +971 4 123 4567<br />
            Address: Dubai Internet City, Dubai, UAE</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
