import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LapOverView from "./pages/LapOverView";
function App() { 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LapOverView/:id" element={<LapOverView />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
