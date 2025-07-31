

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Coins,
  AlertCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

interface expensiveCryptosProps {
  loading: any;
  expensiveCoins: any[];
  error: any;
}

const MostExpensiveCryptos: React.FC<expensiveCryptosProps> = ({
  loading,
  expensiveCoins,
  error,
}) => {
  // const [expensiveCoins, setExpensiveCoins] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  const requiredCoins = [
    "Bitcoin",
    "Ethereum",
    "Binance Coin",
    "Avalanche",
    "Solana",
    "Monero",
    "Aave",
  ];

  // useEffect(() => {
  //   const fetchExpensiveCoins = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://crypto-backend-2y2c.onrender.com/api/allcoins"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch cryptocurrency data");
  //       }
  //       const data = await response.json();

  //       const filteredCoins = data.coins.filter((coin: any) =>
  //         requiredCoins.some((requiredCoin) =>
  //           coin.name.toLowerCase().includes(requiredCoin.toLowerCase().trim())
  //         )
  //       );
  //       setExpensiveCoins(filteredCoins);
  //     } catch (error: any) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchExpensiveCoins();
  // }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="p-6 bg-white border border-gray-100 shadow-xl rounded-2xl animate-pulse">
      <div className="flex items-center mb-4 space-x-4">
        <div className="bg-gray-200 rounded-full h-14 w-14"></div>
        <div className="flex-1 space-y-2">
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="w-32 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-5 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full animate-pulse">
              <Coins className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="h-12 mx-auto mb-4 bg-gray-200 rounded-lg w-96 animate-pulse"></div>
            <div className="w-64 h-6 mx-auto bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-red-100 rounded-full">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="p-8 bg-white border border-red-100 shadow-xl rounded-2xl">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Connection Error
              </h3>
              <p className="mb-4 text-gray-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="expensive"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600">
            <Coins className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-4 text-5xl font-bold text-transparent sm:text-6xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
            Premium Cryptocurrencies
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Discover the most valuable digital assets in today's market with
            real-time pricing and performance metrics.
          </p>
        </div>

        {/* Crypto Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {expensiveCoins.map((crypto, index) => (
            <Link
              key={index}
              to={`/coins/${crypto.name}`}
              className="relative overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-xl cursor-pointer group rounded-2xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Top ranking badge for top 3 */}
              {index < 3 && (
                <div className="absolute z-10 top-4 right-4">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold shadow-lg ${
                      index === 0
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : index === 1
                        ? "bg-gradient-to-r from-gray-400 to-gray-600"
                        : "bg-gradient-to-r from-orange-400 to-red-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
              )}

              {/* Gradient background effect */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:opacity-100"></div>

              <div className="relative p-6">
                {/* Crypto Header */}
                <div className="flex items-center mb-6 space-x-4">
                  <div className="relative">
                    <div className="flex items-center justify-center overflow-hidden rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 ring-2 ring-white">
                      <img
                        src={crypto.image}
                        alt={crypto.name}
                        className="object-cover w-10 h-10 transition-transform duration-300 rounded-full group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 truncate transition-colors group-hover:text-indigo-600">
                      {crypto.name}
                    </h3>
                    <p className="text-sm tracking-wider text-gray-500 uppercase truncate">
                      {crypto.symbol || "CRYPTO"}
                    </p>
                  </div>
                  <Star className="w-5 h-5 text-gray-300 transition-colors group-hover:text-yellow-400" />
                </div>

                {/* Price Section */}
                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-3xl font-bold text-gray-900">
                      {formatPrice(crypto.current_price)}
                    </p>
                  </div>

                  {/* 24h Change */}
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-500">
                      24h Change
                    </span>
                    <div
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full font-semibold text-sm ${
                        crypto.price_change_percentage_24h >= 0
                          ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                          : "text-red-700 bg-red-50 border border-red-200"
                      }`}
                    >
                      {crypto.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>
                        {formatPercentage(crypto.price_change_percentage_24h)}
                      </span>
                    </div>
                  </div>

                  {/* Market Cap */}
                  {crypto.market_cap && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">
                          Market Cap
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          {formatPrice(crypto.market_cap)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 group-hover:scale-x-100"></div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {expensiveCoins.length === 0 && !loading && (
          <div className="py-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gray-100 rounded-full">
              <Coins className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900">
              No cryptocurrencies found
            </h3>
            <p className="max-w-md mx-auto text-lg text-gray-600">
              Unable to load cryptocurrency data at this time. Please check your
              connection and try again.
            </p>
          </div>
        )}

        {/* Stats Footer */}
        {expensiveCoins.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-4 space-x-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
              <div>
                <p className="text-2xl font-bold text-indigo-600">
                  {expensiveCoins.length}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Premium Assets
                </p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-purple-600">Live</p>
                <p className="text-sm font-medium text-gray-600">Market Data</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MostExpensiveCryptos;
