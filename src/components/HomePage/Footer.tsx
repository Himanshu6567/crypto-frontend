// import React from "react";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bottom-0 py-4 mt-auto text-white bg-gray-800 ">
//       <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
//         {/* Left side - Company Info */}
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-xl font-bold">Cryptoworld</h2>
//           <p className="text-sm text-gray-400">
//             © {new Date().getFullYear()} All Rights Reserved.
//           </p>
//         </div>

//         <div className="flex space-x-6">
//           <a
//             href="https://github.com/Himanshu6567"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 transition duration-300 hover:text-white"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/himanshu-chandola-361a6924b/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 transition duration-300 hover:text-white"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// Enhanced Footer
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Himanshu6567",
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      hoverColor: "hover:text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/himanshu-chandola-361a6924b/",
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
      <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-gray-900 to-black"></div>

      <div className="container relative z-10 px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Cryptoworld
            </h2>
            <p className="text-sm text-gray-400">
              © {currentYear} Cryptoworld. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="hidden text-sm text-gray-400 sm:block">
              Follow us:
            </span>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-full bg-gray-800 text-gray-400 
                    ${link.hoverColor} hover:bg-gray-700 
                    transition-all duration-300 hover:scale-110
                  `}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="pt-4 mt-8 text-center border-t border-gray-800">
          <p className="text-xs text-gray-500">
            Built with passion for the crypto community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
