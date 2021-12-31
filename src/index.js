import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/home';
import Resume from './resume/resume';
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";
import Blog from './blog/blog';

ReactDOM.render(
    <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);