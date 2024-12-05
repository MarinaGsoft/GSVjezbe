import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Registration } from "./components/Register";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage age={26} />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Registration />} />

      </Routes>
    </Router>
  );
};
