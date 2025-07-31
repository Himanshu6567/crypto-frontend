// import React from "react";

// const BlogSection: React.FC = () => {
//   const questions = [
//     "What are the key principles of investing in digital currencies?",
//     "How can I minimize risks while trading cryptocurrencies?",
//     "What strategies can help in analyzing cryptocurrency trends?",
//     "What resources are available for learning about cryptocurrency trading?",
//     "How does blockchain technology support digital currencies?",
//   ];

//   const blogPosts = [
//     {
//       title: "Understanding Digital Currency Basics",
//       description:
//         "A beginner's guide to the fundamentals of cryptocurrency trading.",
//       imageUrl: "/share2.png",
//       content:
//         "In this post, we will explore the fundamental concepts that every digital currency investor should know. We'll cover key terms, how blockchain works, and the different types of cryptocurrencies.",
//     },
//     {
//       title: "How to Analyze Cryptocurrency Trends",
//       description:
//         "Learn the techniques to evaluate cryptocurrency market trends effectively.",
//       imageUrl: "/analysis3.jpg",
//       content:
//         "This article provides an in-depth analysis of various tools and methods used to track cryptocurrency trends. From blockchain analytics to technical analysis, we break down what you need to know.",
//     },
//     {
//       title: "Investing Strategies for Long-term Crypto Growth",
//       description:
//         "Discover effective strategies to grow your crypto investments.",
//       imageUrl:"/digital.png",content:
//         "Long-term investing in digital currencies can yield significant returns. In this post, we discuss different strategies that can help cryptocurrency investors achieve their financial goals over time.",
//     },
//     {
//       title: "The Importance of Diversifying Your Crypto Portfolio",
//       description:
//         "Why diversifying your cryptocurrency holdings is crucial for success.",
//       imageUrl:
//         "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       content:
//         "This blog post outlines the importance of diversification in cryptocurrency investing. Learn how to spread your investments across various digital assets to minimize risk.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white text-gray-700">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">From the Blog</h2>
//         <div className="mb-8">
//           <h3 className="text-2xl font-semibold text-center mb-4">
//             Questions to Consider
//           </h3>
//           <ul className="list-disc list-inside">
//             {questions.map((question, index) => (
//               <li key={index} className="text-lg text-gray-600">
//                 {question}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
//             >
//               <img
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                 <p className="text-gray-600">{post.description}</p>
//                 <p className="text-gray-500 mt-4">{post.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


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
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            From the Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert insights, market analysis, and educational content about cryptocurrency trading and blockchain technology.
          </p>
        </div>

        {/* Questions Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                Questions to Consider
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Essential questions every crypto investor should explore
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {question.icon}
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {question.category}
                      </Badge>
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {post.trending && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700 shadow-lg">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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

                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 text-base mb-4 line-clamp-2">
                  {post.description}
                </CardDescription>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.content}
                </p>

                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-800 hover:bg-transparent"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
        <div className="text-center mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Want to Stay Updated?
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on cryptocurrency trading and blockchain technology.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8"
              >
                Subscribe Now
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;