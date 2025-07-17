import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { 
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  Users,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "30-Minute Demo",
      description: "See Hemut's AI in action with your specific use cases"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Custom Consultation",
      description: "Discuss how Hemut fits into your current operations"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "ROI Analysis",
      description: "Get a personalized estimate of potential savings and margin improvements"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      content: "hello@hemut.com",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      content: "Atlanta, GA",
      description: "Serving fleets across North America"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See Hemut Transform Your Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Book a personalized demo to discover how AI can increase your margins by 20% 
              while reducing manual work by 80%
            </p>
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What You'll Get from Your Demo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                data-animate-id={`benefit-${index}`}
                className="text-center space-y-4 transition-all duration-600 ease-out opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card 
              data-animate-id="contact-form"
              className="border-border shadow-elegant transition-all duration-600 ease-out opacity-0 translate-y-8"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to schedule your personalized demo.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="ABC Logistics"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@abclogistics.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current logistics challenges and what you hope to achieve with Hemut..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our team is ready to help you understand how Hemut can transform your logistics operations. 
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    data-animate-id={`contact-info-${index}`}
                    className="flex items-start space-x-4 transition-all duration-600 ease-out opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to demo requests within 2-4 hours during business hours. 
                    For urgent inquiries, please call us directly.
                  </p>
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
            Ready to See the Future of Logistics?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of fleets already using AI to increase margins and reduce manual work
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link to="/product">
              Learn More About Hemut <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;