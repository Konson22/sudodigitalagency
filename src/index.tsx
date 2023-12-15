import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import App from './App';
import "./index.css";
import React from 'react';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



