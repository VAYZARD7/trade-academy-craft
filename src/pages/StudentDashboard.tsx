import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award,
  MessageCircle,
  Calendar,
  BarChart3,
  Upload
} from "lucide-react";
import HomeworkSubmission from "@/components/HomeworkSubmission";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
            <p className="text-muted-foreground">Continue your trading education journey</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">3/5</p>
                    <p className="text-sm text-muted-foreground">Courses Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">47h</p>
                    <p className="text-sm text-muted-foreground">Study Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">85%</p>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">2</p>
                    <p className="text-sm text-muted-foreground">Certificates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Courses */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Current Courses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-foreground">Advanced Technical Analysis</h3>
                      <span className="text-sm text-muted-foreground">75% Complete</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-sm text-muted-foreground">Next: Chart Pattern Recognition</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-foreground">Risk Management Strategies</h3>
                      <span className="text-sm text-muted-foreground">45% Complete</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-sm text-muted-foreground">Next: Position Sizing</p>
                  </div>
                </CardContent>
              </Card>

              {/* Assignments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5" />
                    <span>Pending Assignments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <HomeworkSubmission
                    assignmentId="1"
                    assignmentTitle="Market Analysis Report"
                    dueDate="March 15, 2024"
                    onSubmit={(data) => console.log("Submitted:", data)}
                  />
                  
                  <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-semibold text-foreground">Trading Strategy Presentation</h3>
                      <p className="text-sm text-muted-foreground">Due: March 20, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">Submit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Live Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Upcoming Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Market Analysis Live</h4>
                    <p className="text-xs text-muted-foreground">Today, 2:00 PM</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm">Q&A with Expert</h4>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">+12.5%</div>
                    <p className="text-sm text-muted-foreground">Portfolio Growth</p>
                    <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                  </div>
                </CardContent>
              </Card>

              {/* Messages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Messages</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Chat with Mentor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentDashboard;