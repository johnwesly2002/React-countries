import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import {ThemeProvider} from './contexts/ThemeContext';
const root = createRoot(document.querySelector("#root"));

root.render(
    <ThemeProvider>
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:CountryDetail" element={<CountryDetail />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
);
