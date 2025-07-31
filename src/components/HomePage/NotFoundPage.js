import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Home, Search, ArrowLeft, Sparkles, TrendingUp, AlertTriangle, RefreshCw, } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, } from "../../components/ui/card";
const NotFoundPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [floatingElements, setFloatingElements] = useState([]);
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
    return (_jsxs("div", { className: "relative h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50", children: [_jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: floatingElements.map((element) => (_jsx("div", { className: "absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-bounce", style: {
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        width: `${element.size}px`,
                        height: `${element.size}px`,
                        animationDuration: `${element.duration}s`,
                        animationDelay: `${element.delay}s`,
                    } }, element.id))) }), _jsx("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-4 py-4", children: _jsxs("div", { className: "max-w-4xl mx-auto space-y-4 text-center", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "text-6xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-pulse", children: "404" }), _jsx("div", { className: "absolute inset-0 text-6xl font-black md:text-7xl text-blue-200/30 blur-sm", children: "404" }), _jsx("div", { className: "absolute top-0 right-0 transform translate-x-2 -translate-y-2", children: _jsx(AlertTriangle, { className: "w-8 h-8 text-yellow-500 animate-bounce" }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 md:text-3xl", children: "Oops! Page Not Found" }), _jsx("p", { className: "max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg", children: "The crypto market moves fast, but this page moved faster than we could track! It seems the page you're looking for has vanished into the blockchain." })] }), _jsxs(Card, { className: "max-w-md mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm", children: [_jsx(CardHeader, { className: "pb-2", children: _jsxs(CardTitle, { className: "flex items-center justify-center space-x-2 text-base", children: [_jsx(Search, { className: "w-4 h-4 text-blue-600" }), _jsx("span", { children: "Find What You Need" })] }) }), _jsx(CardContent, { className: "pt-0", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { type: "text", placeholder: "Search coins, markets, news...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "flex-1 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500" }), _jsx(Button, { onClick: handleSearch, className: "transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700", children: _jsx(Search, { className: "w-4 h-4" }) })] }) })] }), _jsx("div", { className: "grid max-w-2xl grid-cols-2 gap-3 mx-auto md:grid-cols-4", children: quickLinks.map((link) => (_jsx(Card, { className: "transition-all duration-300 border-0 cursor-pointer group hover:shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80", children: _jsxs(CardContent, { className: "p-3 text-center", children: [_jsx(link.icon, { className: "w-6 h-6 mx-auto mb-2 text-blue-600 transition-colors duration-200 group-hover:text-purple-600" }), _jsx("h3", { className: "text-sm font-semibold text-gray-800 group-hover:text-gray-900", children: link.name })] }) }, link.name))) }), _jsxs("div", { className: "flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3", children: [_jsxs(Button, { variant: "outline", size: "sm", className: "transition-all duration-200 border-blue-200 group bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-300", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" }), "Go Back"] }), _jsxs(Button, { size: "sm", className: "transition-all duration-200 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl", children: [_jsx(Home, { className: "w-4 h-4 mr-2" }), "Back to Home"] }), _jsxs(Button, { variant: "outline", size: "sm", className: "transition-all duration-200 border-green-200 group bg-white/80 backdrop-blur-sm hover:bg-green-50 hover:border-green-300", children: [_jsx(RefreshCw, { className: "w-4 h-4 mr-2 transition-transform duration-500 group-hover:rotate-180" }), "Reload Page"] })] })] }) }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" })] }));
};
export default NotFoundPage;
