
import React from "react";
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-display font-bold text-foreground">
              Citi<span className="text-citivise-600">vise</span>
            </a>
            <p className="mt-4 text-muted-foreground">
              Leading local SEO agency helping businesses in the Middle East
              improve their online visibility and attract more customers.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-citivise-600 hover:bg-citivise-50 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-citivise-600 hover:bg-citivise-50 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-citivise-600 hover:bg-citivise-50 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Local SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Google Maps Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Business Listings
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Reputation Management
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Content Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-citivise-600 mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Downtown Dubai, UAE
                </span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-citivise-600 mr-2 flex-shrink-0" />
                <a href="mailto:info@citivise.com" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  info@citivise.com
                </a>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-citivise-600 mr-2 flex-shrink-0" />
                <a href="tel:+97144001234" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                  +971 4 400 1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Citivise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
