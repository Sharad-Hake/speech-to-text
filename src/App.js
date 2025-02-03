import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./nav/Sidebar";
import Home from "./components/Home";
import SpeechToText from "./components/SpeechToText";
import Login from "./components/Login";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import PublicRoutes from "./Auth/PublicRoutes";
import './App.css'; // Optional: If you have global styles

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route element={<Sidebar />}>
          <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="/SpeechToText" element={<ProtectedRoutes><SpeechToText /></ProtectedRoutes>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;