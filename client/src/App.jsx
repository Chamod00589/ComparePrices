import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() { 
  return (
    // <div className="flex justify-center items-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
