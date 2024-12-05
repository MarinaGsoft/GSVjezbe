import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import  RegisterPage  from "./components/Register/RegisterPage";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};
