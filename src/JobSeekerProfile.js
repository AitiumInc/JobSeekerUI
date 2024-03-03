import React, { useState, useEffect } from 'react';

var options = {  
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "*"
    },
    mode: 'cors',
    crossorigin: true
  }
  function JobSeekerProfile() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    const request1 = fetch('http://localhost:8080/GetJobseekerByID?ID=1').then(response => response.json());
    const request2 = fetch('http://localhost:8080/GetJobseekerEducationByID?ID=1').then(response => response.json());
    const request3 = fetch('http://localhost:8080/GetJobseekerSkillsByID?ID=1').then(response => response.json());
    Promise.all([request1, request2])
      .then(([data1, data2, data3]) => {
        console.log(data1, data2, data3);
      })
      .catch(error => {
        console.error(error);
      });
  
    return (
      <div>
        {data ? 
        <pre>
        
        <h1>First Name: {JSON.stringify(data1.JobseekerFirstName, null, 2)}</h1> 
        <h2>Middle Name: {JSON.stringify(data1.JobseekerMiddleName, null, 2)}</h2> 
        <h2>Last Name: {JSON.stringify(data1.JobseekerLastName, null, 2)}</h2> 
        <h2>Address: {JSON.stringify(data1.JobseekerAddress, null, 2)}</h2>
        
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default JobSeekerProfile;