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

const UseCases = () => {
  const userTypes = [
    {
      icon: <Users className="h-8 w-8 text-hemut-navy" />,
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
      icon: <Settings className="h-8 w-8 text-hemut-navy" />,
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
      icon: <Handshake className="h-8 w-8 text-hemut-navy" />,
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
            <p className="text-xl text-hemut-gray mb-8">
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
            <p className="text-xl text-hemut-gray max-w-3xl mx-auto">
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
                      <p className="text-hemut-gray">{userType.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-hemut-gray leading-relaxed">
                    {userType.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Daily Workflow:</h4>
                    <div className="space-y-2">
                      {userType.workflow.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="bg-hemut-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <span className="text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className="border-border shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-hemut-navy" />
                      <span>Key Benefits</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userType.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-hemut-navy flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-hemut-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A Day in the Life with Hemut
            </h2>
            <p className="text-xl text-hemut-gray max-w-3xl mx-auto">
              See how AI transforms typical logistics workflows throughout the day
            </p>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                        <Clock className="h-6 w-6 text-hemut-navy" />
                        <span className="text-2xl font-bold text-hemut-navy">{scenario.time}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{scenario.title}</h3>
                      <p className="text-hemut-gray">{scenario.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {scenario.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                            <div className="bg-hemut-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm text-foreground">{step}</span>
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

      {/* Integration Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Seamless Integration with Your Existing Workflow
            </h2>
            <p className="text-lg text-hemut-gray mb-8">
              Hemut works with your current TMS and doesn't require major operational changes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-hemut-gray-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-hemut-navy">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Quick Setup</h3>
              <p className="text-hemut-gray">Connect to your existing systems in under 24 hours</p>
            </div>
            <div className="space-y-4">
              <div className="bg-hemut-gray-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-hemut-navy">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Gradual Adoption</h3>
              <p className="text-hemut-gray">Start with one feature and expand as your team adapts</p>
            </div>
            <div className="space-y-4">
              <div className="bg-hemut-gray-light rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-hemut-navy">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Full Automation</h3>
              <p className="text-hemut-gray">Achieve complete workflow automation within weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to See Hemut in Your Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a personalized demo to see how Hemut fits into your specific operations
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Book Your Custom Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UseCases;