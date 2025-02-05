import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterCntxProvider } from "./cntx/counter-cntx.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode >
    
    <CounterCntxProvider>
      <App />
    </CounterCntxProvider>
  </StrictMode>
);
