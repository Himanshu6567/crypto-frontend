import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import HomePage from "./HomePage";
import AllCoins from "./AllCoins";
import Footer from "./components/HomePage/Footer";
import CoinData from "./CoinDetails";
import NotFoundPage from "./components/HomePage/NotFoundPage";
const App = () => {
    return (_jsxs(Router, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/coins", element: _jsx(AllCoins, {}) }), _jsx(Route, { path: "/coins/:name", element: _jsx(CoinData, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }), _jsx(Footer, {})] }));
};
export default App;
