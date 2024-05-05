//import React from 'react';
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import JobSeekerProfile from './JobSeekerProfile';
import JobSeekerSkills from './JobSeekerSkills';
import JobSeekerEducation from './JobSeekerEducation';
import JobSeekerExperiences from './JobSeekerExperiences';
import JobSeekerCertificates from './JobSeekerCertificates';
import JobSeekerResume from './JobSeekerResume';
import UpdateJobSeeker from './UpdateJobSeeker';
import reportWebVitals from './reportWebVitals';
import UpdateJobSeekerEducation from './UpdateJobseekerEducation';
import UpdateJobseekerSkills from './UpdateJobseekerSkills';
import UpdateJobseekerExperiences from './UpdateJobseekerExperience';
import UpdateJobSeekerResume from './UpdateJobseekerResume';
import Title from './Title';
import App from './App.js';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/nice-select.css';
import './css/flaticon.css';
import './css/gijgo.css';
import './css/animate.min.css';
import './css/slicknav.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App class="jobseeker-component"/>
    <Title />
    <div class="job-details-area">
      <div class="container">
      <JobSeekerProfile/>
      <JobSeekerSkills/>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
