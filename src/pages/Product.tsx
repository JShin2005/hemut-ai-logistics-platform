import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  TrendingUp, 
  Mic, 
  Monitor,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Globe
} from "lucide-react";
import { useEffect, useState } from "react";

const Product = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId && !animatedElements.has(elementId)) {
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

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [animatedElements]);

  const coreFeatures = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Load Board Aggregation",
      description: "Connect to all major load boards simultaneously. Our AI scans thousands of loads in real-time, identifying the best opportunities based on your fleet's capabilities and route preferences.",
      benefits: [
        "Integration with 15+ major load boards",
        "Real-time load discovery and filtering",
        "Custom criteria matching for your fleet",
        "Automated load scoring and ranking"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Expected Cost Analysis",
      description: "Advanced algorithms analyze historical data, current market conditions, and route specifics to predict costs with 95% accuracy, ensuring profitable decisions every time.",
      benefits: [
        "95% cost prediction accuracy",
        "Real-time fuel and toll calculations",
        "Historical performance analysis",
        "Margin optimization recommendations"
      ]
    },
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "AI Voice Agent Negotiation",
      description: "Our AI voice agents conduct professional negotiations with brokers 24/7, securing better rates while maintaining relationships and handling objections naturally.",
      benefits: [
        "24/7 automated negotiations",
        "Natural language processing",
        "Relationship-preserving communication",
        "20% average rate improvement"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Real-time Dispatcher Dashboard",
      description: "Comprehensive dashboard provides dispatchers with live updates, intelligent alerts, and actionable insights to manage fleets efficiently and proactively.",
      benefits: [
        "Live fleet tracking and updates",
        "Intelligent alert system",
        "Performance analytics",
        "One-click load assignment"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Predictive Analytics",
      description: "AI-powered insights predict market trends and optimal timing"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Route Optimization",
      description: "Dynamic routing based on traffic, weather, and load requirements"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "TMS Integration",
      description: "Seamless integration with existing transportation management systems"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete AI-Powered Logistics Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From load discovery to delivery completion, Hemut automates every step of your logistics workflow 
              with enterprise-grade AI that learns and improves your operations continuously.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link to="/contact">
                See It In Action <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four powerful components working together to revolutionize your logistics operations
            </p>
          </div>

          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card 
                    data-animate-id={`core-feature-${index}`}
                    className="border-border shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:shadow-elegant"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="bg-secondary rounded-lg h-64 flex items-center justify-center">
                        <div className="text-center">
                          {feature.icon}
                          <p className="text-muted-foreground mt-4">Feature Demo Placeholder</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Measurable Business Impact
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Efficiency Gains</h3>
                  <p className="text-muted-foreground">Reduce manual negotiation time by 80% and increase load booking speed by 300%</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Margin Improvement</h3>
                  <p className="text-muted-foreground">Average 15-20% increase in profit margins through optimized pricing and cost analysis</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Operational Excellence</h3>
                  <p className="text-muted-foreground">24/7 AI availability ensures you never miss profitable opportunities</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">80%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">20%</div>
                <div className="text-sm text-muted-foreground">Margin Increase</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Cost Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive features designed for modern logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={index} 
                data-animate-id={`additional-feature-${index}`}
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experience the Future of Logistics
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how Hemut's AI platform can transform your operations in a personalized demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link to="/contact">
                Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link to="/use-cases">View Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;