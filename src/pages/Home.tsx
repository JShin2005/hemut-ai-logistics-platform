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
      <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`space-y-2 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Win More Freight
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground font-normal">
                  AI automation for brokers, carriers, and dispatchers
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link to="/contact">
                    Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link to="/product">View Product</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 transition-all duration-700 ease-out delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Hemut AI Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Leading Fleets Choose Hemut
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your logistics operations with AI that works around the clock
            </p>
          </div>
          <LogoCarousel />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {valueProps.map((prop, index) => (
              <Card 
                key={index} 
                data-animate-id={`value-prop-${index}`}
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center transition-transform duration-300 hover:scale-110">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Complete AI-Powered Logistics Platform
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From load discovery to final delivery, Hemut's AI handles the complex negotiations 
                  and analysis that traditionally consume hours of your team's time.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="default" 
                size="lg" 
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link to="/product">
                  Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card 
                data-animate-id="feature-card-0"
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: '0ms' }}
              >
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-2">Fleet Management</h3>
                  <p className="text-sm text-muted-foreground">Optimize routes and loads</p>
                </CardContent>
              </Card>
              <Card 
                data-animate-id="feature-card-1"
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: '100ms' }}
              >
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                  <p className="text-sm text-muted-foreground">Real-time performance insights</p>
                </CardContent>
              </Card>
              <Card 
                data-animate-id="feature-card-2"
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: '200ms' }}
              >
                <CardContent className="p-6 text-center">
                  <Bot className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-2">AI Negotiation</h3>
                  <p className="text-sm text-muted-foreground">Automated broker discussions</p>
                </CardContent>
              </Card>
              <Card 
                data-animate-id="feature-card-3"
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: '300ms' }}
              >
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="font-semibold text-foreground mb-2">Cost Analysis</h3>
                  <p className="text-sm text-muted-foreground">Predictive margin modeling</p>
                </CardContent>
              </Card>
            </div>
          </div>
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