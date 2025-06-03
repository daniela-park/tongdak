import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css'
import TopBar from './Components/TopBar'
import NavBar from './Components/NavBar'
import LandingPage from "./Pages/LandingPage";
import DownloadMenuPage from "./Pages/DownloadMenuPage";
import ShopsPage from "./Pages/ShopsPage";
import OrderPage from "./Pages/OrderPage";
import ContactPage from "./Pages/ContactPage";

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <TopBar />
        <NavBar />
      </div>
      <Routes>
        <Route path="/tongdak" element={<LandingPage />} />
        <Route path="/menu" element={<DownloadMenuPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
