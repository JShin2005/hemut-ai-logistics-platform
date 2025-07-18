import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Truck, 
  Bot, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hemut-dashboard-hero.jpg";
import { useEffect, useState, useRef } from "react";
import LogoCarousel from "@/components/LogoCarousel";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Simple animation trigger on page load
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId && !animatedElements.has(elementId)) {
              // Mark as animated and add animation class
              setAnimatedElements(prev => new Set(prev).add(elementId));
              entry.target.classList.add('animate-in');
            }
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    // Observe all elements with data-animate-id
    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [animatedElements]);

  const valueProps = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Increase Profit Margins",
      description: "AI-powered negotiation and cost analysis deliver 15-20% higher margins on every load."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Save 80% Time on Negotiations", 
      description: "Automated AI voice agents handle broker negotiations 24/7 while you focus on operations."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Real-time Load Intelligence",
      description: "Aggregate and analyze thousands of loads instantly with predictive cost modeling."
    }
  ];

  const features = [
    "Load board aggregation across all major platforms",
    "Expected cost analysis with 95% accuracy",
    "AI voice agent for automated broker negotiations", 
    "Real-time dispatcher dashboard and alerts",
    "Route optimization and margin analysis",
    "Integration with existing TMS systems"
  ];

  const stats = [
    { number: "20%", label: "Average margin increase" },
    { number: "80%", label: "Reduction in negotiation time" },
    { number: "24/7", label: "AI agent availability" },
    { number: "95%", label: "Cost prediction accuracy" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] bg-black flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Logistics Stock"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          draggable={false}
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold text-center drop-shadow-lg select-none">
            HEMUT
          </h1>
        </div>
      </section>
      <section className="bg-[#0a1833] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-white">A </span>
            <span className="text-[#FFC72C]">Smarter</span>
            <span className="text-white"> Way to Run </span>
            <span className="text-[#FFC72C]">Freight</span>
          </h2>
          <p className="text-lg text-gray-300">
            Hemut combines automation, dispatch, and negotiation into one platform, so your logistics team can focus on what matters most: moving freight efficiently and profitably.
          </p>
        </div>
      </section>

        {/* General Purpose Sections */}
        <section className="bg-[#101c36] min-h-[500px] flex">
          <div className="w-1/2 flex items-center justify-center p-12">
            <div className="max-w-md space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">Built for modern logistics</h3>
              <p className="text-lg text-gray-300">
                Hemut simplifies freight management with intelligent automation, giving teams the tools they need to work smarter, move faster, and focus on what matters.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
              alt="Modern Logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="bg-[#0a1833] min-h-[500px] flex">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Efficient Operations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 flex items-center justify-center p-12">
            <div className="max-w-md space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">Efficiency at every step</h3>
              <p className="text-lg text-gray-300">
                From planning to execution, Hemut helps logistics teams reduce friction, eliminate manual work, and improve outcomes.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#101c36] min-h-[500px] flex">
          <div className="w-1/2 flex items-center justify-center p-12">
            <div className="max-w-md space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">Scale with confidence</h3>
              <p className="text-lg text-gray-300">
                Whether you're managing a few trucks or a nationwide fleet, Hemut gives you the clarity and tools to grow your business on your terms.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
              alt="Scalable Fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Built to Connect With the Best
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your logistics operations with AI that works around the clock
              </p>
            </div>
            <LogoCarousel />
            {/* Removed info cards for minimalist layout */}
          </div>
        </section>

        {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Logistics Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how Hemut's AI can increase your margins and reduce manual work in just 30 minutes.
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link to="/contact">
              Schedule Your Demo Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>


    </div>
  );
};

export default Home;