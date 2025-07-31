

import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../../components/ui/hover-card";
import { motion } from "framer-motion";
import { Info, AlertCircle } from "lucide-react";

interface OhlcData {
  time: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface LineChartProps {
  name: string;
  ohlcData: OhlcData[];
  error: any;
  isError: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  name,
  ohlcData,
  error,
  isError,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    price: "",
  });

  // Extract closing prices and dates from ohlcData
  const closingPrices = ohlcData.map((item) => item.close);
  const dates = ohlcData.map((item) => item.time.toLocaleDateString());

  useEffect(() => {
    if (isError) {
      drawErrorState();
    } else if (closingPrices.length > 0) {
      drawChart(closingPrices, dates);
    }
  }, [ohlcData, isError, error]);

  const drawErrorState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set background
    ctx.fillStyle = "#f8f9fa";
    ctx.fillRect(0, 0, width, height);

    // Draw error icon (circle with exclamation)
    const centerX = width / 2;
    const centerY = height / 2 - 40;
    const iconRadius = 25;

    // Error circle
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(centerX, centerY, iconRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Exclamation mark
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("!", centerX, centerY);

    // Error title
    ctx.fillStyle = "#374151";
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Error Loading Line Chart Data", centerX, centerY + 50);

    // Error message
    ctx.fillStyle = "#6b7280";
    ctx.font = "14px Arial";
    const errorMessage = error?.message || error?.toString() || "An unknown error occurred";
    
    // Split long error messages into multiple lines
    const maxWidth = width - 100;
    const words = errorMessage.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width_test = ctx.measureText(currentLine + " " + word).width;
      if (width_test < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // Draw error message lines
    lines.forEach((line, index) => {
      ctx.fillText(line, centerX, centerY + 80 + (index * 18));
    });

    // Draw retry suggestion
    ctx.fillStyle = "#9ca3af";
    ctx.font = "12px Arial";
    ctx.fillText("Please try refreshing or contact support if the issue persists", centerX, centerY + 130);
  };

  const drawChart = (data: number[], fetchedDates: string[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;
    const margin = 50;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    const maxPrice = Math.max(...data);
    const minPrice = Math.min(...data);
    const priceRange = maxPrice - minPrice;

    ctx.strokeStyle = "#e0e0e0";
    for (let i = 0; i <= 5; i++) {
      const yPos =
        height -
        margin -
        ((priceRange * (i / 5)) / priceRange) * (height - margin * 2);
      ctx.beginPath();
      ctx.moveTo(margin, yPos);
      ctx.lineTo(width - margin, yPos);
      ctx.stroke();
    }

    ctx.lineWidth = 2;
    for (let index = 0; index < data.length - 1; index++) {
      const x1 = margin + index * ((width - margin * 2) / (data.length - 1));
      const y1 =
        height -
        margin -
        ((data[index] - minPrice) / priceRange) * (height - margin * 2);
      const x2 =
        margin + (index + 1) * ((width - margin * 2) / (data.length - 1));
      const y2 =
        height -
        margin -
        ((data[index + 1] - minPrice) / priceRange) * (height - margin * 2);

      ctx.strokeStyle = data[index + 1] > data[index] ? "green" : "red";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.fillStyle = data[index + 1] > data[index] ? "green" : "red";
      ctx.beginPath();
      ctx.arc(x2, y2, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    for (let i = 0; i <= 5; i++) {
      const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
      const yPos =
        height -
        margin -
        ((+priceLabel - minPrice) / priceRange) * (height - margin * 2);
      ctx.fillText(priceLabel, margin - 10, yPos);
    }

    ctx.textAlign = "center";
    const barWidth = (width - margin * 2) / (fetchedDates.length - 1);
    fetchedDates.forEach((date, index) => {
      const x = margin + index * barWidth;
      ctx.save();
      ctx.translate(x, height - margin + 25);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(date, 0, 0);
      ctx.restore();
    });

    if (tooltip.visible) {
      ctx.fillStyle = "white";
      ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
      ctx.strokeStyle = "black";
      ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
      ctx.fillStyle = "black";
      ctx.fillText(tooltip.price, tooltip.x + 10, tooltip.y - 10);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // Don't handle mouse events if there's an error
    if (isError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const barWidth = (canvas.width - 50 * 2) / (closingPrices.length - 1);
    let found = false;

    for (let index = 0; index < closingPrices.length; index++) {
      const barX = 50 + index * barWidth;
      if (x >= barX - barWidth / 2 && x <= barX + barWidth / 2) {
        const price = closingPrices[index];
        setTooltip({
          visible: true,
          x: barX + barWidth / 2 - 40,
          y: e.clientY - canvas.getBoundingClientRect().top,
          price: `₹${price.toFixed(2)}`,
        });
        found = true;
        break;
      }
    }

    if (!found) {
      setTooltip({ ...tooltip, visible: false });
    }

    drawChart(closingPrices, dates);
  };

  return (
    <motion.div
      className="max-w-4xl p-4 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="border shadow-xl rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg sm:text-2xl">
            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-2">
                <span>
                  {name.charAt(0).toUpperCase() + name.slice(1)} - Last 7 Days
                </span>
                {isError ? (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                ) : (
                  <Info className="w-4 h-4 text-muted-foreground" />
                )}
              </HoverCardTrigger>
              <HoverCardContent className="text-sm">
                {isError 
                  ? "Error loading line chart data. Please try again."
                  : "Line chart of the closing prices for the last 7 days."
                }
              </HoverCardContent>
            </HoverCard>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            onMouseMove={handleMouseMove}
            className="w-full max-w-full border rounded-md"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LineChart;