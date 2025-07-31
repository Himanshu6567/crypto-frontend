// import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import debounce from "lodash.debounce";

// const Allcoins: React.FC = () => {
//   const [search, setSearch] = useState("");
//   const [sortOption, setSortOption] = useState("market_cap"); // Default sorting option
//   const [coins, setCoins] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [totalCoins, setTotalCoins] = useState(0);
//   const [loading, setLoading] = useState(false); // Loading state

//   const coinsPerPage = 50;

//   const fetchCoins = async (pageNumber: number, searchQuery = "") => {
//     try {
//       setLoading(true); // Show loading indicator
//       const response = await fetch(
//         `http://localhost:5000/api/allcoins?page=${pageNumber}&search=${searchQuery}`
//       );
//       const data = await response.json();
//       setCoins(data.coins);
//       console.log(data.coins);
//       setTotalCoins(data.totalCoins);
//       setLoading(false); // Hide loading indicator
//     } catch (error) {
//       console.error("Error fetching coins:", error);
//       setLoading(false); // Hide loading indicator
//     }
//   };

//   useEffect(() => {
//     fetchCoins(page); // Fetch coins when page changes
//   }, [page]);

//   // Debounced search
//   const debouncedSearch = useCallback(
//     debounce((query: any) => {
//       setPage(1); // Reset page to 1 on new search
//       fetchCoins(1, query); // Fetch coins on search input
//     }, 500), // 500ms debounce
//     []
//   );

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//     debouncedSearch(e.target.value); // Call debounced search
//   };

//   // Sorting logic
//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedSort = e.target.value;
//     setSortOption(selectedSort);

//     // Sort coins based on the selected option
//     const sortedCoins = [...coins]; // Create a copy of the current coins array

//     switch (selectedSort) {
//       case "price":
//         sortedCoins.sort((a, b) => b.current_price - a.current_price); // Sort by price (descending)
//         break;
//       case "high_24h":
//         sortedCoins.sort((a, b) => b.high_24h - a.high_24h); // Sort by 24h high (descending)
//         break;
//       case "name":
//         sortedCoins.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name (alphabetically)
//         break;
//       default:
//         break;
//     }

//     setCoins(sortedCoins); // Update the sorted coins in state
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(totalCoins / coinsPerPage);

//   coins.map((coin) => {
//     return console.log(coin.market_cap_rank);
//   });

//   return (
//     <div className="min-h-screen text-gray-900 bg-gray-100">
//       <div className="container px-4 py-8 mx-auto">
//         {/* Hero Section */}
//         <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
//           <div className="mb-6 md:w-1/2 md:mb-0">
//             <h1 className="text-4xl font-bold text-green-700">
//               Welcome to the CryptoWorld
//             </h1>
//             <p className="mt-4 text-lg text-gray-700">
//               “Bitcoin is a technological tour de force.” <br />
//               <strong> - Bill Gates</strong>
//             </p>
//             <p className="mt-4 text-lg text-gray-700">
//               Discover the latest updates in digital currencies, track your
//               favorite coins, and stay informed.
//             </p>
//           </div>
//           <div className="md:w-1/3">
//             <img
//               src="/rr.jpg"
//               alt="Stock market trends"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Search & Sort */}
//         <div className="flex flex-col justify-between mb-6 space-y-4 md:flex-row md:space-y-0">
//           <div className="flex space-x-2">
//             <input
//               type="text"
//               placeholder="Search by name"
//               value={search}
//               onChange={handleSearch}
//               className="w-full p-2 text-gray-800 bg-white border border-green-300 rounded-lg shadow-sm md:w-60 focus:ring-2 focus:ring-green-500"
//             />
//             <button className="p-2 text-white transition bg-green-600 rounded-lg shadow-sm hover:bg-green-500">
//               Search
//             </button>
//           </div>
//           <select
//             title="."
//             value={sortOption}
//             onChange={handleSortChange}
//             className="w-full p-2 text-gray-800 bg-white border border-green-300 rounded-lg shadow-sm md:w-44 focus:ring-2 focus:ring-green-500"
//           >
//             <option value="price">Sort by Price</option>
//             <option value="high_24h">Sort by 24h High</option>
//             <option value="name">Sort by Name</option>
//           </select>
//         </div>

