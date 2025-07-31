// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";

// interface CandlestickChartProps {
//   name: string;
// }

// interface OhlcData {
//   time: Date;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
// }

// const CandlestickChart: React.FC<CandlestickChartProps> = ({ name }) => {
//   console.log("Name from OHLC Chart", name, typeof name);

//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   // const tooltipRef = useRef<HTMLDivElement | null>(null);
//   const [ohlcData, setOhlcData] = useState<OhlcData[]>([]);
//   const [zoomFactor, setZoomFactor] = useState(1);
//   // const [offsetX, setOffsetX] = useState(0);
//   const offsetX = 0;
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     price: "",
//   });

//   useEffect(() => {
//     const fetchOhlcData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${name}/ohlc?vs_currency=inr&days=7`
//         );
//         const data = response.data;

//         // Transform data for charting
//         const ohlcData = data.map((item: any) => ({
//           time: new Date(item[0]),
//           open: item[1],
//           high: item[2],
//           low: item[3],
//           close: item[4],
//         }));

//         setOhlcData(ohlcData);
//         drawChart(ohlcData);
//       } catch (error) {
//         console.error("Error fetching OHLC data:", error);
//       }
//     };

//     fetchOhlcData();
//   }, [name]);

//   const drawChart = (data: OhlcData[]) => {
//     const canvas = canvasRef.current;

//     // Check if canvas is not null
//     if (canvas) {
//       const ctx = canvas.getContext("2d");

//       // Check if ctx is not null
//       if (ctx) {
//         const width = canvas.width;
//         const height = canvas.height;
//         const margin = 50;
//         const barWidth = ((width - margin * 2) / data.length) * zoomFactor;

//         ctx.clearRect(0, 0, width, height);

//         // Determine the scale
//         const maxPrice = Math.max(...data.map((d) => d.high));
//         const minPrice = Math.min(...data.map((d) => d.low));
//         const priceRange = maxPrice - minPrice;

//         // Draw the OHLC bars
//         data.forEach((d, index) => {
//           const x = margin + index * barWidth + offsetX;
//           const yOpen =
//             height -
//             margin -
//             ((d.open - minPrice) / priceRange) * (height - margin * 2);
//           const yClose =
//             height -
//             margin -
//             ((d.close - minPrice) / priceRange) * (height - margin * 2);
//           const yHigh =
//             height -
//             margin -
//             ((d.high - minPrice) / priceRange) * (height - margin * 2);
//           const yLow =
//             height -
//             margin -
//             ((d.low - minPrice) / priceRange) * (height - margin * 2);

//           ctx.fillStyle = d.close > d.open ? "green" : "red";
//           ctx.fillRect(
//             x + barWidth / 4,
//             Math.min(yOpen, yClose),
//             barWidth / 2,
//             Math.abs(yClose - yOpen)
//           );
//           ctx.strokeStyle = "black";
//           ctx.beginPath();
//           ctx.moveTo(x + barWidth / 2, yHigh);
//           ctx.lineTo(x + barWidth / 2, yLow);
//           ctx.stroke();
//         });

//         // Draw X-axis (dates) vertically with spacing
//         ctx.fillStyle = "black";
//         ctx.textAlign = "center";
//         const labelInterval = Math.floor(data.length / 5); // Change this for more or fewer labels
//         data.forEach((d, index) => {
//           if (index % labelInterval === 0) {
//             const dateStr = d.time.toLocaleDateString(); // Format the date
//             ctx.save();
//             ctx.translate(
//               margin + index * barWidth + offsetX + barWidth / 2,
//               height - margin / 2
//             );
//             ctx.rotate(-Math.PI / 2); // Rotate the text
//             ctx.fillText(dateStr, 0, 0);
//             ctx.restore();
//           }
//         });

//         // Draw Y-axis (prices)
//         ctx.textAlign = "right";
//         for (let i = 0; i <= 5; i++) {
//           const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
//           const priceLabelNumber = parseFloat(priceLabel);
//           const yPos =
//             height -
//             margin -
//             ((priceLabelNumber - minPrice) / priceRange) *
//               (height - margin * 2);
//           ctx.fillText(priceLabel, margin - 10, yPos);
//         }

