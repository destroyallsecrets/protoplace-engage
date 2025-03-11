
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AnimatedSvg from "./AnimatedSvg";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 glass shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and company name */}
          <a href="#" className="flex items-center space-x-2">
            <AnimatedSvg className="text-primary w-8 h-8" />
            <span className="text-lg font-semibold">WebCraft</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="animated-underline text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#" className="animated-underline text-sm font-medium transition-colors hover:text-primary">
              Templates
            </a>
            <a href="#" className="animated-underline text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#" className="animated-underline text-sm font-medium transition-colors hover:text-primary">
              Community
            </a>
            <a href="#cta" className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-md">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 glass shadow-md transition-all duration-300 ease-in-out md:hidden overflow-hidden",
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          <a href="#features" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Templates
          </a>
          <a href="#" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </a>
          <a href="#" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Community
          </a>
          <a href="#cta" className="block w-full bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
