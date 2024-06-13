import React, { useState, useEffect } from 'react';

function UpdateJobSeekerResume() {

        

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [id, setID] = useState(0);
    
    const handleFileChange = (event) => {
      setData(event.target.files[0]);
    };
  
    const handleIdChange = (event) => {
      setID(event.target.value);
    };
   

    const handleUpload = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append('resumeFile', data);
          formData.append('resumeID', id);
          

          const headers = {
            // Construct the Content-Type header with the boundary
            //'Content-Type': `multipart/form-data; boundary=${boundary}`,
          };

          const response = await fetch('http://localhost:8080/UpdateJobseekerResume', {
            method: 'POST',
            headers: headers,
            
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
    <label for="file">Upload Resume: </label>
    <input type="file" onChange={handleFileChange} />
      <input type="text" value={id} onChange={handleIdChange} placeholder="Enter ID" />
      <button onClick={handleUpload} disabled={!data || !id}>
        Upload
      </button>
    </div>
    )
}

export default UpdateJobSeekerResume;