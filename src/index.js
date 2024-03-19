//import React from 'react';
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import JobSeekerProfile from './JobSeekerProfile';
import JobSeekerSkills from './JobSeekerSkills';
import JobSeekerEducation from './JobSeekerEducation';
import JobSeekerExperiences from './JobSeekerExperiences';
import JobSeekerCertificates from './JobSeekerCertificates';
import UpdateJobSeeker from './UpdateJobSeeker';
import reportWebVitals from './reportWebVitals';
import UpdateJobSeekerEducation from './UpdateJobseekerEducation';
import UpdateJobseekerSkills from './UpdateJobseekerSkills';
import UpdateJobseekerExperiences from './UpdateJobseekerExperience';
import UpdateJobSeekerResume from './UpdateJobseekerResume';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobSeekerProfile />
    <JobSeekerSkills />
    <JobSeekerEducation />
    <JobSeekerExperiences />
    <JobSeekerCertificates />
    <UpdateJobSeeker />
    <UpdateJobSeekerEducation />
    <UpdateJobseekerSkills />
    <UpdateJobseekerExperiences />
    <UpdateJobSeekerResume />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
