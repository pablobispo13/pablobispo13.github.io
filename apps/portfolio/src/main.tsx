import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { App } from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Tema escuro por padrão, como o site original */}
    <Provider defaultTheme="dark">
      <App />
    </Provider>
  </StrictMode>,
);
