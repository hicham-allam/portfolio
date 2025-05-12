import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; //tilwindcss

import App from './App';
import Clock from './pages/Clock';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Render the app with routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/template" element={<App />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </Router>
  </StrictMode>
);
