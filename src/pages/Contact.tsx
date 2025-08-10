import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users } from "lucide-react"

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "support@trademaster.academy",
      action: "Send Email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      value: "Available 24/7",
      action: "Start Chat",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const offices = [
    {
      city: "New York",
      address: "123 Wall Street, Suite 456",
      zipcode: "New York, NY 10005",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London",
      address: "45 Canary Wharf",
      zipcode: "London E14 5AB, UK",
      phone: "+44 20 7946 0958"
    },
    {
      city: "Singapore",
      address: "1 Raffles Place, #20-61",
      zipcode: "Singapore 048616",
      phone: "+65 6123 4567"
    }
  ]

  const support = [
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within 2-4 hours during business hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our support team consists of experienced traders and educators"
    },
    {
      icon: MessageCircle,
      title: "Multiple Channels",
      description: "Reach us via email, phone, live chat, or our contact form"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our courses or need help getting started? We're here to help you succeed.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-medium">{method.value}</p>
                <Button className="w-full group-hover:scale-105 transition-transform">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                {support.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                  <p className="text-sm text-muted-foreground">{office.zipcode}</p>
                  <p className="text-sm font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait - join thousands of successful traders who have transformed their financial future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Browse Courses
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact