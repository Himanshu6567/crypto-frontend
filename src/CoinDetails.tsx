// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Mapes from "./components/Charts/Mapes";
// import { FaAngleDoubleLeft } from "react-icons/fa";

// const CoinData = () => {
//   const { name } = useParams<{ name: string }>(); // Get the coin name from URL params
//   const [coin, setCoin] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/coindetails/${name}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch coin details");
//         }
//         const data = await response.json();
//         setCoin(data);
//         console.log(data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoinDetails();
//   }, [name]); // Fetch details when the component mounts or when the name changes

//   if (loading) {
//     return <div className="text-xl text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">{error}</div>;
//   }

//   if (!coin) {
//     return (
//       <div className="text-xl text-center">
//         No details available for this coin.
//       </div>
//     );
//   }

//   const {
//     symbol,
//     image,
//     current_price,
//     market_cap,
//     fully_diluted_valuation,
//     total_volume,
//     high_24h,
//     low_24h,
//     price_change_24h,
//     price_change_percentage_24h,
//     circulating_supply,
//     total_supply,
//     ath,
//     ath_change_percentage,
//     ath_date,
//     atl,
//     atl_change_percentage,
//     atl_date,
//     market_cap_rank,
//     max_supply,
//   } = coin;

//   return (
//     <div>
//       <Link className="mt-1 text-2xl bg-red-300" to={"/coins"}>
//         <FaAngleDoubleLeft className="ml-6 hover:text-indigo-500" />
//       </Link>
//       <div className="max-w-4xl p-4 mx-auto">
//         {/* Coin Header Section */}
//         <div className="flex flex-col mb-8 space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-8">
//           <div className="w-24 h-24 md:w-32 md:h-32">
//             <img
//               className="border-2 rounded-full border-b-slate-700"
//               src={image}
//               alt={coin.name}
//             />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-3xl font-bold">{coin.name}</h1>
//             <p className="text-gray-500">Symbol: {symbol.toUpperCase()}</p>
//           </div>
//         </div>

//         {/* Coin Stats Section */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           {/* Price and Market Data */}
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Current Price</h2>
//             <p className="text-xl font-bold">{`₹${current_price.toLocaleString()}`}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Market Cap</h2>
//             <p className="text-xl font-bold">₹{Number(market_cap)}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Fully Diluted Valuation</h2>
//             <p className="text-xl font-bold">
//               ₹{Number(fully_diluted_valuation).toLocaleString()}
//             </p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Total Volume</h2>
//             <p className="text-xl font-bold">
//               ₹{Number(total_volume).toLocaleString()}
//             </p>
//           </div>

//           {/* High/Low Prices */}
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">High (24h)</h2>
//             <p className="text-xl font-bold text-green-600">{high_24h}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Low (24h)</h2>
//             <p className="text-xl font-bold text-red-600">{low_24h}</p>
//           </div>

//           {/* Price Change Data */}
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Price Change (24h)</h2>
//             <p
//               className={`text-xl font-bold ${
//                 price_change_24h >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {price_change_24h}
//             </p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">
//               Price Change Percentage (24h)
//             </h2>
//             <p
//               className={`text-xl font-bold ${
//                 price_change_percentage_24h >= 0
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               {price_change_percentage_24h}%
//             </p>
//           </div>

//           {/* Supply and Rank */}
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Market Cap Rank</h2>
//             <p className="text-xl ">{market_cap_rank}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Max Supply</h2>
//             <p className="text-xl font-bold">{max_supply}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Circulating Supply</h2>
//             <p className="text-xl font-bold">{circulating_supply}</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">Total Supply</h2>
//             <p className="text-xl font-bold">{total_supply}</p>
//           </div>

//           {/* All-Time High/Low */}
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">All-Time High</h2>
//             <p className="text-xl font-bold">{ath}</p>
//             <p className="text-red-600">{ath_change_percentage}%</p>
//           </div>
//           <div className="p-4 bg-white rounded-md shadow-md">
//             <h2 className="text-xl font-semibold">All-Time Low</h2>
//             <p className="text-xl font-bold">{atl}</p>
//             <p className="text-green-600">{atl_change_percentage}%</p>
//           </div>
//         </div>

//         {/* Quote Section */}
//         <div className="p-4 mt-8 mb-8 rounded-md shadow-md bg-blue-50">
//           <h2 className="text-xl font-semibold text-center">
//             "The internet is for everyone. Digital currency is the next logical
//             step." – Anonymous
//           </h2>
//         </div>

