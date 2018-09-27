import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import AppRouter from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
