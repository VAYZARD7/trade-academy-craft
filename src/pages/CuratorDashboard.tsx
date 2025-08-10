import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Clock, 
  User, 
  FileText, 
  Star,
  AlertCircle,
  BarChart3,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GradingSystem from "@/components/GradingSystem";

const CuratorDashboard = () => {
  const mockSubmissions = [
    {
      id: "3",
      studentName: "Alice Johnson",
      studentEmail: "alice@example.com",
      title: "Portfolio Analysis",
      description: "Analysis of diversified trading portfolio with risk assessment.",
      files: ["portfolio-analysis.pdf"],
      submittedAt: "2024-03-11T09:15:00Z",
      status: "pending" as const
    },
    {
      id: "4",
      studentName: "Bob Wilson",
      studentEmail: "bob@example.com",
      title: "Market Research Project",
      description: "Comprehensive research on emerging market opportunities.",
      files: ["market-research.docx", "data-analysis.xlsx"],
      submittedAt: "2024-03-08T16:45:00Z",
      status: "needs_revision" as const,
      grade: 72,
      feedback: "Good analysis but needs more depth in the conclusion section. Please revise and resubmit."
    }
  ];

  const pendingAssignments = [
    { id: 1, student: "John Smith", course: "Technical Analysis", assignment: "Chart Pattern Recognition", submitted: "2 hours ago", priority: "high" },
    { id: 2, student: "Sarah Johnson", course: "Risk Management", assignment: "Portfolio Analysis", submitted: "5 hours ago", priority: "medium" },
    { id: 3, student: "Mike Davis", course: "Forex Trading", assignment: "Currency Pair Analysis", submitted: "1 day ago", priority: "low" },
  ];

  const recentGraded = [
    { id: 1, student: "Emma Wilson", course: "Options Trading", assignment: "Call/Put Strategies", grade: 92, feedback: "Excellent analysis" },
    { id: 2, student: "Alex Turner", course: "Crypto Trading", assignment: "Market Analysis", grade: 87, feedback: "Good insights, minor improvements needed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Curator Dashboard</h1>
          <p className="text-muted-foreground">Review assignments, monitor student progress, and maintain quality standards</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-success" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Completed Today</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Avg. Grade</p>
                  <p className="text-2xl font-bold text-foreground">8.7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
            <TabsTrigger value="grading">Grade Submissions</TabsTrigger>
            <TabsTrigger value="graded">Recently Graded</TabsTrigger>
            <TabsTrigger value="analytics">Quality Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Assignments Awaiting Review</h2>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="space-y-4">
              {pendingAssignments.map((assignment) => (
                <Card key={assignment.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{assignment.student}</h3>
                          <Badge variant={assignment.priority === 'high' ? 'destructive' : assignment.priority === 'medium' ? 'default' : 'secondary'}>
                            {assignment.priority} priority
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{assignment.course} - {assignment.assignment}</p>
                        <p className="text-sm text-muted-foreground">Submitted {assignment.submitted}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Submission</Button>
                        <Button size="sm">Review & Grade</Button>
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

          <TabsContent value="graded" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Recently Graded Assignments</h2>
            
            <div className="space-y-4">
              {recentGraded.map((assignment) => (
                <Card key={assignment.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{assignment.student}</h3>
                        <p className="text-muted-foreground">{assignment.course} - {assignment.assignment}</p>
                        <p className="text-sm text-muted-foreground">Feedback: {assignment.feedback}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-success">{assignment.grade}%</div>
                        <Badge variant="secondary">Graded</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Quality Control Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Grade Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Excellent (90-100%)</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Good (80-89%)</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Satisfactory (70-79%)</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Needs Improvement (&lt;70%)</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Quality Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border border-destructive/20 rounded-lg bg-destructive/5">
                    <p className="text-sm font-medium text-destructive">High Failure Rate Alert</p>
                    <p className="text-xs text-muted-foreground">Options Trading - Module 3 has 15% failure rate</p>
                  </div>
                  <div className="p-3 border border-primary/20 rounded-lg bg-primary/5">
                    <p className="text-sm font-medium text-primary">Content Review Needed</p>
                    <p className="text-xs text-muted-foreground">Forex fundamentals requires curriculum update</p>
                  </div>
                  <div className="p-3 border border-success/20 rounded-lg bg-success/5">
                    <p className="text-sm font-medium text-success">High Performance</p>
                    <p className="text-xs text-muted-foreground">Technical Analysis module exceeding targets</p>
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

export default CuratorDashboard;