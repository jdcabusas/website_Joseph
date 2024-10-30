// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import YoutubeSearch from './YoutubeSearch'; // Import your YoutubeSearch component
import Career from './Career'; // Import your Career component
import Resume from './Resume'; // Import your Resume component
import Hedera from './Hedera'
//import App from './App'; // Import the App component
import Landing from './Landing'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/youtube" element={<YoutubeSearch />} />
        <Route path="/career" element={<Career />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hedera" element={<Hedera />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
