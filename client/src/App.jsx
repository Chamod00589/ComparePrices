import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LapOverView from "./pages/LapOverView";
function App() { 
  return (
    // <div className="flex justify-center items-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LapOverView" element={<LapOverView />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
