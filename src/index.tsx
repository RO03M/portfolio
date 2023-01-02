import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log("%cMy Github account: https://github.com/RO03M", "color: white; background-color: #403d39; padding: 5px;");
console.log("%cMy Linkedin account: https://www.linkedin.com/in/gabriel-romera-0286a11ba/", "color: white; background-color: #154c79; padding: 5px;");
console.log("%cMade by Gabriel Romera", "color: white; background-color: #3a86ff; padding: 5px; font-weight: bolder;");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
