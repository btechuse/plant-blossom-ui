import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, ArrowRight, Droplets, Camera, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import plantLogo from "@/assets/plant-logo.png";
import heroPlants from "@/assets/hero-plants.jpg";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const features = [
    {
      icon: Camera,
      title: "Disease Detection",
      description: "AI-powered plant disease identification",
      color: "text-blue-600"
    },
    {
      icon: Droplets,
      title: "Smart Watering",
      description: "Automated irrigation based on soil moisture",
      color: "text-cyan-600"
    },
    {
      icon: MessageSquare,
      title: "Plant Assistant",
      description: "Get expert advice from our AI chatbot",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Track plant health and progress over time",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPlants}
            alt="Smart Plant Care"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <img src={plantLogo} alt="PlantCareAI" className="h-16 w-16 mr-4" />
              <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PlantCareAI
              </h1>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Smart Plant Care with AI Technology
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Monitor your plants' health, detect diseases early, and automate watering 
              with our intelligent plant care system. Experience the future of gardening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/login")}
                size="lg"
                className="gradient-primary text-white hover:opacity-90 shadow-soft px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg hover-lift"
                onClick={() => navigate("/dashboard")}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need for Plant Care
          </h3>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI-powered tools to keep your plants healthy and thriving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="hover-lift shadow-card border-border/50 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 dark:bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Plant Care?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of gardeners using AI to grow healthier plants
            </p>
            <Button 
              onClick={() => navigate("/login")}
              size="lg"
              className="gradient-primary text-white hover:opacity-90 shadow-soft px-8 py-4 text-lg"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Start Your Plant Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
