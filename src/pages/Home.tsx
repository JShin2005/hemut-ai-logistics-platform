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

const Home = () => {
  const valueProps = [
    {
      icon: <TrendingUp className="h-8 w-8 text-hemut-navy" />,
      title: "Increase Profit Margins",
      description: "AI-powered negotiation and cost analysis deliver 15-20% higher margins on every load."
    },
    {
      icon: <Clock className="h-8 w-8 text-hemut-navy" />,
      title: "Save 80% Time on Negotiations", 
      description: "Automated AI voice agents handle broker negotiations 24/7 while you focus on operations."
    },
    {
      icon: <Bot className="h-8 w-8 text-hemut-navy" />,
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
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  AI-Powered Load Management for{" "}
                  <span className="text-hemut-navy">Trucking Fleets</span>
                </h1>
                <p className="text-xl text-hemut-gray leading-relaxed">
                  Automate load aggregation, broker negotiation, and dispatcher workflows. 
                  Increase margins by 20% while reducing manual work by 80%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/product">View Product</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-hemut-navy">{stat.number}</div>
                    <div className="text-sm text-hemut-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
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
            <p className="text-xl text-hemut-gray max-w-3xl mx-auto">
              Transform your logistics operations with AI that works around the clock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">{prop.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{prop.title}</h3>
                  <p className="text-hemut-gray leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-hemut-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Complete AI-Powered Logistics Platform
                </h2>
                <p className="text-lg text-hemut-gray mb-8">
                  From load discovery to final delivery, Hemut's AI handles the complex negotiations 
                  and analysis that traditionally consume hours of your team's time.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-hemut-navy mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="cta" size="lg" asChild>
                <Link to="/product">
                  Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-hemut-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Fleet Management</h3>
                  <p className="text-sm text-hemut-gray">Optimize routes and loads</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-hemut-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                  <p className="text-sm text-hemut-gray">Real-time performance insights</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <Bot className="h-12 w-12 text-hemut-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">AI Negotiation</h3>
                  <p className="text-sm text-hemut-gray">Automated broker discussions</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-hemut-navy mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Cost Analysis</h3>
                  <p className="text-sm text-hemut-gray">Predictive margin modeling</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Logistics Companies
            </h2>
            <p className="text-lg text-hemut-gray">
              Join hundreds of fleets already using AI to transform their operations
            </p>
          </div>

          {/* Placeholder for partner logos - would typically use actual logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-hemut-gray-light rounded-lg p-8 flex items-center justify-center">
                <span className="text-hemut-gray font-semibold">Partner {i + 1}</span>
              </div>
            ))}
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
          <Button variant="secondary" size="lg" asChild>
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