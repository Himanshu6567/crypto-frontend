

import React from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Skeleton } from "../../components/ui/skeleton";
import { Alert, AlertDescription } from "../../components/ui/alert";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingCryptosProps {
  loading: any;
  trendingCoins: any[];
  error: any;
}

const TrendingCryptos: React.FC<TrendingCryptosProps> = ({
  trendingCoins,
  loading,
  error,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="bg-white/10 border-white/20 backdrop-blur-sm"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="w-24 h-4 bg-white/20" />
                <Skeleton className="w-16 h-3 bg-white/20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Skeleton className="w-32 h-6 mb-2 bg-white/20" />
            <Skeleton className="w-20 h-4 bg-white/20" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (loading) {
    return (
      <section
        id="trending"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.15),transparent_50%)]"></div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="mb-4 text-white bg-white/10 border-white/20"
            >
              <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
              Loading
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Trending Cryptos
            </h2>
            <p className="text-xl text-gray-400">
              Fetching the latest cryptocurrency data...
            </p>
          </div>
          <LoadingSkeleton />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="trending"
        className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Alert className="bg-red-500/10 border-red-500/20">
              <AlertDescription className="text-lg text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="trending"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.15),transparent_50%)]"></div>

      {/* Floating particles */}
      <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-3 h-3 delay-1000 bg-pink-400 rounded-full top-1/3 right-20 animate-pulse"></div>
      <div className="absolute w-2 h-2 delay-500 bg-blue-400 rounded-full bottom-20 left-1/4 animate-pulse"></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 text-white bg-white/10 border-white/20 group"
          >
            <Sparkles className="w-3 h-3 mr-1 group-hover:animate-spin" />
            Live Data
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-transparent text-white md:text-5xl bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text">
            Trending Cryptos
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            Stay ahead with real-time insights on the most promising digital
            assets
          </p>
        </div>

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingCoins.map((crypto, index) => {
            const isPositive = crypto.price_change_percentage_24h >= 0;
            const trendColor = isPositive ? "text-green-400" : "text-red-400";
            const trendBg = isPositive ? "bg-green-500/20" : "bg-red-500/20";
            const TrendIcon = isPositive ? TrendingUp : TrendingDown;
            const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownRight;

            return (
              <Link
                key={index}
                to={`/coins/${crypto.name}`}
                className="block group"
              >
                <Card className="h-full overflow-hidden transition-all duration-500 bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-12 h-12 p-1 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                            <img
                              src={crypto.image}
                              alt={crypto.name}
                              className="object-contain w-full h-full rounded-full"
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23374151"/><text x="20" y="25" text-anchor="middle" fill="%23fff" font-size="16">${crypto.symbol.charAt(
                                  0
                                )}</text></svg>`;
                              }}
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1">
                            <div
                              className={`w-4 h-4 rounded-full ${trendBg} flex items-center justify-center`}
                            >
                              <TrendIcon
                                className={`w-2.5 h-2.5 ${trendColor}`}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-pink-200 group-hover:bg-clip-text">
                            {crypto.name}
                          </h3>
                          <Badge
                            variant="outline"
                            className="text-xs text-gray-300 bg-white/10 border-white/20"
                          >
                            {crypto.symbol.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <ArrowIcon className="w-5 h-5 transition-all duration-300 text-white/50 group-hover:text-white group-hover:scale-110" />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-bold text-white">
                          {formatPrice(crypto.current_price)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          24h Change
                        </span>
                        <div
                          className={`flex items-center space-x-1 px-2 py-1 rounded-full ${trendBg}`}
                        >
                          <span
                            className={`text-sm font-semibold ${trendColor}`}
                          >
                            {formatPercentage(
                              crypto.price_change_percentage_24h
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-400">
            Want to explore more cryptocurrencies?
          </p>
          <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-purple-500/25">
            View All Coins
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCryptos;
