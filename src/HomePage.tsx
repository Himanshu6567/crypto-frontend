import React, { useEffect, useState } from "react";
import HeroSection from "./components/HomePage/HeroSection";
import ExploreSection from "./components/HomePage/ExploreSection";
import TrendingShares from "./components/HomePage/TrendingShares";
import MostExpensiveShares from "./components/HomePage/MostExpensiveShares";
import LeastShares from "./components/HomePage/LeastShares";
import BlogSection from "./components/HomePage/BlogSection";
import StatsSection from "./components/HomePage/StatsSection";
import GetInTouch from "./components/HomePage/GetInTouch";

const HomePage: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<any[]>([]);
  const [expensiveCoins, setExpensiveCoins] = useState<any[]>([]);
  const [leastPriceCoins, setLeastpriceCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const requiredTrandingCoins = [
    "Bitcoin",
    "Ethereum",
    "Tether",
    "Bittensor",
    "Aave",
    "kaspa",
  ];

  const requiredexpensiveCoins = [
    "Bitcoin",
    "Ethereum",
    "Binance Coin",
    "Avalanche",
    "Solana",
    "Monero",
    "Aave",
  ];

  const requiredLeastPriceCoins = [
    "Polygon",
    "The graph",
    "Core",
    "Beam",
    "Gala",
    "Brett",
    "Ethena",
    "Arweave",
    "Pop cat",
    "Numeraire",
    "Tether",
    "Shiba Inu",
    "Dogecoin",
    "XRP",
    "Pepe",
    "Staller",
    "Mog Coin",
    "BitTorrent",
    // "shiba Inu",
    "Binance Coin",
    "Cardano",
    "Cronos",
    "Stellar",
    "VeChain",
    "Polkadot",
    "Hedera",
    "Cardano",
    "Phoenix",
    "Tether",
    "Binance Coin",
    "Polkadot",
    "Maker",
    // "Bittensor",
    "Zcash",
  ];

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://crypto-backend-2y2c.onrender.com/api/allcoins"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch coins");
        }
        const data = await response.json();

        const filteredtradingCoins = data.coins.filter((coin: any) =>
          requiredTrandingCoins.includes(coin.name)
        );
        const filteredexpensiveCoins = data.coins.filter((coin: any) =>
          requiredexpensiveCoins.includes(coin.name)
        );

        const filteredLeastPriceCoins = data.coins.filter((coin: any) =>
          requiredLeastPriceCoins.includes(coin.name)
        );
        setTrendingCoins(filteredtradingCoins);
        setLeastpriceCoins(filteredLeastPriceCoins);
        setExpensiveCoins(filteredexpensiveCoins);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="font-sans ">
      <HeroSection />
      <ExploreSection />
      <TrendingShares
        trendingCoins={trendingCoins}
        loading={loading}
        error={error}
      />
      <MostExpensiveShares
        expensiveCoins={expensiveCoins}
        loading={loading}
        error={error}
      />
      <LeastShares
        leastPriceCoins={leastPriceCoins}
        loading={loading}
        error={error}
      />
      <BlogSection />
      <StatsSection />
      <GetInTouch />
    </div>
  );
};
export default HomePage;
