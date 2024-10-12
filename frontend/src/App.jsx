import React from "react";
import Navbar from "./components/layouts/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/layouts/Footer";
import SignIn from "./components/layouts/SignIn";
import Register from "./components/layouts/Register";
import HomePage from "./components/pages/HomePage";
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import Properties from './components/pages/Properties'
import AgentPage from './components/pages/AgentPage'
import MortgageCal from './components/pages/MortgageCal'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/agents" element={<AgentPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/Mortgagecal" element={<MortgageCal />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
