import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { App } from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Tema espacial: dark fixo */}
    <Provider forcedTheme="dark">
      <App />
    </Provider>
  </StrictMode>,
);
