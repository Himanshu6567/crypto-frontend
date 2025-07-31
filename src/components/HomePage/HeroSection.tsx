
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { TrendingUp, BarChart3, Target, Zap, ArrowRight, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: TrendingUp, label: "Real-time Analytics", color: "text-emerald-400" },
    { icon: BarChart3, label: "Portfolio Insights", color: "text-blue-400" },
    { icon: Target, label: "Smart Targeting", color: "text-purple-400" },
    { icon: Zap, label: "Instant Alerts", color: "text-yellow-400" }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50k+", label: "Active Users" },
    { value: "2.5M+", label: "Trades Analyzed" }
  ];

  return (
    <section className="relative min-h-screen px-1 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg%22%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
      
      {/* Floating orbs */}
      <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="flex flex-col items-center justify-between min-h-screen lg:flex-row">
          
          {/* Left Content */}
          <div className={`lg:w-1/2 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 backdrop-blur-md border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">AI-Powered Investment Platform</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              <span className="text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text">
                Elevate Your
              </span>
              <br />
              <span className="text-white">Investment</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
                Strategy
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-xl leading-relaxed text-white/80">
              Harness the power of real-time data, AI-driven insights, and expert guidance to transform your stock portfolio into a wealth-building machine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-emerald-500/25 hover:scale-105 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
{/*               
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full border-white/30 hover:bg-white/10 backdrop-blur-md hover:border-emerald-400/50"
              >
                Watch Demo
              </Button> */}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold lg:text-3xl text-emerald-400">{stat.value}</div>
                  <div className="text-sm font-medium text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className={`lg:w-1/2 mt-16 lg:mt-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            
            {/* Main visual card */}
            <div className="relative">
              <Card className="shadow-2xl bg-white/10 backdrop-blur-xl border-white/20">
                <CardContent className="p-8">
                  
                  {/* Mock chart area */}
                  <div className="relative flex items-center justify-center h-64 mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    <BarChart3 className="w-16 h-16 text-emerald-400" />
                  </div>

                  {/* Interactive features */}
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                            activeFeature === index
                              ? 'bg-white/20 border border-white/30 scale-105'
                              : 'bg-white/5 border border-white/10 hover:bg-white/10'
                          }`}
                          onMouseEnter={() => setActiveFeature(index)}
                        >
                          <IconComponent className={`w-6 h-6 mb-2 ${feature.color}`} />
                          <div className="text-sm font-medium text-white">{feature.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80 blur-xl animate-bounce"></div>
              <div className="absolute w-16 h-16 rounded-full -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-80 blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className={`mt-20 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="mb-6 text-sm font-medium text-white/60">Trusted by leading investment firms</p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            {/* Mock company logos */}
            <div className="w-24 h-12 rounded bg-white/10 backdrop-blur-md"></div>
            <div className="w-24 h-12 rounded bg-white/10 backdrop-blur-md"></div>
            <div className="w-24 h-12 rounded bg-white/10 backdrop-blur-md"></div>
            <div className="w-24 h-12 rounded bg-white/10 backdrop-blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;