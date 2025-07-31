import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Mail, CheckCircle, AlertCircle, } from "lucide-react";
const GetInTouch = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setMessageType("");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            setMessageType("error");
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch("https://crypto-backend-2y2c.onrender.com/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setMessage("Successfully subscribed to our newsletter!");
                setMessageType("success");
                setEmail("");
            }
            else {
                setMessage("Failed to subscribe. Please try again.");
                setMessageType("error");
            }
        }
        catch (error) {
            setMessage("Error connecting to server. Please check your connection.");
            setMessageType("error");
        }
        setIsLoading(false);
        setTimeout(() => {
            setMessage("");
            setMessageType("");
        }, 5000);
    };
    return (_jsxs("section", { id: "get-in-touch", className: "relative py-24 bg-gradient-to-br from-gray-900 to-black", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" }), _jsx("div", { className: "container relative z-10 px-4 mx-auto", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsxs("div", { className: "mb-12", children: [_jsx(Mail, { className: "w-16 h-16 mx-auto mb-6 text-blue-400" }), _jsx("h2", { className: "mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text", children: "Stay Ahead of the Market" }), _jsx("p", { className: "max-w-2xl mx-auto text-xl leading-relaxed text-gray-400", children: "Get exclusive insights, market analysis, and trading tips delivered straight to your inbox" })] }), _jsx(Card, { className: "max-w-lg mx-auto border-gray-700 bg-gray-800/50 backdrop-blur-sm", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "space-y-2", children: _jsx(Input, { type: "email", placeholder: "Enter your email address", className: "w-full h-12 text-white placeholder-gray-400 border-gray-600 bg-gray-700/50 focus:border-blue-500 focus:ring-blue-500", value: email, onChange: (e) => setEmail(e.target.value), disabled: isLoading, onKeyDown: (e) => {
                                                        if (e.key === "Enter" && email) {
                                                            handleSubmit(e);
                                                        }
                                                    } }) }), _jsx(Button, { onClick: handleSubmit, disabled: isLoading || !email, className: "w-full h-12 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50", children: isLoading ? (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin" }), "Subscribing..."] })) : ("Subscribe to Newsletter") })] }), message && (_jsx("div", { className: "mt-6", children: _jsxs(Alert, { className: `${messageType === "success"
                                                ? "border-green-500 bg-green-500/10"
                                                : "border-red-500 bg-red-500/10"}`, children: [messageType === "success" ? (_jsx(CheckCircle, { className: "w-4 h-4 text-green-400" })) : (_jsx(AlertCircle, { className: "w-4 h-4 text-red-400" })), _jsx(AlertDescription, { className: `${messageType === "success"
                                                        ? "text-green-300"
                                                        : "text-red-300"}`, children: message })] }) }))] }) })] }) })] }));
};
export default GetInTouch;
