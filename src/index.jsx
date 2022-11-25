import React from "react";
import { createRoot } from "react-dom/client";

//Components
import App from "../src/Routes";

//Intégration avec le index.html du dossier public
createRoot(document.getElementById("root")).render(<App />);
