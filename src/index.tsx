import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "@/app";

import "./index.css";

const container = document.querySelector("#root");

if (!container) throw new Error("Container not found");

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
