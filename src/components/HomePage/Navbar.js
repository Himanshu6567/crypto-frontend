import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from "../../components/ui/sheet";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        { name: "Explore", href: "/coins", icon: TrendingUp },
        // { name: "Markets", href: "/markets" },
        // { name: "Portfolio", href: "/portfolio" },
        // { name: "News", href: "/news" },
    ];
    return (_jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-sm"}`, children: _jsx("div", { className: "container px-4 mx-auto lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-16 lg:h-20", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 transition-transform duration-200 transform shadow-lg lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl hover:scale-105", children: _jsx(Link, { to: "/", children: _jsx(TrendingUp, { className: "w-5 h-5 text-white lg:w-6 lg:h-6" }) }) }), _jsx("div", { className: "absolute w-3 h-3 rounded-full -top-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 animate-pulse" })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx("h1", { className: "text-xl font-bold text-transparent lg:text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text", children: "Cryptoworld" }), _jsx("span", { className: "hidden text-xs text-gray-500 sm:block", children: "Real-time Crypto Data" })] })] }), _jsx("div", { className: "items-center hidden space-x-1 lg:flex", children: navItems.map((item) => (_jsxs("a", { href: item.href, className: "relative flex items-center px-4 py-2 space-x-2 text-gray-700 transition-all duration-200 rounded-lg group hover:text-blue-600", children: [item.icon && _jsx(item.icon, { className: "w-4 h-4" }), _jsx("span", { className: "font-medium", children: item.name }), _jsx("div", { className: "absolute inset-0 transition-opacity duration-200 rounded-lg opacity-0 bg-blue-50 group-hover:opacity-100 -z-10" })] }, item.name))) }), _jsx("div", { className: "items-center hidden space-x-4 lg:flex", children: _jsx(Button, { className: "text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl", children: "Get Started" }) }), _jsx("div", { className: "lg:hidden", children: _jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", className: "text-gray-700 hover:text-blue-600 hover:bg-blue-50", children: isOpen ? (
                                        // <X className="w-6 h-6" />
                                        _jsx("span", {})) : (_jsx(Menu, { className: "w-6 h-6" })) }) }), _jsxs(SheetContent, { side: "right", className: "w-full sm:w-80", children: [_jsx(SheetHeader, { className: "text-left", children: _jsx(SheetTitle, { className: "flex items-center space-x-3" }) }), _jsxs("div", { className: "flex flex-col mt-8 space-y-4", children: [navItems.map((item) => (_jsxs("a", { href: item.href, className: "flex items-center p-3 space-x-3 text-gray-700 transition-all duration-200 rounded-lg hover:text-blue-600 bg-blue-50", onClick: () => setIsOpen(false), children: [item.icon && _jsx(item.icon, { className: "w-5 h-5" }), _jsx("span", { className: "text-lg font-medium", children: item.name })] }, item.name))), _jsx("div", { className: "pt-6 space-y-3 border-t", children: _jsx(Button, { className: "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800", children: "Get Started" }) })] })] })] }) })] }) }) }));
};
export default Navbar;
