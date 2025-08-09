import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  UserCheck, 
  Shield, 
  Settings,
  BookOpen,
  BarChart3,
  Users,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const userTypes = [
  {
    icon: GraduationCap,
    title: "Student Dashboard",
    description: "Access your courses, track progress, submit assignments, and interact with mentors.",
    features: [
      "Course Progress Tracking",
      "Assignment Submission",
      "Live Chat with Mentors",
      "Performance Analytics",
      "Certificate Management"
    ],
    demoLink: "/student-demo",
    color: "bg-gradient-primary"
  },
  {
    icon: UserCheck,
    title: "Curator Account",
    description: "Review student submissions, provide feedback, and monitor course quality.",
    features: [
      "Assignment Review System",
      "Student Progress Monitoring", 
      "Grading & Feedback Tools",
      "Quality Control Dashboard",
      "Performance Reports"
    ],
    demoLink: "/curator-demo",
    color: "bg-gradient-success"
  },
  {
    icon: Star,
    title: "Teacher Portal",
    description: "Create courses, conduct live sessions, and manage your teaching materials.",
    features: [
      "Course Creation Tools",
      "Live Session Management",
      "Student Interaction Hub",
      "Content Library",
      "Teaching Analytics"
    ],
    demoLink: "/teacher-demo",
    color: "bg-gradient-hero"
  },
  {
    icon: Shield,
    title: "Admin Panel",
    description: "Complete platform management with superadmin capabilities and system oversight.",
    features: [
      "User Management System",
      "Platform Analytics",
      "Payment Processing",
      "Content Moderation",
      "System Configuration"
    ],
    demoLink: "/admin-demo",
    color: "bg-primary"
  }
];

const UserAccountsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tailored Experiences for Every User
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides specialized interfaces and tools designed for students, 
            curators, teachers, and administrators to optimize their unique workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-trading group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 ${userType.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{userType.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{userType.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {userType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" asChild className="w-full">
                    <Link to={userType.demoLink}>
                      View Demo Interface
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who've transformed their financial future 
              with our comprehensive trading education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAccountsSection;