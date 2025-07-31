// import React from "react";
// const ExploreSection: React.FC = () => {
//   const exploreItems = [
//     {
//       title: "Digital Currency Basics",
//       description: "Learn how digital currencies work and how to invest.",
//       imageUrl: "/learn.jpg",
//       link: "https://www.rba.gov.au/education/resources/explainers/cryptocurrencies.html",
//     },
//     {
//       title: "Risk Management in Crypto",
//       description:
//         "Master the art of managing risk to maximize gains in cryptocurrency.",
//       imageUrl: "/risk.jpg",
//       link: "https://coinswitch.co/switch/crypto/risk-management-in-crypto-trading/#:~:text=You%20can%20follow%20the%201,case%20of%20adverse%20market%20conditions.&text=Traders%20are%20advised%20to%20pre,risk%20management%20in%20crypto%20trading.",
//     },
//     {
//       title: "Crypto Investment Strategies",
//       description:
//         "Explore different strategies to build a strong crypto portfolio.",
//       imageUrl: "/share4.jpg",
//       link: "https://economictimes.indiatimes.com/markets/cryptocurrency/8-best-crypto-investing-strategies-to-follow-mudrex-research-team/articleshow/114208123.cms?from=mdr",
//     },
//     {
//       title: "Cryptocurrency Market Trends",
//       description:
//         "Stay updated with the latest trends in the digital currency market.",
//       imageUrl: "/analysis1.jpg",
//       link: "https://www.fortunebusinessinsights.com/industry-reports/cryptocurrency-market-100149",
//     },
//     {
//       title: "Blockchain Indicators",
//       description:
//         "Learn about key indicators for evaluating the performance of cryptocurrencies.",
//       imageUrl: "/analysis.jpg",
//       link: "https://medium.com/web3prophet/key-performance-indicators-for-a-successful-cryptocurrency-service-in-2024-a219b1eacdb6",
//     },
//     {
//       title: "Crypto Trading Strategies",
//       description:
//         "Discover effective trading strategies for success in the digital currency world.",
//       imageUrl: "/share2.jpg",
//       link: "https://kriptomat.io/finance-investing/top-crypto-trading-strategies-that-every-investor-should-know/",
//     },
//   ];

//   return (
//     <section id="explore" className="py-16 bg-red-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Explore Digital Currencies
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {exploreItems.map((item, index) => (
//             <a
//               href={item.link}
//               target="_blank"
//               key={index}
//               className="bg-red-800 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-300">{item.description}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreSection;
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Target,
  BarChart3,
  Coins,
  BookOpen,
} from "lucide-react";

const ExploreSection: React.FC = () => {
  const exploreItems = [
    {
      title: "Digital Currency Basics",
      description: "Learn how digital currencies work and how to invest.",
      imageUrl: "/learn.jpg",
      link: "https://www.rba.gov.au/education/resources/explainers/cryptocurrencies.html",
      icon: BookOpen,
      category: "Education",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Risk Management in Crypto",
      description:
        "Master the art of managing risk to maximize gains in cryptocurrency.",
      imageUrl: "/risk.jpg",
      link: "https://coinswitch.co/switch/crypto/risk-management-in-crypto-trading/",
      icon: Shield,
      category: "Risk Management",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Crypto Investment Strategies",
      description:
        "Explore different strategies to build a strong crypto portfolio.",
      imageUrl: "/share4.jpg",
      link: "https://economictimes.indiatimes.com/markets/cryptocurrency/8-best-crypto-investing-strategies-to-follow-mudrex-research-team/articleshow/114208123.cms",
      icon: Target,
      category: "Strategy",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Cryptocurrency Market Trends",
      description:
        "Stay updated with the latest trends in the digital currency market.",
      imageUrl: "/analysis1.jpg",
      link: "https://www.fortunebusinessinsights.com/industry-reports/cryptocurrency-market-100149",
      icon: TrendingUp,
      category: "Market Analysis",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Blockchain Indicators",
      description:
        "Learn about key indicators for evaluating the performance of cryptocurrencies.",
      imageUrl: "/analysis.jpg",
      link: "https://medium.com/web3prophet/key-performance-indicators-for-a-successful-cryptocurrency-service-in-2024-a219b1eacdb6",
      icon: BarChart3,
      category: "Analytics",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Crypto Trading Strategies",
      description:
        "Discover effective trading strategies for success in the digital currency world.",
      imageUrl: "/share2.jpg",
      link: "https://kriptomat.io/finance-investing/top-crypto-trading-strategies-that-every-investor-should-know/",
      icon: Coins,
      category: "Trading",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="explore"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 bg-white/10 border-white/20 text-white"
          >
            Explore & Learn
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Master Digital Currencies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Dive deep into cryptocurrency knowledge with our comprehensive
            guides and expert insights
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden cursor-pointer"
                onClick={() => window.open(item.link, "_blank")}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`}
                  ></div>

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 mb-4 line-clamp-3">
                    {item.description}
                  </CardDescription>

                  {/* CTA */}
                  <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to start your cryptocurrency journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Get Started Today
            </button>
            <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Browse All Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