//         // Draw tooltip if visible
//         if (tooltip.visible) {
//           ctx.fillStyle = "white";
//           ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
//           ctx.strokeStyle = "black";
//           ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
//           ctx.fillStyle = "black";
//           ctx.fillText(tooltip.price, tooltip.x + 40, tooltip.y - 10);
//         }
//       } else {
//         console.error("Failed to get the 2D context from the canvas.");
//       }
//     } else {
//       console.error("Canvas is not available.");
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const x = e.clientX - canvas.getBoundingClientRect().left;
//       const barWidth = ((canvas.width - 50 * 2) / ohlcData.length) * zoomFactor;

//       let found = false;
//       for (let index = 0; index < ohlcData.length; index++) {
//         const barX = 50 + index * barWidth + offsetX;
//         if (x >= barX && x <= barX + barWidth) {
//           const price = ohlcData[index].close; // Display closing price on hover
//           setTooltip({
//             visible: true,
//             x: barX + barWidth / 2 - 40,
//             y: e.clientY - canvas.getBoundingClientRect().top,
//             price: `$${price.toFixed(2)}`,
//           });
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         setTooltip({ ...tooltip, visible: false }); // Hide tooltip if not hovering over a bar
//       }

//       drawChart(ohlcData);
//     }
//   };

//   const zoomIn = () => {
//     setZoomFactor((prev) => Math.min(prev * 1.2, 5));
//     drawChart(ohlcData);
//   };

//   const zoomOut = () => {
//     setZoomFactor((prev) => Math.max(prev * 0.8, 1));
//     drawChart(ohlcData);
//   };

//   return (
//     <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
//       <h2 className="mb-4 text-2xl font-bold">
//         {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} Candlestick
//         Chart (Last 7 Days)
//       </h2>
//       <canvas
//         ref={canvasRef}
//         width={800}
//         height={400}
//         onMouseMove={handleMouseMove}
//       />
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={zoomIn}
//           className="px-4 py-2 text-white bg-blue-500 rounded"
//         >
//           +
//         </button>
//         <button
//           onClick={zoomOut}
//           className="px-4 py-2 text-white bg-blue-500 rounded"
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CandlestickChart;

// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { ZoomIn, ZoomOut } from "lucide-react";
// import { motion } from "framer-motion";

// interface OhlcData {
//   time: Date;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
// }

// interface CandlestickChartProps {
//   name: string;
//   ohlcData: OhlcData[];
//   error: any;
//   isError: boolean;
// }

// const CandlestickChart: React.FC<CandlestickChartProps> = ({
//   name,
//   ohlcData,
//   error,
//   isError,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   // const [ohlcData, setOhlcData] = useState<OhlcData[]>([]);
//   const [zoomFactor, setZoomFactor] = useState(1);
//   const offsetX = 0;

//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     price: "",
//   });

//   useEffect(() => {
//     if (ohlcData.length > 0) {
//       drawChart(ohlcData);
//     }
//   }, [ohlcData, zoomFactor]);

//   const drawChart = (data: OhlcData[]) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const width = canvas.width;
//     const height = canvas.height;
//     const margin = 50;
//     const barWidth = ((width - margin * 2) / data.length) * zoomFactor;

//     ctx.clearRect(0, 0, width, height);

//     const maxPrice = Math.max(...data.map((d) => d.high));
//     const minPrice = Math.min(...data.map((d) => d.low));
//     const priceRange = maxPrice - minPrice;

//     data.forEach((d, index) => {
//       const x = margin + index * barWidth + offsetX;
//       const yOpen =
//         height -
//         margin -
//         ((d.open - minPrice) / priceRange) * (height - margin * 2);
//       const yClose =
//         height -
//         margin -
//         ((d.close - minPrice) / priceRange) * (height - margin * 2);
//       const yHigh =
//         height -
//         margin -
//         ((d.high - minPrice) / priceRange) * (height - margin * 2);
//       const yLow =
//         height -
//         margin -
//         ((d.low - minPrice) / priceRange) * (height - margin * 2);

//       ctx.fillStyle = d.close > d.open ? "green" : "red";
//       ctx.fillRect(
//         x + barWidth / 4,
//         Math.min(yOpen, yClose),
//         barWidth / 2,
//         Math.abs(yClose - yOpen)
//       );
//       ctx.strokeStyle = "#1e293b";
//       ctx.beginPath();
//       ctx.moveTo(x + barWidth / 2, yHigh);
//       ctx.lineTo(x + barWidth / 2, yLow);
//       ctx.stroke();
//     });

