import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import TransactionsPage from "./pages/Transactions.jsx";
import { H1Icon } from "@heroicons/react/16/solid";
import TransactionDetails from "./pages/TransactionDetails.jsx";
import { ToastContainer } from "react-toastify";
import { TransactionProvider } from "./contexts/TransactionContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionProvider>

        <ThemeProvider>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/transactions/:id" element={<TransactionDetails />} />
        </Routes>

        </ThemeProvider>
        
      </TransactionProvider>
    </BrowserRouter>

    <ToastContainer />
  </StrictMode>
);
