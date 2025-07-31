// // src/components/FinancialLineChart.tsx
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";

// interface LineChartProps {
//   name: string;
// }
// const LineChart: React.FC<LineChartProps> = ({ name }) => {

//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [closingPrices, setClosingPrices] = useState<number[]>([]);
//   const [dates, setDates] = useState<string[]>([]);
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     price: "",
//   });

//   useEffect(() => {
//     const fetchClosingPrices = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${name}/ohlc?vs_currency=inr&days=7`
//         );
//         const prices = response.data.map((item: any) => item[4]); // Closing prices
//         const fetchedDates = response.data.map((item: any) =>
//           new Date(item[0]).toLocaleDateString()
//         ); // Dates
//         setClosingPrices(prices);
//         setDates(fetchedDates);
//         drawChart(prices, fetchedDates);
//       } catch (error) {
//         console.error("Error fetching closing prices:", error);
//       }
//     };

//     fetchClosingPrices();
//   }, []);

//   const drawChart = (data: number[], fetchedDates: string[]) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;

//     // const ctx: CanvasRenderingContext2D | null = canvas?.getContext("2d");

//     const width = canvas.width;
//     const height = canvas.height;
//     const margin = 50;

//     ctx.clearRect(0, 0, width, height);
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, width, height);

//     // Determine the scale
//     const maxPrice = Math.max(...data);
//     const minPrice = Math.min(...data);
//     const priceRange = maxPrice - minPrice;

//     // Draw grid
//     ctx.strokeStyle = "#e0e0e0"; // Grid color
//     ctx.lineWidth = 1;

//     for (let i = 0; i <= 5; i++) {
//       const yPos =
//         height -
//         margin -
//         ((priceRange * (i / 5)) / priceRange) * (height - margin * 2);
//       ctx.beginPath();
//       ctx.moveTo(margin, yPos);
//       ctx.lineTo(width - margin, yPos);
//       ctx.stroke();
//     }

//     // Draw the line
//     ctx.lineWidth = 2;

//     // Draw line segments with color changes based on price trends
//     for (let index = 0; index < data.length - 1; index++) {
//       const x1 = margin + index * ((width - margin * 2) / (data.length - 1));
//       const y1 =
//         height -
//         margin -
//         ((data[index] - minPrice) / priceRange) * (height - margin * 2);
//       const x2 =
//         margin + (index + 1) * ((width - margin * 2) / (data.length - 1));
//       const y2 =
//         height -
//         margin -
//         ((data[index + 1] - minPrice) / priceRange) * (height - margin * 2);

//       ctx.strokeStyle = data[index + 1] > data[index] ? "green" : "red"; // Set line color based on price trend
//       ctx.beginPath();
//       ctx.moveTo(x1, y1);
//       ctx.lineTo(x2, y2);
//       ctx.stroke();

//       // Draw points at highs and lows
//       ctx.fillStyle = data[index + 1] > data[index] ? "green" : "red"; // Set point color based on price trend
//       ctx.beginPath();
//       ctx.arc(x2, y2, 4, 0, Math.PI * 2); // Draw point at each price
//       ctx.fill();
//     }

//     // Draw Y-axis (prices)
//     ctx.textAlign = "right";
//     ctx.fillStyle = "black"; // Color for the price labels

//     for (let i = 0; i <= 5; i++) {
//       const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
//       const priceLabelNumber = parseFloat(priceLabel);
//       const yPos =
//         height -
//         margin -
//         ((priceLabelNumber - minPrice) / priceRange) * (height - margin * 2);
//       ctx.fillText(priceLabel, margin - 10, yPos);
//     }

//     // Draw X-axis (dates) at the bottom of the chart vertically
//     ctx.textAlign = "center";
//     const barWidth = (width - margin * 2) / (fetchedDates.length - 1); // Width of each date label
//     fetchedDates.forEach((date, index) => {
//       const x = margin + index * barWidth; // Calculate x position for each date
//       ctx.save(); // Save the current state
//       ctx.translate(x, height - margin + 25); // Move to x position at the bottom of the chart
//       ctx.rotate(-Math.PI / 2); // Rotate the context to write vertically
//       ctx.fillText(date, 0, 0); // Display date
//       ctx.restore(); // Restore the original state
//     });

