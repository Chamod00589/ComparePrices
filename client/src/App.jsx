import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/Home";

function App() { 
  return (
    // <div className="flex justify-center items-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
