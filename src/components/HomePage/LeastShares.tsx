// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const LeastPricedCryptos: React.FC = () => {
//   const [leastPriceCoins, setLeastpriceCoins] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const requiredCoins = [
//     "polygon",
//     "the graph",
//     "core",
//     "Beam",
//     "Gala",
//     "Brett",
//     "Ethena",
//     "Arweave",
//     "Pop cat",
//     "Numeraire",
//     "Tether",
//     "Shiba Inu",
//     "Dogecoin",
//     "XRP",
//     "Binance Coin",
//     "Cardano",
//     " Stellar",
//     "VeChain",
//     "Polkadot",
//     "Hedera",
//     "Cardano",
//     "Phoenix",
//     "Tether",
//     "Binance Coin",
//     "Polkadot",
//     "Maker",
//     "Bittensor",
//     "Zcash",
//   ]; // Names of the coins we want to fetch

//   useEffect(() => {
//     const fetchleastPriceCoins = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/allcoins");
//         if (!response.ok) {
//           throw new Error("Failed to fetch coins");
//         }
//         const data = await response.json();

//         // Filter the coins to only include the required ones
//         // const filteredCoins = data.coins.filter((coin: any) =>
//         //   requiredCoins.includes(coin.name)
//         // );
//         const filteredCoins = data.coins.filter((coin: any) =>
//           requiredCoins.some((requiredCoin) =>
//             coin.name.toLowerCase().includes(requiredCoin.toLowerCase().trim())
//           )
//         );
//         setLeastpriceCoins(filteredCoins);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchleastPriceCoins();
//   }, []); // Fetch when the component mounts

//   if (loading) {
//     return <div className="text-xl text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">{error}</div>;
//   }

//   return (
//     <section id="least" className="py-16 text-white bg-gray-900">
//       <div className="container px-4 mx-auto">
//         <h2 className="mb-12 text-3xl font-bold text-center">
//           Least Priced Cryptocurrencies
//         </h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
//           {leastPriceCoins.map((crypto, index) => (
//             <div
//               key={index}
//               className="overflow-hidden transition transform bg-gray-800 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl"
//             >
//               <div className="flex items-center justify-center object-cover w-full h-32 p-16 overflow-hidden">
//                 <img
//                   src={crypto.image}
//                   alt={crypto.name}
//                   className="rounded-full "
//                 />
//               </div>
//               <div className="p-4">
//                 <Link
//                   to={`/coins/${crypto.name}`}
//                   className="mb-2 text-lg font-semibold"
//                 >
//                   {crypto.name}
//                 </Link>
//                 <div className="flex items-center justify-between">
//                   <p className="text-gray-400">₹ {crypto.current_price}</p>
//                   <strong
//                     className={`text-lg ${
//                       crypto.price_change_percentage_24h >= 0
//                         ? "text-green-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {crypto.price_change_percentage_24h >= 0 ? "+" : " "}
//                     {crypto.price_change_percentage_24h.toFixed(2)}%
//                   </strong>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeastPricedCryptos;

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Zap,
  AlertCircle,
  DollarSign,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

interface LeastPricedCryptosProps {
  loading: any;
  leastPriceCoins: any[];
  error: any;
}

