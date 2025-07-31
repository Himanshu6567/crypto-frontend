import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import CandlestickChart from "./CandlestickChart";
import LineChart from "./LineChart";
// const LineChart: React.FC<LineChartProps> = ({
const Mapes = ({ name }) => {
    const [ohlcData, setOhlcData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isError, setIserror] = useState(false);
    const normalizedName = name.toLowerCase();
    useEffect(() => {
        const fetchOhlcData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${normalizedName}/ohlc?vs_currency=inr&days=7`);
                const data = response.data;
                const formattedData = data.map((item) => ({
                    time: new Date(item[0]),
                    open: item[1],
                    high: item[2],
                    low: item[3],
                    close: item[4],
                }));
                setOhlcData(formattedData);
            }
            catch (error) {
                console.error("Error fetching OHLC data:", error);
                setError("Failed to fetch chart");
                setIserror(true);
            }
            finally {
                setLoading(false);
            }
        };
        if (normalizedName) {
            fetchOhlcData();
        }
    }, [normalizedName]);
    if (loading) {
        return (_jsx("div", { className: "flex justify-center items-center min-h-[400px]", children: _jsx("div", { className: "text-lg", children: "Loading charts..." }) }));
    }
    // if (error) {
    //   return (
    //     <div className="flex justify-center items-center min-h-[400px]">
    //       <div className="text-lg text-red-500">{error}</div>
    //     </div>
    //   );
    // }
    return (_jsxs("div", { children: [_jsx(CandlestickChart, { name: normalizedName, ohlcData: ohlcData, error: error, isError: isError }), _jsx(LineChart, { name: normalizedName, ohlcData: ohlcData, error: error, isError: isError }), _jsx(BarChart, { name: normalizedName, ohlcData: ohlcData, error: error, isError: isError })] }));
};
export default Mapes;