//         {/* Additional Information */}
//         <div className="p-4 mt-8 bg-white rounded-md shadow-md">
//           <h2 className="mb-4 text-xl font-semibold">Additional Information</h2>
//           <p>
//             <strong>ATH Date:</strong>{" "}
//             <span className="text-green-500">
//               {" "}
//               {new Date(ath_date).toLocaleDateString()}
//             </span>{" "}
//           </p>
//           <p>
//             <strong>ATL Date:</strong>{" "}
//             <span className="text-red-500">
//               {new Date(atl_date).toLocaleDateString()}
//             </span>{" "}
//           </p>
//           {/* <p>
//             <strong>Last Updated:</strong>{" "}
//             {new Date(coin.last_updated).toLocaleString()}
//           </p> */}
//         </div>
//       </div>
//       <Mapes name={name} />
//     </div>
//   );
// };

// export default CoinData;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Skeleton } from "./components/ui/skeleton";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Mapes from "./components/Charts/Mapes";

const CoinData = () => {
  const { name } = useParams<{ name: string }>();
  const [coin, setCoin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(`https://crypto-backend-2y2c.onrender.com/api/coindetails/${name}`);
        if (!response.ok) throw new Error("Failed to fetch coin details");
        const data = await response.json();
        setCoin(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinDetails();
  }, [name]);

  if (loading) {
    return (
      <div className="max-w-4xl p-4 mx-auto mt-10 space-y-6">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-32 h-32 rounded-full" />
        <Skeleton className="w-full h-6" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-xl mx-auto mt-10">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!coin) {
    return <div className="text-xl text-center">No details available for this coin.</div>;
  }

  const {
    symbol, image, current_price, market_cap, fully_diluted_valuation,
    total_volume, high_24h, low_24h, price_change_24h,
    price_change_percentage_24h, circulating_supply,
    total_supply, ath, ath_change_percentage, ath_date,
    atl, atl_change_percentage, atl_date, market_cap_rank, max_supply
  } = coin;

  const renderCard = (title: string, value: any, color?: string, suffix?: string) => (
    <Card className="transition duration-200 ease-in-out hover:shadow-lg">
      <CardContent className="p-4">
        <h2 className="font-semibold text-md text-muted-foreground">{title}</h2>
        <p className={`text-xl font-bold ${color || "text-foreground"}`}>
          {value}{suffix || ""}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl px-4 pt-20 pb-10 mx-auto"
    >
      <Link to="/coins" className="inline-flex items-center mb-4 text-sm hover:underline text-muted-foreground">
        <FaAngleDoubleLeft className="mr-2" /> Back to Coins
      </Link>

      <div className="flex flex-col mb-6 md:flex-row md:items-center md:space-x-6">
        <img src={image} alt={coin.name} className="w-24 h-24 border rounded-full md:w-32 md:h-32" />
        <div>
          <h1 className="text-3xl font-bold">{coin.name}</h1>
          <Badge className="mt-2">{symbol.toUpperCase()}</Badge>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderCard("Current Price", `₹${current_price.toLocaleString()}`)}
        {renderCard("Market Cap", `₹${Number(market_cap).toLocaleString()}`)}
        {renderCard("Fully Diluted Valuation", `₹${Number(fully_diluted_valuation).toLocaleString()}`)}
        {renderCard("Total Volume", `₹${Number(total_volume).toLocaleString()}`)}
        {renderCard("High (24h)", high_24h, "text-green-600")}
        {renderCard("Low (24h)", low_24h, "text-red-600")}
        {renderCard("Price Change (24h)", price_change_24h,
          price_change_24h >= 0 ? "text-green-600" : "text-red-600")}
        {renderCard("Price Change % (24h)",
          `${price_change_percentage_24h}%`,
          price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600",
          price_change_percentage_24h >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />
        )}
        {renderCard("Market Cap Rank", market_cap_rank)}
        {renderCard("Max Supply", max_supply || "N/A")}
        {renderCard("Circulating Supply", circulating_supply)}
        {renderCard("Total Supply", total_supply)}
        {renderCard("All-Time High", ath)}
        {renderCard("ATH %", `${ath_change_percentage}%`, "text-red-600")}
        {renderCard("All-Time Low", atl)}
        {renderCard("ATL %", `${atl_change_percentage}%`, "text-green-600")}
      </div>

      {/* Quote */}
      <div className="p-4 mt-8 text-center rounded-md shadow bg-muted">
        <blockquote className="italic text-md text-muted-foreground">
          “The internet is for everyone. Digital currency is the next logical step.” – Anonymous
        </blockquote>
      </div>

      {/* Additional Info */}
      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">Additional Information</h2>
        <p>
          <strong>ATH Date:</strong>{" "}
          <span className="text-green-500">{new Date(ath_date).toLocaleDateString()}</span>
        </p>
        <p>
          <strong>ATL Date:</strong>{" "}
          <span className="text-red-500">{new Date(atl_date).toLocaleDateString()}</span>
        </p>
      </div>

      <Mapes name={name} />
    </motion.div>
  );
};

export default CoinData;
