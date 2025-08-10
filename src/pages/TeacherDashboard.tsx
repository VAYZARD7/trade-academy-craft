import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Video, 
  Users, 
  BookOpen, 
  Calendar,
  MessageSquare,
  TrendingUp,
  Play,
  Plus,
  Upload
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GradingSystem from "@/components/GradingSystem";

const TeacherDashboard = () => {
  const mockSubmissions = [
    {
      id: "1",
      studentName: "John Doe",
      studentEmail: "john@example.com",
      title: "Market Analysis Report",
      description: "Detailed analysis of current market trends and trading opportunities.",
      files: ["market-analysis.pdf", "charts.xlsx"],
      submittedAt: "2024-03-10T10:30:00Z",
      status: "pending" as const
    },
    {
      id: "2",
      studentName: "Jane Smith",
      studentEmail: "jane@example.com",
      title: "Trading Strategy Presentation",
      description: "Comprehensive trading strategy with risk management approach.",
      files: ["strategy-presentation.pptx"],
      submittedAt: "2024-03-09T14:20:00Z",
      status: "graded" as const,
      grade: 88,
      feedback: "Excellent work on risk management analysis. Consider adding more historical backtesting data."
    }
  ];

  const upcomingSessions = [
    { id: 1, title: "Advanced Chart Patterns", date: "Today, 2:00 PM", students: 24, type: "live" },
    { id: 2, title: "Risk Management Strategies", date: "Tomorrow, 10:00 AM", students: 18, type: "workshop" },
    { id: 3, title: "Market Psychology", date: "Friday, 3:00 PM", students: 32, type: "webinar" },
  ];

  const myCourses = [
    { id: 1, title: "Technical Analysis Masterclass", students: 156, completion: 78, rating: 4.8 },
    { id: 2, title: "Options Trading Fundamentals", students: 89, completion: 65, rating: 4.6 },
    { id: 3, title: "Cryptocurrency Trading", students: 203, completion: 72, rating: 4.9 },
  ];

  const studentInteractions = [
    { id: 1, student: "Emma Thompson", course: "Technical Analysis", message: "Question about RSI divergence patterns", time: "10 min ago", status: "unread" },
    { id: 2, student: "David Kim", course: "Options Trading", message: "Thank you for the detailed explanation!", time: "1 hour ago", status: "read" },
    { id: 3, student: "Lisa Rodriguez", course: "Crypto Trading", message: "Could you review my trading plan?", time: "2 hours ago", status: "unread" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Teacher Portal</h1>
          <p className="text-muted-foreground">Manage your courses, conduct live sessions, and engage with students</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">448</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-success" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Video className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Live Sessions</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Avg. Rating</p>
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="grading">Grade Assignments</TabsTrigger>
            <TabsTrigger value="sessions">Live Sessions</TabsTrigger>
            <TabsTrigger value="interactions">Student Interactions</TabsTrigger>
            <TabsTrigger value="content">Content Library</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Course Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Course
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myCourses.map((course) => (
                <Card key={course.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="secondary">{course.students} students</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Course Completion</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl">⭐</span>
                        <span className="font-semibold">{course.rating}</span>
                        <span className="text-sm text-muted-foreground">rating</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Analytics</Button>
                        <Button size="sm">Manage Course</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grading" className="space-y-6">
            <GradingSystem
              submissions={mockSubmissions}
              onGrade={(submissionId, grade, feedback) => {
                console.log("Graded:", { submissionId, grade, feedback });
              }}
            />
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Upcoming Live Sessions</h2>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Session
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{session.title}</h3>
                          <Badge variant={session.type === 'live' ? 'destructive' : session.type === 'workshop' ? 'default' : 'secondary'}>
                            {session.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{session.date}</p>
                        <p className="text-sm text-muted-foreground">{session.students} students registered</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Reschedule
                        </Button>
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Start Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Student Messages & Questions</h2>
            
            <div className="space-y-4">
              {studentInteractions.map((interaction) => (
                <Card key={interaction.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{interaction.student}</h3>
                          <Badge variant={interaction.status === 'unread' ? 'destructive' : 'secondary'}>
                            {interaction.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{interaction.course}</p>
                        <p className="text-muted-foreground">{interaction.message}</p>
                        <p className="text-xs text-muted-foreground">{interaction.time}</p>
                      </div>
                      <Button size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Content Library</h2>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Content
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Video Lectures</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Videos</span>
                      <span className="font-medium">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Duration</span>
                      <span className="font-medium">34.5 hours</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Manage Videos</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">PDFs</span>
                      <span className="font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Presentations</span>
                      <span className="font-medium">15</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Manage Files</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Templates</span>
                      <span className="font-medium">12</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Create Assignment</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherDashboard;