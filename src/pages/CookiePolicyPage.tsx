
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Cookie Policy | Citivise</title>
        <meta name="description" content="Our cookie policy explains how we use cookies and similar technologies on our website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/cookie-policy" />
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
                <BreadcrumbPage>Cookie Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>
          
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>This Cookie Policy explains how Citivise ("we", "our", or "us") uses cookies and similar technologies on our website (www.citivise.com). By using our website, you consent to the use of cookies as described in this policy.</p>
            
            <h2>2. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
            
            <h2>3. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <h3>3.1 Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
            
            <h3>3.2 Analytical/Performance Cookies</h3>
            <p>These cookies allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us improve how our website works, for example, by ensuring that users find what they are looking for easily.</p>
            
            <h3>3.3 Functionality Cookies</h3>
            <p>These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).</p>
            
            <h3>3.4 Targeting/Advertising Cookies</h3>
            <p>These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</p>
            
            <h2>4. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These cookies may include:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>HubSpot</li>
            </ul>
            
            <h2>5. Managing Cookies</h2>
            <p>Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Below are links to instructions on how to manage cookies in common web browsers:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-citivise-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-citivise-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-citivise-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-citivise-600 hover:underline">Microsoft Edge</a></li>
            </ul>
            
            <h2>6. Do Not Track Signals</h2>
            <p>Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Our website does not currently respond to "Do Not Track" signals.</p>
            
            <h2>7. Changes to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have any questions about this Cookie Policy, please contact us at:</p>
            <p>Email: privacy@citivise.com<br />
            Address: Dubai Internet City, Dubai, UAE</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