//     // Draw tooltip if visible
//     if (tooltip.visible) {
//       ctx.fillStyle = "white";
//       ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.strokeStyle = "black";
//       ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.fillStyle = "black";
//       ctx.fillText(tooltip.price, tooltip.x + 10, tooltip.y - 10);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const x = e.clientX - canvas.getBoundingClientRect().left;
//     const barWidth = (canvas.width - 50 * 2) / (closingPrices.length - 1);

//     let found = false;
//     for (let index = 0; index < closingPrices.length; index++) {
//       const barX = 50 + index * barWidth;
//       if (x >= barX - barWidth / 2 && x <= barX + barWidth / 2) {
//         const price = closingPrices[index]; // Display closing price on hover
//         setTooltip({
//           visible: true,
//           x: barX + barWidth / 2 - 40,
//           y: e.clientY - canvas.getBoundingClientRect().top,
//           price: `$${price.toFixed(2)}`,
//         });
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       setTooltip({ ...tooltip, visible: false }); // Hide tooltip if not hovering over a price point
//     }

//     drawChart(closingPrices, dates);
//   };

//   return (
//     <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
//       <h2 className="mb-4 text-2xl font-bold">
//         {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} Line Chart
//         (Last 7 Days)
//       </h2>
//       <canvas
//         ref={canvasRef}
//         width={800}
//         height={400}
//         onMouseMove={handleMouseMove}
//       />
//     </div>
//   );
// };

// export default LineChart;
////////////////////////////////////////////////////////////////

// src/components/FinancialLineChart.tsx

// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
// import { HoverCard, HoverCardTrigger, HoverCardContent } from "../../components/ui/hover-card";
// import { Skeleton } from "../../components/ui/skeleton";
// import { motion } from "framer-motion";
// import { Info } from "lucide-react";

// interface LineChartProps {
//   name: string;
//   ohlcData: OhlcData[];
// }

// const LineChart: React.FC<LineChartProps> = ({ name }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [closingPrices, setClosingPrices] = useState<number[]>([]);
//   const [dates, setDates] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     price: "",
//   });

//   // useEffect(() => {
//   //   const fetchClosingPrices = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         `https://api.coingecko.com/api/v3/coins/${name}/ohlc?vs_currency=inr&days=7`
//   //       );
//   //       const prices = response.data.map((item: any) => item[4]);
//   //       const fetchedDates = response.data.map((item: any) =>
//   //         new Date(item[0]).toLocaleDateString()
//   //       );
//   //       setClosingPrices(prices);
//   //       setDates(fetchedDates);
//   //       setLoading(false);
//   //       drawChart(prices, fetchedDates);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };
//   //   fetchClosingPrices();
//   // }, []);

//   const drawChart = (data: number[], fetchedDates: string[]) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     const width = canvas.width;
//     const height = canvas.height;
//     const margin = 50;

//     ctx.clearRect(0, 0, width, height);
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, width, height);

//     const maxPrice = Math.max(...data);
//     const minPrice = Math.min(...data);
//     const priceRange = maxPrice - minPrice;

//     ctx.strokeStyle = "#e0e0e0";
//     for (let i = 0; i <= 5; i++) {
//       const yPos =
//         height - margin - ((priceRange * (i / 5)) / priceRange) * (height - margin * 2);
//       ctx.beginPath();
//       ctx.moveTo(margin, yPos);
//       ctx.lineTo(width - margin, yPos);
//       ctx.stroke();
//     }

//     ctx.lineWidth = 2;
//     for (let index = 0; index < data.length - 1; index++) {
//       const x1 = margin + index * ((width - margin * 2) / (data.length - 1));
//       const y1 =
//         height - margin - ((data[index] - minPrice) / priceRange) * (height - margin * 2);
//       const x2 = margin + (index + 1) * ((width - margin * 2) / (data.length - 1));
//       const y2 =
//         height -
//         margin -
//         ((data[index + 1] - minPrice) / priceRange) * (height - margin * 2);

//       ctx.strokeStyle = data[index + 1] > data[index] ? "green" : "red";
//       ctx.beginPath();
//       ctx.moveTo(x1, y1);
//       ctx.lineTo(x2, y2);
//       ctx.stroke();

