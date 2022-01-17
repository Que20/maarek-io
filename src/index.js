import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/home';
import Resume from './resume/resume';
import Articles from './articles/articles';
import Portfolio from './portfolio/portfolio';
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);