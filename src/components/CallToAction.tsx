
import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import { CheckCircle, ChevronRight } from "lucide-react";

const CallToAction: React.FC = () => {
  const benefits = [
    "No credit card required to start",
    "Free tier with essential features",
    "Upgrade anytime as you grow",
    "Priority support for all plans",
    "Regular feature updates"
  ];

  return (
    <section id="cta" className="section-container">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 py-16 px-6 md:px-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <TransitionWrapper animation="slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Web Development Process?
                </h2>
              </TransitionWrapper>
              
              <TransitionWrapper animation="slide-up" delay={100}>
                <p className="text-lg text-foreground/80 mb-8 max-w-lg">
                  Join thousands of users who are building better websites faster and with less effort. Start your journey today.
                </p>
              </TransitionWrapper>
              
              <TransitionWrapper animation="slide-up" delay={200}>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </TransitionWrapper>
            </div>
            
            <div className="md:w-5/12">
              <TransitionWrapper animation="scale-in" delay={300}>
                <div className="glass rounded-xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Get Started For Free</h3>
                  <p className="text-foreground/80 mb-6">No credit card required. Start building right away.</p>
                  
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                    >
                      Create Free Account
                      <ChevronRight size={18} />
                    </button>
                  </form>
                  
                  <p className="text-xs text-foreground/60 mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </TransitionWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
