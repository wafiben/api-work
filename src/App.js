import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
