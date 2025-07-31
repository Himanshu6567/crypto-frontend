
import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import CandlestickChart from "./CandlestickChart";
import LineChart from "./LineChart";

interface OhlcDataItem {
  time: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface MapesProps {
  name: any;
}

// const LineChart: React.FC<LineChartProps> = ({
const Mapes: React.FC<MapesProps> = ({ name }) => {
  const [ohlcData, setOhlcData] = useState<OhlcDataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIserror] = useState(false);
  const normalizedName = name.toLowerCase();

  useEffect(() => {
    const fetchOhlcData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${normalizedName}/ohlc?vs_currency=inr&days=7`
        );

        const data = response.data;
        const formattedData = data.map((item: any) => ({
          time: new Date(item[0]),
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        }));

        setOhlcData(formattedData);
      } catch (error) {
        console.error("Error fetching OHLC data:", error);
        setError("Failed to fetch chart");
        setIserror(true);
      } finally {
        setLoading(false);
      }
    };

    if (normalizedName) {
      fetchOhlcData();
    }
  }, [normalizedName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg">Loading charts...</div>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[400px]">
  //       <div className="text-lg text-red-500">{error}</div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <CandlestickChart
        name={normalizedName}
        ohlcData={ohlcData}
        error={error}
        isError={isError}
      />
      <LineChart
        name={normalizedName}
        ohlcData={ohlcData}
        error={error}
        isError={isError}
      />
      <BarChart
        name={normalizedName}
        ohlcData={ohlcData}
        error={error}
        isError={isError}
      />
    </div>
  );
};

export default Mapes;
