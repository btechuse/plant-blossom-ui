import { useState, useEffect } from "react";
import { Camera, Droplets, MessageSquare, TrendingUp, Leaf, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";

export default function Dashboard() {
  const [soilMoisture, setSoilMoisture] = useState(65);
  const [temperature, setTemperature] = useState(22);
  const [humidity, setHumidity] = useState(58);
  const [plantsHealth, setPlantsHealth] = useState(92);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSoilMoisture(prev => Math.max(20, Math.min(100, prev + (Math.random() - 0.5) * 4)));
      setTemperature(prev => Math.max(18, Math.min(28, prev + (Math.random() - 0.5) * 2)));
      setHumidity(prev => Math.max(40, Math.min(80, prev + (Math.random() - 0.5) * 3)));
      setPlantsHealth(prev => Math.max(80, Math.min(100, prev + (Math.random() - 0.5) * 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    {
      title: "Disease Detection",
      description: "Upload plant photos for AI analysis",
      icon: Camera,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      href: "/detection"
    },
    {
      title: "Auto-Watering",
      description: "Monitor and control irrigation",
      icon: Droplets,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      href: "/watering"
    },
    {
      title: "Plant Assistant",
      description: "Chat with AI for plant care tips",
      icon: MessageSquare,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      href: "/chatbot"
    },
    {
      title: "View History",
      description: "Track your plant care activities",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      href: "/history"
    }
  ];

  const recentActivities = [
    { action: "Disease scan completed", plant: "Tomato Plant #1", time: "2 minutes ago", status: "Healthy" },
    { action: "Auto-watering activated", plant: "Herb Garden", time: "1 hour ago", status: "Success" },
    { action: "Moisture alert", plant: "Succulent Collection", time: "3 hours ago", status: "Warning" },
    { action: "Disease detected", plant: "Rose Bush", time: "1 day ago", status: "Action Required" }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to PlantCareAI Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and care for your plants with intelligent automation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Soil Moisture
              </CardTitle>
              <Droplets className="h-4 w-4 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {soilMoisture.toFixed(0)}%
              </div>
              <Progress 
                value={soilMoisture} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Optimal range: 40-80%
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Temperature
              </CardTitle>
              <Activity className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {temperature.toFixed(1)}°C
              </div>
              <div className="text-xs text-muted-foreground">
                Perfect growing conditions
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Humidity
              </CardTitle>
              <Droplets className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {humidity.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">
                Ideal for most plants
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Plants Health
              </CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {plantsHealth.toFixed(0)}%
              </div>
              <Progress 
                value={plantsHealth} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-2">
                All systems healthy
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={action.title} 
                className="hover-lift shadow-card border-border/50 cursor-pointer transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${action.bgColor} flex items-center justify-center mb-4`}>
                    <action.icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Open
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.plant} • {activity.time}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activity.status === "Healthy" || activity.status === "Success" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : activity.status === "Warning"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}