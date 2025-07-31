

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";
import { motion } from "framer-motion";
import { Info, AlertCircle } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface OhlcData {
  time: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface BarChartProps {
  name: string;
  ohlcData: OhlcData[];
  error: any;
  isError: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ name, ohlcData, error, isError }) => {
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
  const ErrorDisplay = () => (
    <div className="flex flex-col items-center justify-center border rounded-md h-96 bg-gray-50">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-500 rounded-full">
        <AlertCircle className="w-8 h-8 text-white" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        Error Loading Bar Chart Data
      </h3>
      <p className="max-w-md mb-2 text-sm text-center text-gray-600">
        {error?.message || error?.toString() || "An unknown error occurred"}
      </p>
      <p className="text-xs text-gray-500">
        Please try refreshing or contact support if the issue persists
      </p>
    </div>
  );

  return (
    <motion.div
      className="max-w-4xl p-4 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="border shadow-md rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold sm:text-2xl">
            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-2">
                <span>
                  {name.charAt(0).toUpperCase() + name.slice(1)} - OHLC Bar
                  Chart
                </span>
                {isError ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : (
                  <Info className="w-4 h-4 text-muted-foreground" />
                )}
              </HoverCardTrigger>
              <HoverCardContent className="max-w-xs text-sm">
                {isError ? (
                  "Error loading bar chart data. Please try again."
                ) : (
                  <>
                    This chart displays <strong>Open, High, Low, Close</strong>{" "}
                    price bars for the selected coin over the last 7 days using data
                    from CoinGecko.
                  </>
                )}
              </HoverCardContent>
            </HoverCard>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            {isError ? (
              <ErrorDisplay />
            ) : (
              <Bar 
                data={chartData} 
                options={{ 
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top' as const,
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
                }} 
              />
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BarChart;