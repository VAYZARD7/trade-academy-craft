import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Shield, 
  TrendingUp, 
  Clock,
  Award,
  Target,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "From basics to advanced strategies, our structured curriculum covers all aspects of trading."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from professional traders with real market experience and proven track records."
  },
  {
    icon: BarChart3,
    title: "Live Market Analysis",
    description: "Daily market sessions with real-time analysis and trading opportunities."
  },
  {
    icon: Trophy,
    title: "Certification Program",
    description: "Earn recognized certificates upon course completion to validate your trading skills."
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Master the art of protecting your capital with proven risk management strategies."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with 24/7 access to course materials and recordings."
  },
  {
    icon: Award,
    title: "Student Progress Tracking",
    description: "Monitor your learning journey with detailed progress reports and performance analytics."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security to protect your learning data and personal information."
  },
  {
    icon: TrendingUp,
    title: "Real Trading Simulations",
    description: "Practice with virtual portfolios before risking real money in the markets."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose TradeMaster Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to become a successful trader,
            from beginner-friendly courses to advanced trading strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card-soft group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;