import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

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
      icon: <Calendar className="h-6 w-6 text-hemut-navy" />,
      title: "30-Minute Demo",
      description: "See Hemut's AI in action with your specific use cases"
    },
    {
      icon: <Users className="h-6 w-6 text-hemut-navy" />,
      title: "Custom Consultation",
      description: "Discuss how Hemut fits into your current operations"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-hemut-navy" />,
      title: "ROI Analysis",
      description: "Get a personalized estimate of potential savings and margin improvements"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-hemut-navy" />,
      title: "Email",
      content: "hello@hemut.com",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="h-5 w-5 text-hemut-navy" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5 text-hemut-navy" />,
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
            <p className="text-xl text-hemut-gray mb-8">
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
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-hemut-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-hemut-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
                <p className="text-hemut-gray">
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
                    <Label htmlFor="message">Tell us about your operations (optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Fleet size, current challenges, specific interests..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Book My Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-hemut-gray text-center">
                    By submitting this form, you agree to receive communications from Hemut. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-hemut-gray mb-8">
                  Have questions before booking a demo? We're here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-hemut-gray-light rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-hemut-navy font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-hemut-gray">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-hemut-navy bg-hemut-navy/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-hemut-navy mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Quick Response Promise</h3>
                      <p className="text-hemut-gray">
                        We understand that timing is crucial in logistics. That's why we commit to responding 
                        to all demo requests within 24 hours, typically much faster.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">How long does implementation take?</h3>
                <p className="text-hemut-gray">
                  Most customers are fully operational within 2-4 weeks. We handle integration with your existing 
                  systems and provide comprehensive training for your team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Do you integrate with our current TMS?</h3>
                <p className="text-hemut-gray">
                  Yes, Hemut is designed to work with most major TMS platforms. During the demo, we'll discuss 
                  your specific systems and integration requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What's the typical ROI timeline?</h3>
                <p className="text-hemut-gray">
                  Most customers see positive ROI within 60-90 days, with margin improvements becoming apparent 
                  in the first month of operation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;