//     ctx.fillStyle = "#475569";
//     ctx.textAlign = "center";
//     const labelInterval = Math.floor(data.length / 5);
//     data.forEach((d, index) => {
//       if (index % labelInterval === 0) {
//         const dateStr = d.time.toLocaleDateString();
//         ctx.save();
//         ctx.translate(
//           margin + index * barWidth + offsetX + barWidth / 2,
//           height - margin / 2
//         );
//         ctx.rotate(-Math.PI / 2);
//         ctx.fillText(dateStr, 0, 0);
//         ctx.restore();
//       }
//     });

//     ctx.textAlign = "right";
//     for (let i = 0; i <= 5; i++) {
//       const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
//       const yPos =
//         height -
//         margin -
//         ((parseFloat(priceLabel) - minPrice) / priceRange) *
//           (height - margin * 2);
//       ctx.fillText(priceLabel, margin - 10, yPos);
//     }

//     if (tooltip.visible) {
//       ctx.fillStyle = "#fff";
//       ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.strokeStyle = "#000";
//       ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
//       ctx.fillStyle = "#000";
//       ctx.fillText(tooltip.price, tooltip.x + 40, tooltip.y - 10);
//     }
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const x = e.clientX - canvas.getBoundingClientRect().left;
//     const barWidth = ((canvas.width - 50 * 2) / ohlcData.length) * zoomFactor;

//     let found = false;
//     for (let index = 0; index < ohlcData.length; index++) {
//       const barX = 50 + index * barWidth + offsetX;
//       if (x >= barX && x <= barX + barWidth) {
//         const price = ohlcData[index].close;
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

//     drawChart(ohlcData);
//   };

//   const zoomIn = () => {
//     setZoomFactor((prev) => Math.min(prev * 1.2, 5));
//     drawChart(ohlcData);
//   };

//   const zoomOut = () => {
//     setZoomFactor((prev) => Math.max(prev * 0.8, 1));
//     drawChart(ohlcData);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-5xl p-4 mx-auto"
//     >
//       <Card className="w-full border shadow-xl bg-background">
//         <CardContent className="p-6">
//           <h2 className="mb-4 text-xl font-bold text-center">
//             {name.charAt(0).toUpperCase() + name.slice(1)} Candlestick Chart
//             (Last 7 Days)
//           </h2>
//           <canvas
//             ref={canvasRef}
//             width={1000}
//             height={400}
//             onMouseMove={handleMouseMove}
//             className="w-full border rounded-md"
//           />
//           <div className="flex justify-center gap-4 mt-6">
//             <Button
//               onClick={zoomIn}
//               variant="secondary"
//               className="flex items-center gap-2"
//             >
//               <ZoomIn size={18} /> Zoom In
//             </Button>
//             <Button
//               onClick={zoomOut}
//               variant="secondary"
//               className="flex items-center gap-2"
//             >
//               <ZoomOut size={18} /> Zoom Out
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default CandlestickChart;