//         {/* Coins or Loading Indicator */}
//         <div
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
//           style={{ minHeight: "300px" }} // Ensure consistent height
//         >
//           {loading ? (
//             <div className="text-xl text-center text-gray-700 col-span-full">
//               Loading...
//             </div>
//           ) : coins.length > 0 ? (
//             coins.map((coin) => (
//               <Link
//                 // onClick={() => {
//                 //   idwork(coin.id);
//                 // }}
//                 to={`/coins/${coin.name}`}
//                 key={coin.id}
//                 className="p-5 mx-2 transition duration-300 bg-white border border-green-300 rounded-lg shadow-md hover:shadow-lg sm:mx-0"
//               >
//                 <img
//                   src={coin.image}
//                   alt={coin.name}
//                   className="w-16 h-16 mx-auto mb-4"
//                 />
//                 <h2 className="text-xl font-semibold text-center text-green-700">
//                   {coin.name} ({coin.symbol})
//                 </h2>
//                 <p className="text-lg text-center text-gray-700">
//                   Price: ₹{coin.current_price}
//                 </p>
//                 <p className="text-sm text-center text-gray-600">
//                   24h High: ₹{coin.high_24h} <br></br> Low: ₹{coin.low_24h}
//                 </p>
//                 <p className="text-sm text-center text-gray-600">
//                   Market Cap Rank: {coin.market_cap_rank}
//                 </p>
//                 <p
//                   className={`text-center font-bold ${
//                     coin.price_change_percentage_24h >= 0
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   24h Change: {coin.price_change_percentage_24h}%
//                 </p>
//               </Link>
//             ))
//           ) : (
//             <div className="text-xl text-center text-gray-700 col-span-full">
//               No coins found
//             </div>
//           )}
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center mt-8 space-x-2">
//           <button
//             onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
//             disabled={page === 1}
//             className="flex items-center justify-center px-3 py-1 text-white transition bg-green-600 rounded-lg shadow-sm disabled:bg-green-400 hover:bg-green-500"
//           >
//             &lt;
//           </button>
//           <span className="font-semibold text-green-700">P.{page}</span>
//           <button
//             className="flex items-center justify-center px-3 py-1 text-white transition bg-green-600 rounded-lg shadow-sm disabled:bg-green-400 hover:bg-green-500"
//             onClick={() =>
//               setPage((prev) => (prev < totalPages ? prev + 1 : prev))
//             }
//             disabled={page === totalPages}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Allcoins;

import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import {
  Search,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Link } from "react-router-dom";

