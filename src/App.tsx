
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServicesList from "./pages/ServicesList";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import NotFound from "./pages/NotFound";
import WorkPage from "./pages/WorkPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import SitemapPage from "./pages/SitemapPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          
          {/* Case Studies Routes */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          
          {/* Information Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
