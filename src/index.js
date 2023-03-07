import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import "./css/normalize.css"
import "./css/main.css"
import "./css/project2.css"


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);