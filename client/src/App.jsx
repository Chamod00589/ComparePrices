import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LapOverView from "./pages/LapOverView";
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() { 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LapOverView/:id" element={<LapOverView />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
