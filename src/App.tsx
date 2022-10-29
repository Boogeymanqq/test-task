import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MainAddress } from "./pages/Address/MainAddress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<MainAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
