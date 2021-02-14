import React from "react";
import ReactDOM from "react-dom";
import "./Files/Css/styles.css";
import reportWebVitals from "./reportWebVitals";
import Routing from "./Components/Route";
import { ProductProvider } from "./Context";

ReactDOM.render(
  <ProductProvider>
    <Routing />
  </ProductProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