//       ctx.fillStyle = data[index + 1] > data[index] ? "green" : "red";
//       ctx.beginPath();
//       ctx.arc(x2, y2, 4, 0, Math.PI * 2);
//       ctx.fill();
//     }

//     ctx.textAlign = "right";
//     ctx.fillStyle = "black";
//     for (let i = 0; i <= 5; i++) {
//       const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
//       const yPos =
//         height - margin - ((+priceLabel - minPrice) / priceRange) * (height - margin * 2);
//       ctx.fillText(priceLabel, margin - 10, yPos);
//     }

//     ctx.textAlign = "center";
//     const barWidth = (width - margin * 2) / (fetchedDates.length - 1);
//     fetchedDates.forEach((date, index) => {
//       const x = margin + index * barWidth;
//       ctx.save();
//       ctx.translate(x, height - margin + 25);
//       ctx.rotate(-Math.PI / 2);
//       ctx.fillText(date, 0, 0);
//       ctx.restore();
//     });

//     if (tooltip.visible) {
//       ctx.fillStyle = "white";
//       ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.strokeStyle = "black";
//       ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.fillStyle = "black";
//       ctx.fillText(tooltip.price, tooltip.x + 10, tooltip.y - 10);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const x = e.clientX - canvas.getBoundingClientRect().left;
//     const barWidth = (canvas.width - 50 * 2) / (closingPrices.length - 1);
//     let found = false;

//     for (let index = 0; index < closingPrices.length; index++) {
//       const barX = 50 + index * barWidth;
//       if (x >= barX - barWidth / 2 && x <= barX + barWidth / 2) {
//         const price = closingPrices[index];
//         setTooltip({
//           visible: true,
//           x: barX + barWidth / 2 - 40,
//           y: e.clientY - canvas.getBoundingClientRect().top,
//           price: `₹${price.toFixed(2)}`,
//         });
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       setTooltip({ ...tooltip, visible: false });
//     }

//     drawChart(closingPrices, dates);
//   };

