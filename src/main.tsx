import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ThemeToggle } from "./components/theme-toggle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" />
    <ThemeProvider>
      <App />
      {/* Theme Button */}
      <div className="fixed bottom-10 right-6 z-50">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  </StrictMode>,
);
