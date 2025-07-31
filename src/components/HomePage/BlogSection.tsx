

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronRight, Clock, User, TrendingUp, Shield, BarChart3, BookOpen, Cpu } from "lucide-react";

const BlogSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const questions = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "What are the key principles of investing in digital currencies?",
      category: "Investment"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "How can I minimize risks while trading cryptocurrencies?",
      category: "Risk Management"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "What strategies can help in analyzing cryptocurrency trends?",
      category: "Analysis"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "What resources are available for learning about cryptocurrency trading?",
      category: "Education"
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      text: "How does blockchain technology support digital currencies?",
      category: "Technology"
    },
  ];

  const blogPosts = [
    {
      title: "Understanding Digital Currency Basics",
      description: "A beginner's guide to the fundamentals of cryptocurrency trading.",
      imageUrl: "/share2.png",
      content: "In this post, we will explore the fundamental concepts that every digital currency investor should know. We'll cover key terms, how blockchain works, and the different types of cryptocurrencies.",
      readTime: "5 min read",
      author: "Alex Chen",
      date: "Dec 15, 2024",
      category: "Beginner",
      trending: true
    },
    {
      title: "How to Analyze Cryptocurrency Trends",
      description: "Learn the techniques to evaluate cryptocurrency market trends effectively.",
      imageUrl: "/analysis3.jpg",
      content: "This article provides an in-depth analysis of various tools and methods used to track cryptocurrency trends. From blockchain analytics to technical analysis, we break down what you need to know.",
      readTime: "8 min read",
      author: "Sarah Kim",
      date: "Dec 12, 2024",
      category: "Analysis",
      trending: false
    },
    {
      title: "Investing Strategies for Long-term Crypto Growth",
      description: "Discover effective strategies to grow your crypto investments.",
      imageUrl: "/digital.png",
      content: "Long-term investing in digital currencies can yield significant returns. In this post, we discuss different strategies that can help cryptocurrency investors achieve their financial goals over time.",
      readTime: "6 min read",
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      category: "Strategy",
      trending: true
    },
    {
      title: "The Importance of Diversifying Your Crypto Portfolio",
      description: "Why diversifying your cryptocurrency holdings is crucial for success.",
      imageUrl: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200",
      content: "This blog post outlines the importance of diversification in cryptocurrency investing. Learn how to spread your investments across various digital assets to minimize risk.",
      readTime: "7 min read",
      author: "Emma Thompson",
      date: "Dec 8, 2024",
      category: "Portfolio",
      trending: false
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text">
            From the Blog
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Stay informed with expert insights, market analysis, and educational content about cryptocurrency trading and blockchain technology.
          </p>
        </div>

        {/* Questions Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 md:text-3xl">
                Questions to Consider
              </CardTitle>
              <CardDescription className="mt-2 text-lg text-gray-600">
                Essential questions every crypto investor should explore
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 space-x-4 transition-all duration-300 cursor-pointer group rounded-xl hover:bg-blue-50/50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white transition-transform duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110">
                      {question.icon}
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {question.category}
                      </Badge>
                      <p className="text-sm leading-relaxed text-gray-700 transition-colors group-hover:text-gray-900">
                        {question.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-sm ${
                hoveredCard === index ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-56 transition-transform duration-700 sm:h-64 group-hover:scale-110"
                />
                {post.trending && (
                  <div className="absolute z-20 top-4 left-4">
                    <Badge className="text-white bg-red-500 shadow-lg hover:bg-red-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <div className="absolute z-20 top-4 right-4">
                  <Badge variant="secondary" className="text-gray-700 shadow-lg bg-white/90">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>

                <CardTitle className="mb-3 text-xl font-bold text-gray-900 transition-colors sm:text-2xl group-hover:text-blue-900 line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="mb-4 text-base text-gray-600 line-clamp-2">
                  {post.description}
                </CardDescription>
                
                <p className="mb-6 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  {post.content}
                </p>

                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    className="h-auto p-0 font-semibold text-blue-600 group/btn hover:text-blue-800 hover:bg-transparent"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Button>
                  
                  <div className="text-xs text-gray-400">
                    3 min ago
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <Card className="text-white border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-8 sm:p-12">
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                Want to Stay Updated? hbhhhhhhh
              </h3>
              <p className="max-w-2xl mx-auto mb-6 text-lg text-blue-100">
                Subscribe to our newsletter and never miss the latest insights on cryptocurrency trading and blockchain technology.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 font-semibold text-blue-600 bg-white hover:bg-gray-50"
              >
                Subscribe Nowmnnnmn
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;