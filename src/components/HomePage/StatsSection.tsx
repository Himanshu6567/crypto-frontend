// import React from "react";

// const CryptoStatsSection: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-800 text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-12">Cryptocurrency Market Statistics</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center">
//             <span className="text-6xl font-bold mb-2">10,000+</span>
//             <p className="text-gray-300">Cryptocurrencies Listed</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-6xl font-bold mb-2">1.5B</span>
//             <p className="text-gray-300">Daily Transactions</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-6xl font-bold mb-2">5.2%</span>
//             <p className="text-gray-300">Market Growth</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CryptoStatsSection;



import React, { useState, useEffect } from "react";
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Alert, AlertDescription } from '../..components/ui/alert';
import { TrendingUp, Users, Globe, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";

// Enhanced Stats Section with modern glassmorphism design
const CryptoStatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    cryptos: 0,
    transactions: 0,
    growth: 0
  });

  const targetNumbers = {
    cryptos: 10000,
    transactions: 1.5,
    growth: 5.2
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate numbers
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      
      setAnimatedNumbers({
        cryptos: Math.floor(targetNumbers.cryptos * easeProgress),
        transactions: +(targetNumbers.transactions * easeProgress).toFixed(1),
        growth: +(targetNumbers.growth * easeProgress).toFixed(1)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targetNumbers);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
      value: `${animatedNumbers.cryptos.toLocaleString()}+`,
      label: "Cryptocurrencies Listed",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8 mb-4 text-green-400" />,
      value: `${animatedNumbers.transactions}B`,
      label: "Daily Transactions",
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8 mb-4 text-orange-400" />,
      value: `${animatedNumbers.growth}%`,
      label: "Market Growth",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Market Intelligence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time insights into the global cryptocurrency ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`
                relative group bg-gray-900/50 backdrop-blur-sm border-gray-700 
                hover:border-gray-600 transition-all duration-500 hover:scale-105
                ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoStatsSection;