import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown, Zap, AlertCircle, DollarSign, Activity, } from "lucide-react";
import { Link } from "react-router-dom";
const LeastPricedCryptos = ({ leastPriceCoins, loading, error, }) => {
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
    const formatPrice = (price) => {
        if (price < 0.01) {
            return `₹${price.toFixed(6)}`;
        }
        else if (price < 1) {
            return `₹${price.toFixed(4)}`;
        }
        else {
            return new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(price);
        }
    };
    const formatPercentage = (percentage) => {
        return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;
    };
    const getAffordabilityLevel = (price) => {
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
    const LoadingSkeleton = () => (_jsxs("div", { className: "p-6 border bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50 animate-pulse", children: [_jsxs("div", { className: "flex items-center mb-4 space-x-4", children: [_jsx("div", { className: "rounded-full h-14 w-14 bg-slate-700" }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("div", { className: "w-24 h-4 rounded bg-slate-700" }), _jsx("div", { className: "w-16 h-3 rounded bg-slate-700" })] }), _jsx("div", { className: "w-16 h-6 rounded-full bg-slate-700" })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("div", { className: "w-32 h-8 rounded bg-slate-700" }), _jsx("div", { className: "w-20 h-5 rounded bg-slate-700" })] })] }));
    if (loading) {
        return (_jsx("section", { className: "min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800", children: _jsxs("div", { className: "container px-4 mx-auto sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 animate-pulse", children: _jsx(Zap, { className: "w-8 h-8 text-emerald-400" }) }), _jsx("div", { className: "h-12 mx-auto mb-4 rounded-lg bg-slate-700 w-96 animate-pulse" }), _jsx("div", { className: "w-64 h-6 mx-auto rounded bg-slate-700 animate-pulse" })] }), _jsx("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: Array.from({ length: 12 }).map((_, index) => (_jsx(LoadingSkeleton, {}, index))) })] }) }));
    }
    if (error) {
        return (_jsx("section", { className: "flex items-center justify-center min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800", children: _jsx("div", { className: "container px-4 mx-auto sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md mx-auto text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-500/20", children: _jsx(AlertCircle, { className: "w-8 h-8 text-red-400" }) }), _jsxs("div", { className: "p-8 border bg-slate-800/50 backdrop-blur-sm rounded-2xl border-red-500/20", children: [_jsx("h3", { className: "mb-2 text-xl font-semibold text-white", children: "Connection Error" }), _jsx("p", { className: "mb-4 text-slate-300", children: error }), _jsx("button", { onClick: () => window.location.reload(), className: "inline-flex items-center px-4 py-2 text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600", children: "Try Again" })] })] }) }) }));
    }
    return (_jsx("section", { id: "least", className: "min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800", children: _jsxs("div", { className: "container px-4 mx-auto sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-gradient-to-br from-emerald-400 to-green-500 shadow-emerald-500/25", children: _jsx(Zap, { className: "w-8 h-8 text-white" }) }), _jsx("h2", { className: "mb-4 text-5xl font-bold text-transparent sm:text-6xl bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text", children: "Affordable Cryptocurrencies" }), _jsx("p", { className: "max-w-3xl mx-auto text-xl leading-relaxed text-slate-300", children: "Explore budget-friendly digital assets perfect for new investors and diversification strategies." })] }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5", children: leastPriceCoins.map((crypto, index) => {
                        const affordability = getAffordabilityLevel(crypto.current_price);
                        return (_jsxs(Link, { to: `/coins/${crypto.name}`, className: "relative overflow-hidden transition-all duration-500 border cursor-pointer group bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50 hover:bg-slate-700/50 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10", children: [_jsx("div", { className: "absolute z-10 top-3 right-3", children: _jsx("div", { className: `px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${affordability.color} shadow-lg`, children: affordability.icon }) }), _jsx("div", { className: "absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 group-hover:opacity-100 rounded-2xl" }), _jsxs("div", { className: "relative p-6", children: [_jsxs("div", { className: "flex items-center mb-6 space-x-4", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "flex items-center justify-center overflow-hidden transition-all duration-300 rounded-full shadow-lg w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-600 ring-2 ring-slate-600 group-hover:ring-emerald-500/50", children: _jsx("img", { src: crypto.image, alt: crypto.name, className: "object-cover w-10 h-10 transition-transform duration-300 rounded-full group-hover:scale-110", onError: (e) => {
                                                                    const target = e.target;
                                                                    target.style.display = "none";
                                                                } }) }), _jsx("div", { className: "absolute transition-opacity duration-300 rounded-full opacity-0 -inset-1 bg-emerald-500/20 group-hover:opacity-100 group-hover:animate-ping" })] }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "text-lg font-bold text-white truncate transition-colors group-hover:text-emerald-400", children: crypto.name }), _jsx("p", { className: "text-sm tracking-wider uppercase truncate text-slate-400", children: crypto.symbol || "CRYPTO" })] }), _jsx(DollarSign, { className: "w-5 h-5 transition-colors text-slate-500 group-hover:text-emerald-400" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("p", { className: "mb-1 text-3xl font-bold text-white transition-colors group-hover:text-emerald-400", children: formatPrice(crypto.current_price) }), _jsx("div", { className: "flex items-center space-x-2", children: _jsx("span", { className: "px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300", children: affordability.level }) })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("span", { className: "flex items-center gap-2 text-sm font-medium text-slate-400", children: [_jsx(Activity, { className: "w-4 h-4" }), "24h Change"] }), _jsxs("div", { className: `flex items-center space-x-2 px-3 py-1.5 rounded-full font-semibold text-sm border ${crypto.price_change_percentage_24h >= 0
                                                                ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                                                                : "text-red-400 bg-red-500/10 border-red-500/30"}`, children: [crypto.price_change_percentage_24h >= 0 ? (_jsx(TrendingUp, { className: "w-4 h-4" })) : (_jsx(TrendingDown, { className: "w-4 h-4" })), _jsx("span", { children: formatPercentage(crypto.price_change_percentage_24h) })] })] }), crypto.market_cap && (_jsx("div", { className: "pt-4 border-t border-slate-700", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm font-medium text-slate-400", children: "Market Cap" }), _jsx("span", { className: "text-sm font-semibold text-slate-300", children: formatPrice(crypto.market_cap) })] }) })), _jsx("div", { className: "p-3 mt-4 border rounded-lg bg-slate-700/30 border-slate-600/50", children: _jsxs("div", { className: "flex items-center justify-between text-xs", children: [_jsx("span", { className: "text-slate-400", children: "Min. Investment" }), _jsxs("span", { className: "font-semibold text-emerald-400", children: ["\u20B9", Math.max(10, crypto.current_price * 10).toFixed(0)] })] }) })] })] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 group-hover:scale-x-100" })] }, index));
                    }) }), leastPriceCoins.length === 0 && !loading && (_jsxs("div", { className: "py-16 text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-slate-800", children: _jsx(Zap, { className: "w-10 h-10 text-slate-400" }) }), _jsx("h3", { className: "mb-3 text-2xl font-semibold text-white", children: "No affordable cryptocurrencies found" }), _jsx("p", { className: "max-w-md mx-auto text-lg text-slate-400", children: "Unable to load cryptocurrency data at this time. Please check your connection and try again." })] })), leastPriceCoins.length > 0 && (_jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "inline-flex items-center px-8 py-6 space-x-8 border shadow-xl bg-slate-800/50 backdrop-blur-sm rounded-2xl border-slate-700/50", children: [_jsxs("div", { children: [_jsx("p", { className: "text-3xl font-bold text-emerald-400", children: leastPriceCoins.length }), _jsx("p", { className: "text-sm font-medium text-slate-300", children: "Affordable Options" })] }), _jsx("div", { className: "w-px h-10 bg-slate-600" }), _jsxs("div", { children: [_jsx("p", { className: "text-3xl font-bold text-green-400", children: leastPriceCoins.filter((coin) => coin.current_price < 1)
                                            .length }), _jsx("p", { className: "text-sm font-medium text-slate-300", children: "Under \u20B91" })] }), _jsx("div", { className: "w-px h-10 bg-slate-600" }), _jsxs("div", { children: [_jsx("p", { className: "text-3xl font-bold text-lime-400", children: "Live" }), _jsx("p", { className: "text-sm font-medium text-slate-300", children: "Market Data" })] })] }) })), _jsx("div", { className: "max-w-4xl mx-auto mt-12", children: _jsxs("div", { className: "p-6 text-center border bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20 rounded-2xl", children: [_jsx("div", { className: "flex items-center justify-center mb-4", children: _jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20", children: _jsx(Zap, { className: "w-6 h-6 text-emerald-400" }) }) }), _jsx("h3", { className: "mb-2 text-xl font-semibold text-white", children: "Smart Investment Tip" }), _jsx("p", { className: "leading-relaxed text-slate-300", children: "Affordable cryptocurrencies offer excellent entry points for new investors. Consider dollar-cost averaging and diversifying across multiple assets to manage risk effectively." })] }) })] }) }));
};
export default LeastPricedCryptos;
