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
      fetch('http://localhost:8080/GetAllJobSeekers', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        {data ? 
        <pre>
        
        <h1>First Name: {JSON.stringify(data[0].JobseekerFirstName, null, 2)}</h1> 
        <h2>Middle Name: {JSON.stringify(data[0].JobseekerMiddleName, null, 2)}</h2> 
        <h2>Last Name: {JSON.stringify(data[0].JobseekerLastName, null, 2)}</h2> 
        <h2>Address: {JSON.stringify(data[0].JobseekerAddress, null, 2)}</h2>
        
        </pre> 
        : 'Loading...'}
      </div>
    );
  }

  export default JobSeekerProfile;