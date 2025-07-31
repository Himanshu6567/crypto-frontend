

import  { useState, useEffect } from "react";
import {
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  RefreshCw,

} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const NotFoundPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  // Create floating elements for background animation
  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setFloatingElements(elements);
  }, []);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Explore Coins", href: "/coins", icon: TrendingUp },
    { name: "Markets", href: "/markets", icon: Search },
    { name: "Portfolio", href: "/portfolio", icon: Sparkles },
  ];

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-bounce"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDuration: `${element.duration}s`,
              animationDelay: `${element.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-4">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          {/* 404 Animation */}
          <div className="relative">
            <div className="text-6xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-pulse">
              404
            </div>
            <div className="absolute inset-0 text-6xl font-black md:text-7xl text-blue-200/30 blur-sm">
              404
            </div>

            {/* Floating Warning Icon */}
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <AlertTriangle className="w-8 h-8 text-yellow-500 animate-bounce" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Oops! Page Not Found
            </h1>
            <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
              The crypto market moves fast, but this page moved faster than we
              could track! It seems the page you're looking for has vanished
              into the blockchain.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="max-w-md mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center space-x-2 text-base">
                <Search className="w-4 h-4 text-blue-600" />
                <span>Find What You Need</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Search coins, markets, news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button
                  onClick={handleSearch}
                  className="transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <div className="grid max-w-2xl grid-cols-2 gap-3 mx-auto md:grid-cols-4">
            {quickLinks.map((link) => (
              <Card
                key={link.name}
                className="transition-all duration-300 border-0 cursor-pointer group hover:shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80"
              >
                <CardContent className="p-3 text-center">
                  <link.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 transition-colors duration-200 group-hover:text-purple-600" />
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">
                    {link.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="transition-all duration-200 border-blue-200 group bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
              Go Back
            </Button>

            <Button
              size="sm"
              className="transition-all duration-200 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="transition-all duration-200 border-green-200 group bg-white/80 backdrop-blur-sm hover:bg-green-50 hover:border-green-300"
            >
              <RefreshCw className="w-4 h-4 mr-2 transition-transform duration-500 group-hover:rotate-180" />
              Reload Page
            </Button>
          </div>

          {/* Help Section */}
          {/* <Card className="max-w-md mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center space-x-2 text-lg text-gray-800">
                <Mail className="w-5 h-5" />
                <span>Still Need Help?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 text-center text-gray-600">
                Our crypto experts are here to help you navigate the markets.
              </CardDescription>
              <Button
                variant="outline"
                className="w-full transition-colors duration-200 bg-white hover:bg-gray-50"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </div>
  );
};

export default NotFoundPage;
