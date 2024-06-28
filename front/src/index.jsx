import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { SweetShopProvider } from './context/SweetShopContext';
import reportWebVitals from './reportWebVitals';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SweetShopProvider>
      <App />
    </SweetShopProvider>
  </React.StrictMode>
);

reportWebVitals();
