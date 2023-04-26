import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RequestSummaryController from "./controller/RequestSummaryController"

const root = document.createElement("div")
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);

rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
