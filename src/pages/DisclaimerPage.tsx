
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const DisclaimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Disclaimer | Citivise</title>
        <meta name="description" content="Important information and disclaimers regarding the use of Citivise services and website content." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://citivise.com/disclaimer" />
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
                <BreadcrumbPage>Disclaimer</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          <p className="text-gray-500 mb-8">Last updated: July 1, 2023</p>
          
          <div className="prose max-w-none">
            <h2>1. Website Information</h2>
            <p>The information provided on www.citivise.com ("our website") is for general informational purposes only. All information on our website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.</p>
            
            <h2>2. Professional Advice Disclaimer</h2>
            <p>The content on our website is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals with any questions you may have regarding digital marketing, SEO, or business strategies. Citivise shall not be liable for any loss or damage resulting from reliance on information provided on our website.</p>
            
            <h2>3. No Guarantees</h2>
            <p>While we use our best efforts to maintain the highest standards of service, Citivise does not guarantee specific outcomes or results from our services. Search engine algorithms and local search landscapes change frequently, and results may vary based on numerous factors outside our control.</p>
            <p>We cannot guarantee:</p>
            <ul>
              <li>Specific rankings in search engines</li>
              <li>Exact timeframes for achieving results</li>
              <li>Specific increases in website traffic or conversions</li>
              <li>Particular business outcomes such as revenue increases</li>
            </ul>
            
            <h2>4. External Links Disclaimer</h2>
            <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Citivise. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
            
            <h2>5. Testimonials and Reviews</h2>
            <p>Testimonials and reviews displayed on our website are experiences reported by our clients. They are individual experiences, reflecting real-life experiences of those who have used our services. However, they are individual results and results may vary. We do not claim that they are typical results that consumers will generally achieve.</p>
            
            <h2>6. Errors and Omissions</h2>
            <p>The information given by Citivise is for general guidance on matters of interest. Even though we have taken every precaution to ensure that the content of this website is both current and accurate, errors can occur. In addition, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on this website.</p>
            
            <h2>7. Fair Use Disclaimer</h2>
            <p>Citivise may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
            
            <h2>8. Views Expressed Disclaimer</h2>
            <p>Any views and opinions expressed on our blog, in articles, or in any other content on our website are solely those of the author and do not necessarily reflect the official policy or position of Citivise. We are not responsible or liable for any content, accuracy, or opinions expressed in such materials.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Disclaimer, please contact us at:</p>
            <p>Email: legal@citivise.com<br />
            Address: Dubai Internet City, Dubai, UAE</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