import React, { useEffect, useRef, useState } from "react";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ZoomIn, ZoomOut, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface OhlcData {
  time: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  name: string;
  ohlcData: OhlcData[];
  error: any;
  isError: boolean;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({
  name,
  ohlcData,
  error,
  isError,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const [ohlcData, setOhlcData] = useState<OhlcData[]>([]);
  const [zoomFactor, setZoomFactor] = useState(1);
  const offsetX = 0;

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    price: "",
  });

  useEffect(() => {
    if (isError) {
      drawErrorState();
    } else if (ohlcData.length > 0) {
      drawChart(ohlcData);
    }
  }, [ohlcData, zoomFactor, isError, error]);

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
    const iconRadius = 30;

    // Error circle
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(centerX, centerY, iconRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Exclamation mark
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("!", centerX, centerY);

    // Error title
    ctx.fillStyle = "#374151";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Error Loading Chart Data", centerX, centerY + 60);

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
      ctx.fillText(line, centerX, centerY + 90 + (index * 20));
    });

    // Draw retry suggestion
    ctx.fillStyle = "#9ca3af";
    ctx.font = "12px Arial";
    ctx.fillText("Please try refreshing or contact support if the issue persists", centerX, centerY + 140);
  };

  const drawChart = (data: OhlcData[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const margin = 50;
    const barWidth = ((width - margin * 2) / data.length) * zoomFactor;

    ctx.clearRect(0, 0, width, height);

    const maxPrice = Math.max(...data.map((d) => d.high));
    const minPrice = Math.min(...data.map((d) => d.low));
    const priceRange = maxPrice - minPrice;

    data.forEach((d, index) => {
      const x = margin + index * barWidth + offsetX;
      const yOpen =
        height -
        margin -
        ((d.open - minPrice) / priceRange) * (height - margin * 2);
      const yClose =
        height -
        margin -
        ((d.close - minPrice) / priceRange) * (height - margin * 2);
      const yHigh =
        height -
        margin -
        ((d.high - minPrice) / priceRange) * (height - margin * 2);
      const yLow =
        height -
        margin -
        ((d.low - minPrice) / priceRange) * (height - margin * 2);

      ctx.fillStyle = d.close > d.open ? "green" : "red";
      ctx.fillRect(
        x + barWidth / 4,
        Math.min(yOpen, yClose),
        barWidth / 2,
        Math.abs(yClose - yOpen)
      );
      ctx.strokeStyle = "#1e293b";
      ctx.beginPath();
      ctx.moveTo(x + barWidth / 2, yHigh);
      ctx.lineTo(x + barWidth / 2, yLow);
      ctx.stroke();
    });

    ctx.fillStyle = "#475569";
    ctx.textAlign = "center";
    const labelInterval = Math.floor(data.length / 5);
    data.forEach((d, index) => {
      if (index % labelInterval === 0) {
        const dateStr = d.time.toLocaleDateString();
        ctx.save();
        ctx.translate(
          margin + index * barWidth + offsetX + barWidth / 2,
          height - margin / 2
        );
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(dateStr, 0, 0);
        ctx.restore();
      }
    });

    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
      const priceLabel = (minPrice + priceRange * (i / 5)).toFixed(2);
      const yPos =
        height -
        margin -
        ((parseFloat(priceLabel) - minPrice) / priceRange) *
          (height - margin * 2);
      ctx.fillText(priceLabel, margin - 10, yPos);
    }

    if (tooltip.visible) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(tooltip.x, tooltip.y - 30, 80, 25);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(tooltip.x, tooltip.y - 30, 80, 25);
      ctx.fillStyle = "#000";
      ctx.fillText(tooltip.price, tooltip.x + 40, tooltip.y - 10);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // Don't handle mouse events if there's an error
    if (isError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = e.clientX - canvas.getBoundingClientRect().left;
    const barWidth = ((canvas.width - 50 * 2) / ohlcData.length) * zoomFactor;

    let found = false;
    for (let index = 0; index < ohlcData.length; index++) {
      const barX = 50 + index * barWidth + offsetX;
      if (x >= barX && x <= barX + barWidth) {
        const price = ohlcData[index].close;
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

    drawChart(ohlcData);
  };

  const zoomIn = () => {
    if (isError) return;
    setZoomFactor((prev) => Math.min(prev * 1.2, 5));
    drawChart(ohlcData);
  };

  const zoomOut = () => {
    if (isError) return;
    setZoomFactor((prev) => Math.max(prev * 0.8, 1));
    drawChart(ohlcData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl p-4 mx-auto"
    >
      <Card className="w-full border shadow-xl bg-background">
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-bold text-center">
            {name.charAt(0).toUpperCase() + name.slice(1)} Candlestick Chart
            (Last 7 Days)
            {isError && <AlertCircle className="inline-block ml-2 text-red-500" size={20} />}
          </h2>
          <canvas
            ref={canvasRef}
            width={1000}
            height={400}
            onMouseMove={handleMouseMove}
            className="w-full border rounded-md"
          />
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={zoomIn}
              variant="secondary"
              className="flex items-center gap-2"
              disabled={isError}
            >
              <ZoomIn size={18} /> Zoom In
            </Button>
            <Button
              onClick={zoomOut}
              variant="secondary"
              className="flex items-center gap-2"
              disabled={isError}
            >
              <ZoomOut size={18} /> Zoom Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CandlestickChart;