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
  Zap,
  Mail,
  Linkedin
} from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
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

  const values = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Industry Expertise",
      description: "Deep understanding of logistics challenges from hands-on experience in freight operations"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence designed specifically for logistics and transportation"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
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

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Operations at a major logistics company, Sarah brings 15+ years of industry experience and a passion for operational efficiency.",
      email: "sarah@hemut.com",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI researcher with expertise in natural language processing and voice technologies. Previously led AI teams at major tech companies.",
      email: "marcus@hemut.com",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineer with deep experience in logistics software. Built and scaled engineering teams at multiple startups.",
      email: "david@hemut.com",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Product",
      bio: "Product leader with 10+ years in B2B SaaS. Previously led product teams at logistics and supply chain technology companies.",
      email: "lisa@hemut.com",
      linkedin: "https://linkedin.com/in/lisathompson"
    },
    {
      name: "Alex Johnson",
      role: "Lead Data Scientist",
      bio: "Machine learning expert specializing in predictive analytics and optimization algorithms for logistics operations.",
      email: "alex@hemut.com",
      linkedin: "https://linkedin.com/in/alexjohnson"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Transforming Logistics Through AI Innovation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Founded by logistics veterans who experienced firsthand the inefficiencies of manual load management, 
              Hemut was built to solve the industry's most pressing operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that logistics operations should be driven by intelligent automation, not endless manual work. 
                  Our mission is to eliminate the inefficiencies that plague trucking fleets while maximizing profitability 
                  through AI-powered decision making.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every hour spent on manual negotiations and load analysis is time that could be better invested in 
                  growing your business. Hemut exists to give that time back to logistics professionals while 
                  improving their operational outcomes.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <Card 
                data-animate-id="vision-card"
                className="border-border shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the AI backbone of North American freight operations, enabling every trucking company 
                    to compete with enterprise-level efficiency and intelligence.
                  </p>
                </CardContent>
              </Card>
              
              <Card 
                data-animate-id="impact-card"
                className="border-border shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8"
                style={{ transitionDelay: '100ms' }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-10">
              Born from Real-World Experience
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-8">
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <Card 
                key={index} 
                data-animate-id={`value-${index}`}
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-10 text-center space-y-6">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From identifying the problem to building the solution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  data-animate-id={`timeline-${index}`}
                  className="flex items-start space-x-8 transition-all duration-600 ease-out opacity-0 translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-elegant">
                    {item.year}
                  </div>
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the logistics veterans and AI experts building the future of freight operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                data-animate-id={`team-${index}`}
                className="border-border hover:shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex justify-center space-x-4 pt-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Transforming Logistics
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to see how AI can revolutionize your operations? Let's discuss how Hemut can help 
            your team work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link to="/product">Explore Our Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;