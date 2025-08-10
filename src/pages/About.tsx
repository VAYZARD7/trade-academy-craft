import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, TrendingUp, BookOpen, Target, Lightbulb } from "lucide-react"

const About = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "10,000+" },
    { icon: Award, label: "Success Rate", value: "92%" },
    { icon: TrendingUp, label: "Average ROI", value: "125%" },
    { icon: BookOpen, label: "Courses", value: "50+" },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on practical strategies that deliver real trading results in live markets."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where traders learn from each other's experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving our curriculum with the latest market trends and technologies."
    }
  ]

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & Lead Trader",
      experience: "15+ years",
      specialization: "Technical Analysis, Options Trading"
    },
    {
      name: "Sarah Chen",
      role: "Head of Education",
      experience: "12+ years",
      specialization: "Risk Management, Portfolio Theory"
    },
    {
      name: "Marcus Johnson",
      role: "Senior Trading Mentor",
      experience: "10+ years",
      specialization: "Cryptocurrency, Forex Trading"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About TradeMaster Academy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize trading education and empower individuals 
            to achieve financial independence through smart, disciplined trading strategies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              Founded in 2018, TradeMaster Academy emerged from a simple observation: 
              most trading education was either too theoretical or too expensive for everyday people 
              who wanted to learn how to trade successfully.
            </p>
            <p>
              Our founders, experienced traders themselves, recognized the need for practical, 
              accessible education that bridges the gap between theory and real-world application. 
              We started with a small group of dedicated students and have grown into a thriving 
              community of traders from all backgrounds.
            </p>
            <p>
              Today, we're proud to offer comprehensive trading education that combines proven 
              strategies, cutting-edge technology, and personalized mentorship to help our 
              students achieve their financial goals.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To provide world-class trading education that empowers individuals to build 
            sustainable wealth through disciplined, strategic trading while fostering a 
            supportive community of lifelong learners.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default About