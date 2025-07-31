// import React from "react";

// const CryptoStatsSection: React.FC = () => {
//   return (
//     <section className="py-16 text-white bg-gray-800">
//       <div className="container px-4 mx-auto text-center">
//         <h2 className="mb-12 text-3xl font-bold">Cryptocurrency Market Statistics</h2>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           <div className="flex flex-col items-center">
//             <span className="mb-2 text-6xl font-bold">10,000+</span>
//             <p className="text-gray-300">Cryptocurrencies Listed</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="mb-2 text-6xl font-bold">1.5B</span>
//             <p className="text-gray-300">Daily Transactions</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="mb-2 text-6xl font-bold">5.2%</span>
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

import { TrendingUp, Users, Globe } from "lucide-react";

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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full top-1/4 left-1/4 blur-3xl animate-pulse"></div>
        <div className="absolute w-40 h-40 delay-1000 bg-purple-500 rounded-full bottom-1/4 right-1/4 blur-3xl animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-green-500 rounded-full top-3/4 left-3/4 blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
            Market Intelligence
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Real-time insights into the global cryptocurrency ecosystem
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
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
                  <div className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    {stat.value}
                  </div>
                  <p className="text-lg font-medium text-gray-400">
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