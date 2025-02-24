import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "remixicon/fonts/remixicon.css"; // ✅ Import Remix Icons globally
import './index.css'; // Ensure Tailwind or other styles load properly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
