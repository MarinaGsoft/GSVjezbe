import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Register } from "./components/Register";
import { HomePage2 } from "./components/HomePage2/HomePage2";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};
