import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Footer from './Footer.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