//   return (
//     <motion.div
//       className="max-w-4xl p-4 mx-auto"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <Card className="border shadow-xl rounded-xl">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <CardTitle className="text-lg sm:text-2xl">
//             <HoverCard>
//               <HoverCardTrigger className="flex items-center gap-2">
//                 <span>
//                   {name.charAt(0).toUpperCase() + name.slice(1)} - Last 7 Days
//                 </span>
//                 <Info className="w-4 h-4 text-muted-foreground" />
//               </HoverCardTrigger>
//               <HoverCardContent className="text-sm">
//                 Line chart of the closing prices for the last 7 days.
//               </HoverCardContent>
//             </HoverCard>
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           {loading ? (
//             <Skeleton className="w-full h-[400px] rounded-md" />
//           ) : (
//             <canvas
//               ref={canvasRef}
//               width={800}
//               height={400}
//               onMouseMove={handleMouseMove}
//               className="w-full max-w-full border rounded-md"
//             />
//           )}
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default LineChart;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "../../components/ui/card";
// import {
//   HoverCard,
//   HoverCardTrigger,
//   HoverCardContent,
// } from "../../components/ui/hover-card";
// import { motion } from "framer-motion";
// import { Info } from "lucide-react";

// interface OhlcData {
//   time: Date;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
// }

// interface LineChartProps {
//   name: string;
//   ohlcData: OhlcData[];
//   error: any;
//   isError: boolean;
// }

// const LineChart: React.FC<LineChartProps> = ({
//   name,
//   ohlcData,
//   error,
//   isError,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     price: "",
//   });

//   // Extract closing prices and dates from ohlcData
//   const closingPrices = ohlcData.map((item) => item.close);
//   const dates = ohlcData.map((item) => item.time.toLocaleDateString());

//   useEffect(() => {
//     if (closingPrices.length > 0) {
//       drawChart(closingPrices, dates);
//     }
//   }, [ohlcData]);

//   const drawChart = (data: number[], fetchedDates: string[]) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     const width = canvas.width;
//     const height = canvas.height;
//     const margin = 50;

//     ctx.clearRect(0, 0, width, height);
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, width, height);

//     const maxPrice = Math.max(...data);
//     const minPrice = Math.min(...data);
//     const priceRange = maxPrice - minPrice;

//     ctx.strokeStyle = "#e0e0e0";
//     for (let i = 0; i <= 5; i++) {
//       const yPos =
//         height -
//         margin -
//         ((priceRange * (i / 5)) / priceRange) * (height - margin * 2);
//       ctx.beginPath();
//       ctx.moveTo(margin, yPos);
//       ctx.lineTo(width - margin, yPos);
//       ctx.stroke();
//     }

//     ctx.lineWidth = 2;
//     for (let index = 0; index < data.length - 1; index++) {
//       const x1 = margin + index * ((width - margin * 2) / (data.length - 1));
//       const y1 =
//         height -
//         margin -
//         ((data[index] - minPrice) / priceRange) * (height - margin * 2);
//       const x2 =
//         margin + (index + 1) * ((width - margin * 2) / (data.length - 1));
//       const y2 =
//         height -
//         margin -
//         ((data[index + 1] - minPrice) / priceRange) * (height - margin * 2);

//       ctx.strokeStyle = data[index + 1] > data[index] ? "green" : "red";
//       ctx.beginPath();
//       ctx.moveTo(x1, y1);
//       ctx.lineTo(x2, y2);
//       ctx.stroke();

//       ctx.fillStyle = data[index + 1] > data[index] ? "green" : "red";
//       ctx.beginPath();
//       ctx.arc(x2, y2, 4, 0, Math.PI * 2);
//       ctx.fill();
//     }

//     ctx.textAlign = "right";
//     ctx.fillStyle = "black";
//     for (let i = 0; i <= 5; i++) {
//       const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
//       const yPos =
//         height -
//         margin -
//         ((+priceLabel - minPrice) / priceRange) * (height - margin * 2);
//       ctx.fillText(priceLabel, margin - 10, yPos);
//     }

//     ctx.textAlign = "center";
//     const barWidth = (width - margin * 2) / (fetchedDates.length - 1);
//     fetchedDates.forEach((date, index) => {
//       const x = margin + index * barWidth;
//       ctx.save();
//       ctx.translate(x, height - margin + 25);
//       ctx.rotate(-Math.PI / 2);
//       ctx.fillText(date, 0, 0);
//       ctx.restore();
//     });

//     if (tooltip.visible) {
//       ctx.fillStyle = "white";
//       ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.strokeStyle = "black";
//       ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.fillStyle = "black";
//       ctx.fillText(tooltip.price, tooltip.x + 10, tooltip.y - 10);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const x = e.clientX - canvas.getBoundingClientRect().left;
//     const barWidth = (canvas.width - 50 * 2) / (closingPrices.length - 1);
//     let found = false;

//     for (let index = 0; index < closingPrices.length; index++) {
//       const barX = 50 + index * barWidth;
//       if (x >= barX - barWidth / 2 && x <= barX + barWidth / 2) {
//         const price = closingPrices[index];
//         setTooltip({
//           visible: true,
//           x: barX + barWidth / 2 - 40,
//           y: e.clientY - canvas.getBoundingClientRect().top,
//           price: `₹${price.toFixed(2)}`,
//         });
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       setTooltip({ ...tooltip, visible: false });
//     }

//     drawChart(closingPrices, dates);
//   };

//   return (
//     <motion.div
//       className="max-w-4xl p-4 mx-auto"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <Card className="border shadow-xl rounded-xl">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <CardTitle className="text-lg sm:text-2xl">
//             <HoverCard>
//               <HoverCardTrigger className="flex items-center gap-2">
//                 <span>
//                   {name.charAt(0).toUpperCase() + name.slice(1)} - Last 7 Days
//                 </span>
//                 <Info className="w-4 h-4 text-muted-foreground" />
//               </HoverCardTrigger>
//               <HoverCardContent className="text-sm">
//                 Line chart of the closing prices for the last 7 days.
//               </HoverCardContent>
//             </HoverCard>
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={400}
//             onMouseMove={handleMouseMove}
//             className="w-full max-w-full border rounded-md"
//           />
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default LineChart;


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