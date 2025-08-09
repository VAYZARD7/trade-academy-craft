import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  DollarSign, 
  BookOpen, 
  Shield,
  TrendingUp,
  AlertTriangle,
  Settings,
  Database,
  BarChart3,
  UserCheck,
  CreditCard,
  Activity
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const platformStats = {
    totalUsers: 2847,
    activeStudents: 1956,
    totalTeachers: 47,
    totalCurators: 12,
    monthlyRevenue: 127500,
    totalCourses: 89,
    completionRate: 73,
    avgRating: 4.7
  };

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student", joined: "2 hours ago", status: "active" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Teacher", joined: "5 hours ago", status: "pending" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Student", joined: "1 day ago", status: "active" },
  ];

  const systemAlerts = [
    { id: 1, type: "error", message: "Payment gateway timeout reported", time: "15 min ago", severity: "high" },
    { id: 2, type: "warning", message: "High server load detected", time: "1 hour ago", severity: "medium" },
    { id: 3, type: "info", message: "Scheduled maintenance reminder", time: "3 hours ago", severity: "low" },
  ];

  const revenueData = [
    { month: "Jan", amount: 98500 },
    { month: "Feb", amount: 105200 },
    { month: "Mar", amount: 119800 },
    { month: "Apr", amount: 127500 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Complete platform management and system oversight</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">{platformStats.totalUsers.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-success" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-foreground">${platformStats.monthlyRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                  <p className="text-2xl font-bold text-foreground">{platformStats.totalCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                  <p className="text-2xl font-bold text-foreground">{platformStats.completionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="payments">Payment Analytics</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
            <TabsTrigger value="settings">Platform Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    User Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Students</span>
                      <span className="text-sm font-medium">{platformStats.activeStudents}</span>
                    </div>
                    <Progress value={(platformStats.activeStudents / platformStats.totalUsers) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Teachers</span>
                      <span className="text-sm font-medium">{platformStats.totalTeachers}</span>
                    </div>
                    <Progress value={(platformStats.totalTeachers / platformStats.totalUsers) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Curators</span>
                      <span className="text-sm font-medium">{platformStats.totalCurators}</span>
                    </div>
                    <Progress value={(platformStats.totalCurators / platformStats.totalUsers) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className={`p-3 border rounded-lg ${
                      alert.severity === 'high' ? 'border-destructive/20 bg-destructive/5' :
                      alert.severity === 'medium' ? 'border-primary/20 bg-primary/5' :
                      'border-muted bg-muted/5'
                    }`}>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-4 h-4 ${
                          alert.severity === 'high' ? 'text-destructive' :
                          alert.severity === 'medium' ? 'text-primary' :
                          'text-muted-foreground'
                        }`} />
                        <p className="text-sm font-medium">{alert.message}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">User Management</h2>
              <div className="flex gap-2">
                <Button variant="outline">Export Users</Button>
                <Button>Add User</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <Card key={user.id} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          <Badge variant={user.status === 'active' ? 'secondary' : 'destructive'}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Role: {user.role}</span>
                          <span>Joined: {user.joined}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <UserCheck className="w-4 h-4 mr-2" />
                          Manage
                        </Button>
                        <Button variant="outline" size="sm">
                          <Shield className="w-4 h-4 mr-2" />
                          Permissions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Payment Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Revenue Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="font-medium">{data.month} 2024</span>
                      <span className="text-success font-semibold">${data.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Credit Cards</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">PayPal</span>
                      <span className="text-sm font-medium">22%</span>
                    </div>
                    <Progress value={22} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Bank Transfer</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">System Health & Performance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant="secondary">Healthy</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">CPU Usage</span>
                      <span className="text-sm font-medium">23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Memory</span>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    API Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="text-sm font-medium">145ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Uptime</span>
                      <span className="text-sm font-medium">99.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Error Rate</span>
                      <span className="text-sm font-medium">0.02%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Failed Logins</span>
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">SSL Status</span>
                      <Badge variant="secondary">Valid</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Backup</span>
                      <span className="text-sm font-medium">2h ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">Platform Configuration</h2>
              <Button>
                <Settings className="w-4 h-4 mr-2" />
                Advanced Settings
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform Name</label>
                    <div className="text-sm text-muted-foreground">Trading School Pro</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maintenance Mode</label>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Registration</label>
                    <Badge variant="secondary">Open</Badge>
                  </div>
                  <Button variant="outline">Edit Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Gateway</label>
                    <div className="text-sm text-muted-foreground">Stripe + PayPal</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Currency</label>
                    <div className="text-sm text-muted-foreground">USD</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tax Rate</label>
                    <div className="text-sm text-muted-foreground">8.5%</div>
                  </div>
                  <Button variant="outline">Configure Payments</Button>
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

export default AdminDashboard;