import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, TrendingUp, Shield, Brain, Target, BarChart3 } from "lucide-react"

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Trading Fundamentals",
      description: "Master the basics of trading with comprehensive foundational knowledge",
      level: "Beginner",
      duration: "4 weeks",
      students: 2450,
      rating: 4.8,
      price: "$199",
      icon: Target,
      modules: ["Market Basics", "Order Types", "Chart Reading", "Risk Basics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Technical Analysis Mastery",
      description: "Deep dive into chart patterns, indicators, and advanced analysis techniques",
      level: "Intermediate",
      duration: "6 weeks",
      students: 1890,
      rating: 4.9,
      price: "$299",
      icon: BarChart3,
      modules: ["Chart Patterns", "Technical Indicators", "Support & Resistance", "Volume Analysis"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Options Trading Strategies",
      description: "Learn advanced options strategies for income generation and risk management",
      level: "Advanced",
      duration: "8 weeks",
      students: 1234,
      rating: 4.7,
      price: "$399",
      icon: TrendingUp,
      modules: ["Options Basics", "Covered Calls", "Protective Puts", "Complex Strategies"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Risk Management Essentials",
      description: "Protect your capital with proven risk management techniques",
      level: "Intermediate",
      duration: "3 weeks",
      students: 1567,
      rating: 4.9,
      price: "$249",
      icon: Shield,
      modules: ["Position Sizing", "Stop Losses", "Portfolio Risk", "Psychology"],
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Cryptocurrency Trading",
      description: "Navigate the crypto markets with confidence and strategy",
      level: "Intermediate",
      duration: "5 weeks",
      students: 2100,
      rating: 4.6,
      price: "$329",
      icon: Brain,
      modules: ["Crypto Fundamentals", "DeFi Trading", "Altcoin Analysis", "Crypto Security"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Algorithmic Trading",
      description: "Build and deploy automated trading systems",
      level: "Advanced",
      duration: "10 weeks",
      students: 890,
      rating: 4.8,
      price: "$599",
      icon: Brain,
      modules: ["Python for Trading", "Strategy Development", "Backtesting", "Live Deployment"],
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const categories = [
    { name: "All Courses", count: courses.length },
    { name: "Beginner", count: courses.filter(c => c.level === "Beginner").length },
    { name: "Intermediate", count: courses.filter(c => c.level === "Intermediate").length },
    { name: "Advanced", count: courses.filter(c => c.level === "Advanced").length },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trading Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive trading education designed to take you from beginner to professional trader
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${course.color} text-white`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}>
                    {course.level}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Modules */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">What you'll learn:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.modules.map((module, index) => (
                      <div key={index} className="text-xs text-muted-foreground">
                        • {module}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                  <Button className="group-hover:scale-105 transition-transform">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful traders who have transformed their financial future with our courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Browse All Courses
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

export default Courses