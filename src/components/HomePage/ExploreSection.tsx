
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
import { Link } from "react-router-dom";

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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 text-white bg-white/10 border-white/20"
          >
            Explore & Learn
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-transparent text-white md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Master Digital Currencies
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400">
            Dive deep into cryptocurrency knowledge with our comprehensive
            guides and expert insights
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-500 cursor-pointer group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                onClick={() => window.open(item.link, "_blank")}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`}
                  ></div>

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="text-white bg-white/20 backdrop-blur-sm border-white/30">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-4 text-gray-400 line-clamp-3">
                    {item.description}
                  </CardDescription>

                  {/* CTA */}
                  <div className="flex items-center transition-colors duration-300 text-white/70 group-hover:text-white">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-400">
            Ready to start your cryptocurrency journey?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to={"/coins"} className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-purple-500/25">
              Get Started Today
            </Link>
            <Link to={"/coins"} className="px-8 py-3 font-semibold text-white transition-all duration-300 border rounded-full border-white/20 hover:bg-white/10 backdrop-blur-sm">
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
