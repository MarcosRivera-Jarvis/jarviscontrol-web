import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Landing } from "./routes";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
