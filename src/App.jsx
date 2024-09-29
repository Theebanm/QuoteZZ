import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RandomQuotes from "./Pages/RandomQuotes";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random" element={<RandomQuotes />} />
      </Routes>
    </div>
  );
};

export default App;
