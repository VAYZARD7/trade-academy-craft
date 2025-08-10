import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for beginners starting their trading journey",
      icon: Star,
      color: "from-blue-500 to-blue-600",
      popular: false,
      features: [
        "Access to 3 beginner courses",
        "Basic trading tools",
        "Community forum access",
        "Weekly market updates",
        "Email support",
        "Mobile app access"
      ],
      limitations: [
        "Limited mentor sessions",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Most popular plan for serious traders",
      icon: Zap,
      color: "from-green-500 to-green-600",
      popular: true,
      features: [
        "Access to ALL courses",
        "Advanced trading tools",
        "Priority community support",
        "Daily market analysis",
        "1-on-1 mentor sessions (2/month)",
        "Live trading webinars",
        "Advanced analytics dashboard",
        "Custom alerts & notifications",
        "Trading journal integration"
      ],
      limitations: []
    },
    {
      name: "Elite",
      price: "$199",
      period: "month",
      description: "For professional traders and institutions",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited mentor sessions",
        "Private Discord channel",
        "Algorithmic trading course",
        "Advanced backtesting tools",
        "API access",
        "White-label solutions",
        "Institutional research reports",
        "Custom strategy development",
        "24/7 phone support"
      ],
      limitations: []
    }
  ]

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 7-day free trial for all new users to explore our platform."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your trading journey with flexible pricing options designed for every level
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color} ${plan.popular ? 'mt-8' : ''}`} />
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm mb-4">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Everything included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer enterprise solutions for institutions, trading firms, and large teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
            <Button size="lg" variant="ghost">
              View Enterprise Features
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Pricing