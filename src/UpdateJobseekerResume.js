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
    const [id, setID] = useState(0);
    
    useEffect(() => {
      fetch('http://localhost:8080/GetResumeByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .then(json => setID(json))
        .catch(error => console.error(error));
    }, []);

    
   

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append('resumeFile', data);
          formData.append('resumeID', id);
          const response = await fetch('http://localhost:8080/UpdateJobseekerResume', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
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
    <label for="file">Upload Resume: </label>
    <input id="file"
              type="file"
              value={data.ResumeFileName || ''}
              onChange={(e) =>
                setData({ ...data, ResumeFileName: e.target.value })
              }
            />
    <br />
    <br />
    <label for='id'>Resume ID:</label>
    <input id="id"
              type="number"
              value={data.PK_ResumeID}
              onChange={(e) =>
                setID({...data, PK_ResumeID: e.target.value })
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