// const GetInTouch: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage("Successfully subscribed!");

//         setTimeout(() => {
//           setMessage("");
//         }, 2000);
//       } else {
//         setMessage("Failed to subscribe. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Error connecting to server.");
//     }

//     setEmail("");
//   };

//   return (
//     <section id="get-in-touch" className="py-16 text-white bg-gray-900">
//       <div className="container px-4 mx-auto">
//         <h2 className="mb-8 text-4xl font-bold text-center">
//           Stay Connected with Us
//         </h2>
//         <p className="mb-12 text-lg text-center text-gray-400">
//           Enter your email below to get the latest updates on the cryptocurrency
//           market, tips, and more!
//         </p>
//         <div className="max-w-lg mx-auto">
//           <form onSubmit={handleSubmit} className="flex flex-col items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-4 mx-10 mb-4 text-black rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
//             >
//               Get In Touch
//             </button>
//           </form>
//           {message && <p className="mt-4">{message}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetInTouch;

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Alert, AlertDescription } from "../../components/ui/alert";
import {
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const GetInTouch: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
      } else {
        setMessage("Failed to subscribe. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Error connecting to server. Please check your connection.");
      setMessageType("error");
    }

    setIsLoading(false);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    <section
      id="get-in-touch"
      className="relative py-24 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              Stay Ahead of the Market
            </h2>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400">
              Get exclusive insights, market analysis, and trading tips
              delivered straight to your inbox
            </p>
          </div>

          <Card className="max-w-lg mx-auto border-gray-700 bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-12 text-white placeholder-gray-400 border-gray-600 bg-gray-700/50 focus:border-blue-500 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && email) {
                        handleSubmit(e as any);
                      }
                    }}
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className="w-full h-12 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe to Newsletter"
                  )}
                </Button>
              </div>

              {message && (
                <div className="mt-6">
                  <Alert
                    className={`${
                      messageType === "success"
                        ? "border-green-500 bg-green-500/10"
                        : "border-red-500 bg-red-500/10"
                    }`}
                  >
                    {messageType === "success" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                    <AlertDescription
                      className={`${
                        messageType === "success"
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {message}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
