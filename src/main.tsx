import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster position="top-center" />

      <App />

      <div className="fixed bottom-10 right-6 z-50">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
