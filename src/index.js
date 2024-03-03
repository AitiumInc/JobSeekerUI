//import React from 'react';
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import JobSeekerProfile from './JobSeekerProfile';
import reportWebVitals from './reportWebVitals';
import './css/linearicons.css';
import './css/font-awesome.min.css';
import './css/bootstrap.css';
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/animate.min.css';
//import './css/owl.carousel.css';
import './css/main.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobSeekerProfile />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
