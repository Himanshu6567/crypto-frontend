import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronRight, Clock, User, TrendingUp, Shield, BarChart3, BookOpen, Cpu } from "lucide-react";
const BlogSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const questions = [
        {
            icon: _jsx(TrendingUp, { className: "w-5 h-5" }),
            text: "What are the key principles of investing in digital currencies?",
            category: "Investment"
        },
        {
            icon: _jsx(Shield, { className: "w-5 h-5" }),
            text: "How can I minimize risks while trading cryptocurrencies?",
            category: "Risk Management"
        },
        {
            icon: _jsx(BarChart3, { className: "w-5 h-5" }),
            text: "What strategies can help in analyzing cryptocurrency trends?",
            category: "Analysis"
        },
        {
            icon: _jsx(BookOpen, { className: "w-5 h-5" }),
            text: "What resources are available for learning about cryptocurrency trading?",
            category: "Education"
        },
        {
            icon: _jsx(Cpu, { className: "w-5 h-5" }),
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
    return (_jsx("section", { className: "py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20", children: _jsxs("div", { className: "container px-4 mx-auto lg:px-8 max-w-7xl", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full", children: [_jsx(BookOpen, { className: "w-4 h-4 mr-2" }), "Latest Insights"] }), _jsx("h2", { className: "mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text", children: "From the Blog" }), _jsx("p", { className: "max-w-2xl mx-auto text-xl text-gray-600", children: "Stay informed with expert insights, market analysis, and educational content about cryptocurrency trading and blockchain technology." })] }), _jsx("div", { className: "mb-16", children: _jsxs(Card, { className: "border-0 shadow-xl bg-white/80 backdrop-blur-sm", children: [_jsxs(CardHeader, { className: "pb-6 text-center", children: [_jsx(CardTitle, { className: "text-2xl font-bold text-gray-900 md:text-3xl", children: "Questions to Consider" }), _jsx(CardDescription, { className: "mt-2 text-lg text-gray-600", children: "Essential questions every crypto investor should explore" })] }), _jsx(CardContent, { children: _jsx("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3", children: questions.map((question, index) => (_jsxs("div", { className: "flex items-start p-4 space-x-4 transition-all duration-300 cursor-pointer group rounded-xl hover:bg-blue-50/50", children: [_jsx("div", { className: "flex items-center justify-center flex-shrink-0 w-10 h-10 text-white transition-transform duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110", children: question.icon }), _jsxs("div", { className: "flex-1", children: [_jsx(Badge, { variant: "secondary", className: "mb-2 text-xs", children: question.category }), _jsx("p", { className: "text-sm leading-relaxed text-gray-700 transition-colors group-hover:text-gray-900", children: question.text })] })] }, index))) }) })] }) }), _jsx("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-2", children: blogPosts.map((post, index) => (_jsxs(Card, { className: `group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-sm ${hoveredCard === index ? 'scale-[1.02]' : ''}`, onMouseEnter: () => setHoveredCard(index), onMouseLeave: () => setHoveredCard(null), children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" }), _jsx("img", { src: post.imageUrl, alt: post.title, className: "object-cover w-full h-56 transition-transform duration-700 sm:h-64 group-hover:scale-110" }), post.trending && (_jsx("div", { className: "absolute z-20 top-4 left-4", children: _jsxs(Badge, { className: "text-white bg-red-500 shadow-lg hover:bg-red-600", children: [_jsx(TrendingUp, { className: "w-3 h-3 mr-1" }), "Trending"] }) })), _jsx("div", { className: "absolute z-20 top-4 right-4", children: _jsx(Badge, { variant: "secondary", className: "text-gray-700 shadow-lg bg-white/90", children: post.category }) })] }), _jsxs(CardContent, { className: "p-6 sm:p-8", children: [_jsxs("div", { className: "flex items-center mb-4 space-x-4 text-sm text-gray-500", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(User, { className: "w-4 h-4 mr-1" }), post.author] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "w-4 h-4 mr-1" }), post.readTime] }), _jsx("span", { children: post.date })] }), _jsx(CardTitle, { className: "mb-3 text-xl font-bold text-gray-900 transition-colors sm:text-2xl group-hover:text-blue-900 line-clamp-2", children: post.title }), _jsx(CardDescription, { className: "mb-4 text-base text-gray-600 line-clamp-2", children: post.description }), _jsx("p", { className: "mb-6 text-sm leading-relaxed text-gray-500 line-clamp-3", children: post.content }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(Button, { variant: "ghost", className: "h-auto p-0 font-semibold text-blue-600 group/btn hover:text-blue-800 hover:bg-transparent", children: ["Read More", _jsx(ChevronRight, { className: "w-4 h-4 ml-1 transition-transform duration-200 group-hover/btn:translate-x-1" })] }), _jsx("div", { className: "text-xs text-gray-400", children: "3 min ago" })] })] })] }, index))) }), _jsx("div", { className: "mt-16 text-center", children: _jsx(Card, { className: "text-white border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600", children: _jsxs(CardContent, { className: "p-8 sm:p-12", children: [_jsx("h3", { className: "mb-4 text-2xl font-bold sm:text-3xl", children: "Want to Stay Updated?" }), _jsx("p", { className: "max-w-2xl mx-auto mb-6 text-lg text-blue-100", children: "Subscribe to our newsletter and never miss the latest insights on cryptocurrency trading and blockchain technology." }), _jsxs(Button, { size: "lg", variant: "secondary", className: "px-8 font-semibold text-blue-600 bg-white hover:bg-gray-50", children: ["Subscribe Now", _jsx(ChevronRight, { className: "w-4 h-4 ml-2" })] })] }) }) })] }) }));
};
export default BlogSection;
