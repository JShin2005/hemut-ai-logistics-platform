import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Award,
  ArrowRight,
  Truck,
  Brain,
  Zap
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Truck className="h-8 w-8 text-hemut-navy" />,
      title: "Industry Expertise",
      description: "Deep understanding of logistics challenges from hands-on experience in freight operations"
    },
    {
      icon: <Brain className="h-8 w-8 text-hemut-navy" />,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence designed specifically for logistics and transportation"
    },
    {
      icon: <Zap className="h-8 w-8 text-hemut-navy" />,
      title: "Operational Excellence",
      description: "Relentless focus on delivering measurable results and improving bottom-line performance"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "Hemut founded by logistics veterans frustrated with inefficient manual processes"
    },
    {
      year: "2024",
      title: "AI Development", 
      description: "Breakthrough in AI voice agent technology for automated broker negotiations"
    },
    {
      year: "2024",
      title: "Early Adopters",
      description: "First enterprise customers achieve 20% margin improvements within 90 days"
    },
    {
      year: "2025",
      title: "Scale & Growth",
      description: "Expanding platform capabilities and customer base across North America"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Logistics Through AI Innovation
            </h1>
            <p className="text-xl text-hemut-gray mb-8">
              Founded by logistics veterans who experienced firsthand the inefficiencies of manual load management, 
              Hemut was built to solve the industry's most pressing operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-hemut-navy" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-hemut-gray leading-relaxed">
                We believe that logistics operations should be driven by intelligent automation, not endless manual work. 
                Our mission is to eliminate the inefficiencies that plague trucking fleets while maximizing profitability 
                through AI-powered decision making.
              </p>
              <p className="text-lg text-hemut-gray leading-relaxed">
                Every hour spent on manual negotiations and load analysis is time that could be better invested in 
                growing your business. Hemut exists to give that time back to logistics professionals while 
                improving their operational outcomes.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Vision</h3>
                  <p className="text-hemut-gray">
                    To become the AI backbone of North American freight operations, enabling every trucking company 
                    to compete with enterprise-level efficiency and intelligence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Impact</h3>
                  <p className="text-hemut-gray">
                    Helping logistics companies increase margins by 20% while reducing operational overhead, 
                    creating more sustainable and profitable businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-hemut-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Born from Real-World Experience
            </h2>
            <div className="text-lg text-hemut-gray leading-relaxed space-y-6">
              <p>
                Hemut was founded by a team of logistics professionals who spent years managing freight operations 
                and witnessed the daily frustrations of manual load booking, endless phone negotiations, and 
                unpredictable profit margins.
              </p>
              <p>
                After seeing dispatchers work 12-hour days just to secure loads that AI could analyze in minutes, 
                and watching profitable opportunities slip away due to slow response times, our founders knew there 
                had to be a better way.
              </p>
              <p>
                Combining deep logistics expertise with cutting-edge AI technology, Hemut was built to address 
                these specific pain points with solutions that actually work in real-world freight operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-hemut-gray max-w-3xl mx-auto">
              Our core values guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-hemut-gray leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-hemut-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-hemut-gray">
              From identifying the problem to building the solution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-hemut-navy text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-hemut-gray leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Users className="h-8 w-8 text-hemut-navy" />
              <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            </div>
            <p className="text-lg text-hemut-gray max-w-3xl mx-auto">
              A diverse team of logistics professionals, AI engineers, and business strategists united by a 
              shared vision of transforming freight operations through intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-hemut-gray-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-hemut-navy" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Logistics Veterans</h3>
                <p className="text-sm text-hemut-gray">15+ years combined experience in freight operations</p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-hemut-gray-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-hemut-navy" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI Engineers</h3>
                <p className="text-sm text-hemut-gray">Specialists in machine learning and voice AI technology</p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-hemut-gray-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-hemut-navy" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Industry Advisors</h3>
                <p className="text-sm text-hemut-gray">Strategic guidance from leading logistics executives</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Logistics
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Partner with Hemut to experience the future of AI-powered logistics operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hemut-navy" asChild>
              <Link to="/product">View Product</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;