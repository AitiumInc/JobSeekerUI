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

  
function UpdateJobSeekerResume() {

        

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerResumeByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    
   

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const response = await fetch('http://localhost:8080/UpdateJobseekerResume', {
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
    <label for="file">Resume: </label>
    <input id = "file"
              type="file"
              value={data.Resume || ''}
              onChange={(e) =>
                setData({ ...data, Resume: e.target.value })
              }
            />
    <br />
    <br />

    <button type="submit">Upload</button>
    </form>
    
    : 'Loading...'}
    </div>
    );
}

export default UpdateJobSeekerResume;