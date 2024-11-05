// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import YoutubeSearch from './YoutubeSearch'; // Import your YoutubeSearch component
import Career from './Career'; // Import your Career component
import Resume from './Resume'; // Import your Resume component
import ImageGenerator from './ImageGenerator'; // Import your Resume component
import Recorder from './Recorder'; // Import your Resume component
import Hedera from './Hedera'
import TextSummarizer from './TextSummarizer'
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
        <Route path="/text-summarizer" element={<TextSummarizer />} />
        <Route path="/voicetotext" element={<Recorder />} />
         <Route path="/image-generator" element={<ImageGenerator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
