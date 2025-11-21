import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; //tilwindcss

import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

// Render the app with routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
        </div>
    </Router>
  </StrictMode>
);
