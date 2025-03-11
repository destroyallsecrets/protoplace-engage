
import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Hero content */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
          <TransitionWrapper animation="slide-up" delay={100}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Innovate • Create • Deploy
            </span>
          </TransitionWrapper>

          <TransitionWrapper animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Create Beautiful Web Applications <span className="text-primary">Without Code</span>
            </h1>
          </TransitionWrapper>

          <TransitionWrapper animation="slide-up" delay={300}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              A comprehensive platform combining drag-and-drop simplicity, powerful prototyping, and community-driven innovation—all at an affordable price.
            </p>
          </TransitionWrapper>

          <TransitionWrapper animation="slide-up" delay={400}>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#cta" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                Get Started Free
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="w-full sm:w-auto bg-secondary hover:bg-secondary/70 text-foreground font-medium rounded-lg px-6 py-3 flex items-center justify-center transition-all">
                Explore Features
              </a>
            </div>
          </TransitionWrapper>
        </div>

        {/* Hero image/illustration */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <TransitionWrapper animation="scale-in" delay={500}>
            <div className="relative">
              {/* Main image container with glass morphism effect */}
              <div className="glass rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative">
                  {/* Simulated UI elements */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-white/90 flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 h-6 w-64 bg-gray-200 rounded-md"></div>
                  </div>
                  
                  <div className="pt-12 px-6 grid grid-cols-12 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-3 bg-white/60 rounded-lg h-52 p-3">
                      <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-3 w-full"></div>
                      <div className="h-4 bg-gray-200 rounded mb-3 w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded mb-3 w-4/5"></div>
                      <div className="h-4 bg-primary/30 rounded mb-3 w-full"></div>
                    </div>
                    
                    {/* Main content */}
                    <div className="col-span-9 grid grid-cols-2 gap-4">
                      <div className="bg-white/60 rounded-lg p-3 h-24">
                        <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 h-24">
                        <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                        <div className="h-4 bg-primary/30 rounded w-1/4"></div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 h-24 col-span-2">
                        <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-primary/80 glass-dark text-white p-4 rounded-lg shadow-lg max-w-xs transform rotate-3 text-sm font-medium">
                Drag & Drop Interface
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white glass text-foreground p-4 rounded-lg shadow-lg max-w-xs transform -rotate-2 text-sm font-medium">
                No-code solution for everyone
              </div>
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
