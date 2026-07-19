import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { AuthProvider } from "../context/AuthContext";
import { CompanyProvider } from "../context/CompanyContext";
import { DocumentProvider } from "../context/DocumentContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")!
)
  .render(

    <React.StrictMode>

      <AuthProvider>

        <CompanyProvider>

          <DocumentProvider>

            <App />

            <Toaster
              position="top-right"
            />

          </DocumentProvider>

        </CompanyProvider>

      </AuthProvider>

    </React.StrictMode>

  );