const LeastPricedCryptos: React.FC<LeastPricedCryptosProps> = ({
  leastPriceCoins,
  loading,
  error,
}) => {
  // const [leastPriceCoins, setLeastpriceCoins] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // const requiredCoins = [
  //   "polygon",
  //   "the graph",
  //   "core",
  //   "Beam",
  //   "Gala",
  //   "Brett",
  //   "Ethena",
  //   "Arweave",
  //   "Pop cat",
  //   "Numeraire",
  //   "Tether",
  //   "Shiba Inu",
  //   "Dogecoin",
  //   "XRP",
  //   "Binance Coin",
  //   "Cardano",
  //   " Stellar",
  //   "VeChain",
  //   "Polkadot",
  //   "Hedera",
  //   "Cardano",
  //   "Phoenix",
  //   "Tether",
  //   "Binance Coin",
  //   "Polkadot",
  //   "Maker",
  //   "Bittensor",
  //   "Zcash",
  // ];

  // useEffect(() => {
  //   const fetchleastPriceCoins = async () => {
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
  //       setLeastpriceCoins(filteredCoins);
  //     } catch (error: any) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchleastPriceCoins();
  // }, []);

  const formatPrice = (price: number) => {
    if (price < 0.01) {
      return `₹${price.toFixed(6)}`;
    } else if (price < 1) {
      return `₹${price.toFixed(4)}`;
    } else {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
    }
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  const getAffordabilityLevel = (price: number) => {
    if (price < 1)
      return {
        level: "Ultra Affordable",
        color: "from-emerald-400 to-green-500",
        icon: "🟢",
      };
    if (price < 10)
      return {
        level: "Very Affordable",
        color: "from-lime-400 to-green-400",
        icon: "🟡",
      };
    if (price < 100)
      return {
        level: "Affordable",
        color: "from-yellow-400 to-orange-400",
        icon: "🟠",
      };
    return {
      level: "Moderate",
      color: "from-orange-400 to-red-400",
      icon: "🔴",
    };
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="p-6 border bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50 animate-pulse">
      <div className="flex items-center mb-4 space-x-4">
        <div className="rounded-full h-14 w-14 bg-slate-700"></div>
        <div className="flex-1 space-y-2">
          <div className="w-24 h-4 rounded bg-slate-700"></div>
          <div className="w-16 h-3 rounded bg-slate-700"></div>
        </div>
        <div className="w-16 h-6 rounded-full bg-slate-700"></div>
      </div>
      <div className="space-y-3">
        <div className="w-32 h-8 rounded bg-slate-700"></div>
        <div className="w-20 h-5 rounded bg-slate-700"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 animate-pulse">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="h-12 mx-auto mb-4 rounded-lg bg-slate-700 w-96 animate-pulse"></div>
            <div className="w-64 h-6 mx-auto rounded bg-slate-700 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-500/20">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <div className="p-8 border bg-slate-800/50 backdrop-blur-sm rounded-2xl border-red-500/20">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Connection Error
              </h3>
              <p className="mb-4 text-slate-300">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
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
      id="least"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-green-500 shadow-emerald-500/25">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-4 text-5xl font-bold text-transparent sm:text-6xl bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text">
            Affordable Cryptocurrencies
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300">
            Explore budget-friendly digital assets perfect for new investors and
            diversification strategies.
          </p>
        </div>

        {/* Crypto Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {leastPriceCoins.map((crypto, index) => {
            const affordability = getAffordabilityLevel(crypto.current_price);

            return (
              <Link
                to={`/coins/${crypto.name}`}
                key={index}
                className="relative overflow-hidden transition-all duration-500 border cursor-pointer group bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50 hover:bg-slate-700/50 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Affordability Badge */}
                <div className="absolute z-10 top-3 right-3">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${affordability.color} shadow-lg`}
                  >
                    {affordability.icon}
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 group-hover:opacity-100 rounded-2xl"></div>

                <div className="relative p-6">
                  {/* Crypto Header */}
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="relative">
                      <div className="flex items-center justify-center overflow-hidden transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 ring-2 ring-slate-600 group-hover:ring-emerald-500/50">
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
                      {/* Pulse effect */}
                      <div className="absolute transition-opacity duration-300 rounded-full opacity-0 -inset-1 bg-emerald-500/20 group-hover:opacity-100 group-hover:animate-ping"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate transition-colors group-hover:text-emerald-400">
                        {crypto.name}
                      </h3>
                      <p className="text-sm tracking-wider uppercase truncate text-slate-400">
                        {crypto.symbol || "CRYPTO"}
                      </p>
                    </div>
                    <DollarSign className="w-5 h-5 transition-colors text-slate-500 group-hover:text-emerald-400" />
                  </div>

                  {/* Price Section */}
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-3xl font-bold text-white transition-colors group-hover:text-emerald-400">
                        {formatPrice(crypto.current_price)}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                          {affordability.level}
                        </span>
                      </div>
                    </div>

                    {/* 24h Change */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Activity className="w-4 h-4" />
                        24h Change
                      </span>
                      <div
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full font-semibold text-sm border ${
                          crypto.price_change_percentage_24h >= 0
                            ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                            : "text-red-400 bg-red-500/10 border-red-500/30"
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
                      <div className="pt-4 border-t border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-400">
                            Market Cap
                          </span>
                          <span className="text-sm font-semibold text-slate-300">
                            {formatPrice(crypto.market_cap)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Investment Suggestion */}
                    <div className="p-3 mt-4 border rounded-lg bg-slate-700/30 border-slate-600/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Min. Investment</span>
                        <span className="font-semibold text-emerald-400">
                          ₹{Math.max(10, crypto.current_price * 10).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 group-hover:scale-x-100"></div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {leastPriceCoins.length === 0 && !loading && (
          <div className="py-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-slate-800">
              <Zap className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold text-white">
              No affordable cryptocurrencies found
            </h3>
            <p className="max-w-md mx-auto text-lg text-slate-400">
              Unable to load cryptocurrency data at this time. Please check your
              connection and try again.
            </p>
          </div>
        )}

        {/* Stats Footer */}
        {leastPriceCoins.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-8 py-6 space-x-8 border shadow-xl bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50">
              <div>
                <p className="text-3xl font-bold text-emerald-400">
                  {leastPriceCoins.length}
                </p>
                <p className="text-sm font-medium text-slate-300">
                  Affordable Options
                </p>
              </div>
              <div className="w-px h-10 bg-slate-600"></div>
              <div>
                <p className="text-3xl font-bold text-green-400">
                  {
                    leastPriceCoins.filter((coin) => coin.current_price < 1)
                      .length
                  }
                </p>
                <p className="text-sm font-medium text-slate-300">Under ₹1</p>
              </div>
              <div className="w-px h-10 bg-slate-600"></div>
              <div>
                <p className="text-3xl font-bold text-lime-400">Live</p>
                <p className="text-sm font-medium text-slate-300">
                  Market Data
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Investment Tip */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-6 text-center border bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Smart Investment Tip
            </h3>
            <p className="leading-relaxed text-slate-300">
              Affordable cryptocurrencies offer excellent entry points for new
              investors. Consider dollar-cost averaging and diversifying across
              multiple assets to manage risk effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeastPricedCryptos;
