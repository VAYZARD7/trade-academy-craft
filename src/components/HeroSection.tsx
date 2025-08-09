import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Star, Users, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                #1 Trading Education Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Master Trading 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform from beginner to professional trader with our comprehensive courses, 
                expert mentorship, and proven strategies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Expert Mentors</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" asChild className="text-base">
                <Link to="/signup">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link to="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-success border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-hero border-2 border-background"></div>
                </div>
                <span className="text-sm text-muted-foreground">Join 10,000+ traders</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-trading">
              <img 
                src={heroImage} 
                alt="Professional Trading Platform Interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-card-soft animate-slide-in">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-success-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+24.5%</div>
                  <div className="text-xs text-muted-foreground">Portfolio Growth</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-card-soft animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Live Mentoring</div>
                  <div className="text-xs text-muted-foreground">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;