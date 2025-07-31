import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent, } from "../ui/hover-card";
import { motion } from "framer-motion";
import { Info, AlertCircle } from "lucide-react";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = ({ name, ohlcData, error, isError }) => {
    // Extract labels and OHLC data from props
    const labels = ohlcData.map((item) => item.time.toLocaleDateString());
    const chartData = {
        labels,
        datasets: [
            {
                label: "Open",
                data: ohlcData.map((item) => item.open),
                backgroundColor: "rgba(0, 123, 255, 0.6)",
            },
            {
                label: "High",
                data: ohlcData.map((item) => item.high),
                backgroundColor: "rgba(40, 167, 69, 0.6)",
            },
            {
                label: "Low",
                data: ohlcData.map((item) => item.low),
                backgroundColor: "rgba(220, 53, 69, 0.6)",
            },
            {
                label: "Close",
                data: ohlcData.map((item) => item.close),
                backgroundColor: "rgba(255, 193, 7, 0.6)",
            },
        ],
    };
    // Error state component
    const ErrorDisplay = () => (_jsxs("div", { className: "flex flex-col items-center justify-center border rounded-md h-96 bg-gray-50", children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 mb-4 bg-red-500 rounded-full", children: _jsx(AlertCircle, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "mb-2 text-lg font-semibold text-gray-800", children: "Error Loading Bar Chart Data" }), _jsx("p", { className: "max-w-md mb-2 text-sm text-center text-gray-600", children: error?.message || error?.toString() || "An unknown error occurred" }), _jsx("p", { className: "text-xs text-gray-500", children: "Please try refreshing or contact support if the issue persists" })] }));
    return (_jsx(motion.div, { className: "max-w-4xl p-4 mx-auto", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, children: _jsxs(Card, { className: "border shadow-md rounded-xl", children: [_jsx(CardHeader, { className: "flex flex-row items-center justify-between", children: _jsx(CardTitle, { className: "text-lg font-semibold sm:text-2xl", children: _jsxs(HoverCard, { children: [_jsxs(HoverCardTrigger, { className: "flex items-center gap-2", children: [_jsxs("span", { children: [name.charAt(0).toUpperCase() + name.slice(1), " - OHLC Bar Chart"] }), isError ? (_jsx(AlertCircle, { className: "w-4 h-4 text-red-500" })) : (_jsx(Info, { className: "w-4 h-4 text-muted-foreground" }))] }), _jsx(HoverCardContent, { className: "max-w-xs text-sm", children: isError ? ("Error loading bar chart data. Please try again.") : (_jsxs(_Fragment, { children: ["This chart displays ", _jsx("strong", { children: "Open, High, Low, Close" }), " ", "price bars for the selected coin over the last 7 days using data from CoinGecko."] })) })] }) }) }), _jsx(CardContent, { children: _jsx("div", { className: "w-full overflow-x-auto", children: isError ? (_jsx(ErrorDisplay, {})) : (_jsx(Bar, { data: chartData, options: {
                                responsive: true,
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                    },
                                    tooltip: {
                                        enabled: true,
                                    },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: false,
                                    },
                                },
                            } })) }) })] }) }));
};
export default BarChart;
