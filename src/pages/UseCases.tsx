import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Settings, 
  Handshake,
  ArrowRight,
  Clock,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { useEffect, useState } from "react";

const UseCases = () => {
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

  const userTypes = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Dispatchers",
      subtitle: "Streamline daily operations",
      description: "Focus on strategic decisions while AI handles routine negotiations and load management",
      workflow: [
        "Review AI-curated load recommendations each morning",
        "One-click approval for pre-negotiated loads",
        "Monitor real-time alerts for exceptions only",
        "Track fleet performance through intelligent dashboards"
      ],
      benefits: [
        "80% reduction in manual load booking time",
        "Improved driver satisfaction through better load selection",
        "24/7 load monitoring without overtime costs"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Operations Managers",
      subtitle: "Optimize fleet performance",
      description: "Gain complete visibility into operations with AI-powered insights and automated reporting",
      workflow: [
        "Access comprehensive performance analytics daily",
        "Receive intelligent alerts for operational issues",
        "Review margin analysis and profitability reports",
        "Adjust AI parameters based on business priorities"
      ],
      benefits: [
        "20% average improvement in profit margins",
        "Real-time visibility into fleet performance",
        "Data-driven decision making capabilities"
      ]
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Freight Brokers",
      subtitle: "Scale negotiations efficiently",
      description: "Handle more negotiations simultaneously while maintaining relationship quality",
      workflow: [
        "Set negotiation parameters and target rates",
        "AI agents conduct initial negotiations automatically",
        "Review and approve final terms before commitment",
        "Track relationship scores and broker performance"
      ],
      benefits: [
        "300% increase in concurrent negotiations",
        "Consistent negotiation quality and approach",
        "Better broker relationship management"
      ]
    }
  ];

  const scenarios = [
    {
      title: "Morning Load Planning",
      time: "6:00 AM",
      description: "Dispatcher starts day with AI-curated load recommendations",
      steps: [
        "AI has analyzed 2,000+ loads overnight",
        "Top 20 matches presented based on fleet criteria",
        "Expected costs and margins calculated for each",
        "One-click booking for pre-approved loads"
      ]
    },
    {
      title: "Real-time Negotiation",
      time: "2:30 PM",
      description: "AI agent secures better rate while dispatcher focuses on driver support",
      steps: [
        "New load opportunity identified",
        "AI agent contacts broker within 5 minutes",
        "Negotiation completed securing 15% higher rate",
        "Load automatically added to dispatch queue"
      ]
    },
    {
      title: "End-of-day Analytics",
      time: "6:00 PM",
      description: "Operations manager reviews daily performance and margins",
      steps: [
        "Automated performance report generated",
        "Margin analysis compared to historical data",
        "AI recommendations for tomorrow's priorities",
        "Exception alerts for any operational issues"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Leading Fleets Use Hemut
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how different roles in your organization benefit from AI-powered logistics automation
            </p>
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Every Role in Your Organization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hemut adapts to different workflows and responsibilities within your logistics operation
            </p>
          </div>

          <div className="space-y-16">
            {userTypes.map((userType, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    {userType.icon}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{userType.title}</h3>
                      <p className="text-muted-foreground">{userType.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {userType.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Daily Workflow:</h4>
                    <div className="space-y-2">
                      {userType.workflow.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <span className="text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card 
                  data-animate-id={`user-type-${index}`}
                  className="border-border shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:shadow-elegant"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Key Benefits</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userType.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life Scenarios */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A Day in the Life with Hemut
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how AI transforms typical logistics workflows throughout the day
            </p>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <Card 
                key={index} 
                data-animate-id={`scenario-${index}`}
                className="border-border transition-all duration-600 ease-out opacity-0 translate-y-8 hover:shadow-elegant"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary text-primary-foreground rounded-lg p-4 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{scenario.title}</h3>
                        <span className="text-primary font-semibold">{scenario.time}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{scenario.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {scenario.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="bg-secondary text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <span className="text-foreground text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how Hemut can streamline your specific workflow and role
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
              <Link to="/product">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;