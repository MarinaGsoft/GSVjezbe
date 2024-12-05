import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
const brojGodina= 25

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage age={brojGodina} />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/registerpage" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
};
