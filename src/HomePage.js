import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import HeroSection from "./components/HomePage/HeroSection";
import ExploreSection from "./components/HomePage/ExploreSection";
import TrendingShares from "./components/HomePage/TrendingShares";
import MostExpensiveShares from "./components/HomePage/MostExpensiveShares";
import LeastShares from "./components/HomePage/LeastShares";
import BlogSection from "./components/HomePage/BlogSection";
import StatsSection from "./components/HomePage/StatsSection";
import GetInTouch from "./components/HomePage/GetInTouch";
const HomePage = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [expensiveCoins, setExpensiveCoins] = useState([]);
    const [leastPriceCoins, setLeastpriceCoins] = useState([]);
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
                const response = await fetch("https://crypto-backend-2y2c.onrender.com/api/allcoins");
                if (!response.ok) {
                    throw new Error("Failed to fetch coins");
                }
                const data = await response.json();
                const filteredtradingCoins = data.coins.filter((coin) => requiredTrandingCoins.includes(coin.name));
                const filteredexpensiveCoins = data.coins.filter((coin) => requiredexpensiveCoins.includes(coin.name));
                const filteredLeastPriceCoins = data.coins.filter((coin) => requiredLeastPriceCoins.includes(coin.name));
                setTrendingCoins(filteredtradingCoins);
                setLeastpriceCoins(filteredLeastPriceCoins);
                setExpensiveCoins(filteredexpensiveCoins);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchTrendingCoins();
    }, []);
    return (_jsxs("div", { className: "font-sans ", children: [_jsx(HeroSection, {}), _jsx(ExploreSection, {}), _jsx(TrendingShares, { trendingCoins: trendingCoins, loading: loading, error: error }), _jsx(MostExpensiveShares, { expensiveCoins: expensiveCoins, loading: loading, error: error }), _jsx(LeastShares, { leastPriceCoins: leastPriceCoins, loading: loading, error: error }), _jsx(BlogSection, {}), _jsx(StatsSection, {}), _jsx(GetInTouch, {})] }));
};
export default HomePage;
