import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
