
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: "Services", 
      href: "/services",
      dropdown: true,
      items: [
        { name: "Google Business Profile Optimization", href: "/services/google-business-profile-optimization" },
        { name: "Local Keyword Research", href: "/services/local-keyword-research" },
        { name: "Mobile-First Optimization", href: "/services/mobile-first-optimization" },
        { name: "Local SEO Analytics", href: "/services/local-seo-analytics" },
        { name: "Review Management", href: "/services/review-management" },
        { name: "Local Content Creation", href: "/services/local-content-creation" },
      ]
    },
    { name: "Results", href: "/#results" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-foreground">
            Citi<span className="text-citivise-600">vise</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => 
                  link.dropdown ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-citivise-600 transition-colors duration-200">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.items?.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{item.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm font-medium hover:text-citivise-600 transition-colors duration-200 animated-underline px-4 py-2"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              to="/#contact"
              className="px-5 py-2 rounded-lg bg-citivise-600 text-white text-sm font-medium hover:bg-citivise-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 top-16 bg-white/90 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container flex flex-col items-center justify-center space-y-6 py-12">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                {link.dropdown ? (
                  <div className="w-full">
                    <button
                      className="flex items-center justify-between w-full text-lg font-medium hover:text-citivise-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.currentTarget.nextElementSibling?.classList.toggle('hidden');
                      }}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="hidden mt-2 ml-4 space-y-2">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block py-1 text-base text-gray-600 hover:text-citivise-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block text-lg font-medium hover:text-citivise-600 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/#contact"
              className="px-6 py-3 rounded-lg bg-citivise-600 text-white font-medium hover:bg-citivise-700 transition-colors duration-200 mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
