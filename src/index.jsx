import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementInicioDeSesion } from "./screens/ElementInicioDeSesion";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementInicioDeSesion />);
