import React, { useState, useEffect } from 'react';
import './css/style.css';

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

/*
function handleSubmit(event) {
    // POST request using fetch with async/await
    const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ title: 'React POST Request Example' })
   };
   const response = fetch('http://localhost:8080/UpdateJobseeker', requestOptions);
   
}
*/
function UpdateJobSeeker() {

        

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    
   

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const response = await fetch('http://localhost:8080/UpdateJobseeker', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            console.log('Data successfully submitted');
            // Optionally, you can reset the form after successful submission
            // setFormData({});
          } else {
            throw new Error('Failed to submit data');
          }
        } catch (error) {
          console.error('Error submitting data:', error);
        }
        setIsLoading(false);
      };
    

    return (
        
      <div>
      {data ? 
    <form onSubmit = {onSubmit}>
    <label htmlFor={data.JobseekerFirstName}>First Name</label>
    <input
              type="text"
              value={data.JobseekerFirstName || ''}
              onChange={(e) =>
                setData({ ...data, JobseekerFirstName: e.target.value })
              }
            />
    <br />
    <br />

    <label htmlFor={data.field1}>Last Name</label>
    <input
              type="text"
              value={data.JobseekerLastName || ''}
              onChange={(e) =>
                setData({ ...data, JobseekerLastName: e.target.value })
              }
            />

    <br />
    <br />

    <button type="submit">Save</button>
    </form>
    
    : 'Loading...'}
    </div>
    );
}

export default UpdateJobSeeker;