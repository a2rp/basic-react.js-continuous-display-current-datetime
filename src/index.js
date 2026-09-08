import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// StrictMode helps surface unsafe React patterns during development.
const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
