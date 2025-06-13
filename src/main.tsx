import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router";
import router from "./router/index.tsx";
import "./assets/main.sass";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>,
);
