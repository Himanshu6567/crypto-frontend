import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import HomePage from "./HomePage";
import AllCoins from "./AllCoins";
import Footer from "./components/HomePage/Footer";
import CoinData from "./CoinDetails";
import NotFoundPage from "./components/HomePage/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<AllCoins />} />
        <Route path="/coins/:name" element={<CoinData />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/HomePage/Navbar";
// import HomePage from "./HomePage";
// import AllCoins from "./AllCoins";
// import Footer from "./components/HomePage/Footer";
// import CoinData from "./CoinDetails";
// import NotFoundPage from "./components/HomePage/NotFoundPage";

// const App: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Router>
//         <Navbar />
        
//         {/* Main content that takes remaining height */}
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/coins" element={<AllCoins />} />
//             <Route path="/coins/:name" element={<CoinData />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>

//         {/* Always stays at bottom */}
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;
