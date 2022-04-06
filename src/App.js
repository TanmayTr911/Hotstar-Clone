import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Help from "./components/Help";
import AboutUS from "./components/AboutUs";
import styled from "styled-components";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
