import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Enhanced Footer
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            href: "https://github.com/Himanshu6567",
            icon: _jsx(FaGithub, { className: "w-5 h-5" }),
            label: "GitHub",
            hoverColor: "hover:text-gray-300",
        },
        {
            href: "https://www.linkedin.com/in/himanshu-chandola-361a6924b/",
            icon: _jsx(FaLinkedin, { className: "w-5 h-5" }),
            label: "LinkedIn",
            hoverColor: "hover:text-blue-400",
        },
    ];
    return (_jsxs("footer", { className: "border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm", children: [_jsx("div", { className: "absolute inset-0 opacity-50 bg-gradient-to-r from-gray-900 to-black" }), _jsxs("div", { className: "container relative z-10 px-4 py-8 mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0", children: [_jsxs("div", { className: "text-center md:text-left", children: [_jsx("h2", { className: "mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text", children: "Cryptoworld" }), _jsxs("p", { className: "text-sm text-gray-400", children: ["\u00A9 ", currentYear, " Cryptoworld. All rights reserved."] })] }), _jsxs("div", { className: "flex items-center space-x-6", children: [_jsx("span", { className: "hidden text-sm text-gray-400 sm:block", children: "Follow us:" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: `
                    p-2 rounded-full bg-gray-800 text-gray-400 
                    ${link.hoverColor} hover:bg-gray-700 
                    transition-all duration-300 hover:scale-110
                  `, "aria-label": link.label, children: link.icon }, index))) })] })] }), _jsx("div", { className: "pt-4 mt-8 text-center border-t border-gray-800", children: _jsx("p", { className: "text-xs text-gray-500", children: "Built with passion for the crypto community" }) })] })] }));
};
export default Footer;
