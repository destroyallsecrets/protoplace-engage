
import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import FeatureCard from "./FeatureCard";
import { 
  Layers, 
  Zap, 
  Code, 
  MessageSquare, 
  PencilRuler, 
  Folder, 
  CreditCard, 
  Search, 
  BarChart, 
  Users
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: "Drag & Drop Framework",
      description: "Build interfaces without coding through our intuitive drag-and-drop system, perfect for beginners and professionals alike."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Turn ideas into functional prototypes in minutes with our streamlined toolkit and pre-built components."
    },
    {
      icon: Code,
      title: "Open Source CMS",
      description: "Manage your content effortlessly with our lightweight, customizable CMS designed for maximum flexibility."
    },
    {
      icon: MessageSquare,
      title: "Chatbot Framework",
      description: "Create intelligent conversational experiences without complex coding using our simplified NLP integration."
    },
    {
      icon: PencilRuler,
      title: "Modular Design System",
      description: "Ensure consistent, responsive design across your projects with our flexible and reusable design components."
    },
    {
      icon: Folder,
      title: "Template Library",
      description: "Access a growing collection of community-contributed templates to jumpstart your projects and inspire new ideas."
    },
    {
      icon: CreditCard,
      title: "Billing Solution",
      description: "Implement subscription and payment features with our ready-to-use, customizable billing system."
    },
    {
      icon: Search,
      title: "Integrated SEO Tools",
      description: "Optimize your web presence with built-in SEO analysis, recommendations, and performance tracking."
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Gain valuable insights through our comprehensive analytics tools with visual representations of key metrics."
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users, share resources, and get support through our active community platform."
    }
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center mb-16">
        <TransitionWrapper animation="slide-up">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            Powerful Features
          </span>
        </TransitionWrapper>
        
        <TransitionWrapper animation="slide-up" delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Build Better Websites
          </h2>
        </TransitionWrapper>
        
        <TransitionWrapper animation="slide-up" delay={200}>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Our comprehensive suite of tools empowers you to create, manage, and optimize web applications without extensive technical knowledge.
          </p>
        </TransitionWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={100 + (index * 50)}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
