// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-10">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         {/* Logo */}
//         <a
//           href="/"
//           className="text-blue-800 flex justify-center items-center font-bold text-2xl"
//         >
//           <img className="w-16 h-16 " src="/bull.jpg" alt="" /> Cryptoworld
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link
//             to={"/coins"}
//             className="text-blue-700 hover:text-blue-500 transition duration-300"
//           >
//             Explore
//           </Link>
//           {/* <a
//             href="/contact"
//             className="text-blue-700 hover:text-blue-500 transition duration-300"
//           >
//             Get In Touch
//           </a> */}
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none text-blue-700 hover:text-blue-500 transition duration-300"
//           >
//             <GiHamburgerMenu />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <a
//             href="/explore"
//             className="block px-4 py-2 text-blue-700 hover:text-blue-500 transition duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Explore
//           </a>
//           {/* <a
//             href="/contact"
//             className="block px-4 py-2 text-blue-700 hover:text-blue-500 transition duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Get In Touch
//           </a> */}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Link to={"/"}>
                  <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </Link>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Cryptoworld
              </h1>
              <span className="text-xs text-gray-500 hidden sm:block">
                Real-time Crypto Data
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="font-medium">{item.name}</span>
                <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Sign In
            </Button> */}
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 text-white">
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
                    {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Cryptoworld
                    </span> */}
                  </SheetTitle>
                  {/* <SheetDescription>
                    Navigate through crypto markets and insights
                  </SheetDescription> */}
                </SheetHeader>

                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-blue-600 bg-blue-50 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="font-medium  text-lg">{item.name}</span>
                    </a>
                  ))}

                  <div className="border-t pt-6 space-y-3">
                    {/* <Button
                      variant="outline"
                      className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
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
