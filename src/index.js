import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/index.scss";
import { App } from "./routes/App";
import reportWebVitals from "./reportWebVitals";

// The following is no longer supported in React 18
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// New React client rendering method
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