const Allcoins: React.FC = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("market_cap");
  const [coins, setCoins] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalCoins, setTotalCoins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const coinsPerPage = 50;

  const fetchCoins = async (pageNumber: number, searchQuery = "") => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://crypto-backend-2y2c.onrender.com/api/allcoins?page=${pageNumber}&search=${searchQuery}`
      );
      const data = await response.json();
      setCoins(data.coins);
      setTotalCoins(data.totalCoins);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coins:", error);
      setError("Failed to fetch cryptocurrency data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins(page);
  }, [page]);

  const debouncedSearch = useCallback(
    _.debounce((query: any) => {
      setPage(1);
      fetchCoins(1, query);
    }, 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);

    const sortedCoins = [...coins];

    switch (selectedSort) {
      case "price":
        sortedCoins.sort((a, b) => b.current_price - a.current_price);
        break;
      case "high_24h":
        sortedCoins.sort((a, b) => b.high_24h - a.high_24h);
        break;
      case "name":
        sortedCoins.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "market_cap":
        sortedCoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
        break;
      default:
        break;
    }

    setCoins(sortedCoins);
  };

  const totalPages = Math.ceil(totalCoins / coinsPerPage);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    }).format(price);
  };

  // const formatPercentage = (percentage: number) => {
  //   return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  // };

  const formatPercentage = (percentage: number | null | undefined) => {
    if (percentage === null || percentage === undefined || isNaN(percentage)) {
      return "N/A";
    }
    return `${percentage > 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 md:mt-16">
      <div className="container px-4 py-6 mx-auto lg:py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-between gap-8 mb-8 lg:flex-row lg:mb-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
              <TrendingUp className="w-4 h-4" />
              Live Market Data
            </div>
            <h1 className="mb-6 text-4xl font-bold text-transparent lg:text-6xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              CryptoWorld
            </h1>
            <p className="mb-4 text-lg italic lg:text-xl text-slate-600 dark:text-slate-300">
              "Bitcoin is a technological tour de force."
              <span className="block font-semibold text-slate-800 dark:text-slate-200">
                — Bill Gates
              </span>
            </p>
            <p className="text-base leading-relaxed lg:text-lg text-slate-600 dark:text-slate-300">
              Discover the latest updates in digital currencies, track your
              favorite coins, and stay informed with real-time market data.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30"></div>
              <img
                src="/rr.jpg"
                alt="Cryptocurrency market trends"
                className="relative object-cover h-64 shadow-2xl w-80 rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col gap-4 p-6 mb-8 bg-white border shadow-lg md:flex-row dark:bg-slate-800 rounded-xl border-slate-200 dark:border-slate-700">
          <div className="relative flex-1">
            <Search className="absolute w-5 h-5 transform -translate-y-1/2 left-3 top-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={search}
              onChange={handleSearch}
              className="w-full py-3 pl-10 pr-4 transition-all duration-200 border rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="relative">
            <ArrowUpDown className="absolute w-5 h-5 transform -translate-y-1/2 left-3 top-1/2 text-slate-400" />
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="pl-10 pr-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none cursor-pointer min-w-[200px]"
            >
              <option value="market_cap">Sort by Market Cap</option>
              <option value="price">Sort by Price</option>
              <option value="high_24h">Sort by 24h High</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6 text-red-800 border-red-200 bg-red-50">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Coins Grid */}
        <div className="min-h-[600px]">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-emerald-500" />
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Loading cryptocurrencies...
                </p>
              </div>
            </div>
          ) : coins.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {coins.map((coin) => (
                <Link  to={`/coins/${coin.name}`}
                  onClick={() => {
                    console.log(`Navigating to coin: ${coin.name}`);
                  }}
                  key={coin.id}
                  className="block cursor-pointer group"
                >
                  <div className="h-full transition-all duration-300 transform bg-white border shadow-md dark:bg-slate-800 rounded-xl hover:shadow-xl border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:-translate-y-1">
                    <div className="p-6">
                      {/* Coin Header */}
                      <div className="flex items-center justify-between mb-4">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-12 h-12 rounded-full shadow-md"
                        />
                        <span className="px-2 py-1 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          #{coin.market_cap_rank}
                        </span>
                      </div>

                      {/* Coin Name & Symbol */}
                      <h3 className="mb-1 text-lg font-bold transition-colors text-slate-900 dark:text-slate-100 group-hover:text-emerald-600">
                        {coin.name}
                      </h3>
                      <p className="mb-4 text-sm font-medium uppercase text-slate-500 dark:text-slate-400">
                        {coin.symbol}
                      </p>

                      {/* Price */}
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {formatPrice(coin.current_price)}
                        </p>
                      </div>

                      {/* 24h Change */}
                      <div
                        className={`flex items-center gap-1 mb-4 p-2 rounded-lg ${
                          coin.price_change_percentage_24h >= 0
                            ? "bg-emerald-50 dark:bg-emerald-900/20"
                            : "bg-red-50 dark:bg-red-900/20"
                        }`}
                      >
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        <span
                          className={`font-semibold ${
                            coin.price_change_percentage_24h >= 0
                              ? "text-emerald-600"
                              : "text-red-600"
                          }`}
                        >
                          {formatPercentage(coin?.price_change_percentage_24h)}
                        </span>
                        <span className="ml-1 text-sm text-slate-500 dark:text-slate-400">
                          24h
                        </span>
                      </div>

                      {/* High/Low */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">
                            24h High:
                          </span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {formatPrice(coin.high_24h)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">
                            24h Low:
                          </span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {formatPrice(coin.low_24h)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-300">
                No cryptocurrencies found
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Try adjusting your search query or clearing filters
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="flex items-center gap-2 px-4 py-2 transition-colors bg-white border rounded-lg dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-2 mx-4">
              <span className="text-slate-600 dark:text-slate-400">
                Page {page} of {totalPages}
              </span>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="flex items-center gap-2 px-4 py-2 transition-colors bg-white border rounded-lg dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allcoins;
