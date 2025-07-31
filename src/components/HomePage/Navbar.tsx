

import  { useState, useEffect } from "react";
import { Menu,  TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container px-4 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 transition-transform duration-200 transform shadow-lg lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl hover:scale-105">
                <Link to={"/"}>
                  <TrendingUp className="w-5 h-5 text-white lg:w-6 lg:h-6" />
                </Link>
              </div>
              <div className="absolute w-3 h-3 rounded-full -top-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-transparent lg:text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                Cryptoworld
              </h1>
              <span className="hidden text-xs text-gray-500 sm:block">
                Real-time Crypto Data
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative flex items-center px-4 py-2 space-x-2 text-gray-700 transition-all duration-200 rounded-lg group hover:text-blue-600"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="font-medium">{item.name}</span>
                <div className="absolute inset-0 transition-opacity duration-200 rounded-lg opacity-0 bg-blue-50 group-hover:opacity-100 -z-10"></div>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="items-center hidden space-x-4 lg:flex">
            {/* <Button
              variant="outline"
              className="text-blue-700 border-blue-200 hover:bg-blue-50"
            >
              Sign In
            </Button> */}
            <Button className="text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {isOpen ? (
                    // <X className="w-6 h-6" />
                    <span></span>
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center space-x-3">
                    {/* <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                      Cryptoworld
                    </span> */}
                  </SheetTitle>
                  {/* <SheetDescription>
                    Navigate through crypto markets and insights
                  </SheetDescription> */}
                </SheetHeader>

                <div className="flex flex-col mt-8 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 space-x-3 text-gray-700 transition-all duration-200 rounded-lg hover:text-blue-600 bg-blue-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="text-lg font-medium">{item.name}</span>
                    </a>
                  ))}

                  <div className="pt-6 space-y-3 border-t">
                    {/* <Button
                      variant="outline"
                      className="w-full text-blue-700 border-blue-200 hover:bg-blue-50"
                    >
                      Sign In
                    </Button> */}
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
