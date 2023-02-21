import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();