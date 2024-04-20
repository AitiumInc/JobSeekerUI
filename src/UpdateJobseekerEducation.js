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

  

  function UpdateJobseekerEducation() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [editedData, setEditedData] = useState([]);
  
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerEducationByID?ID=1', options)
        .then(response => response.json())
        .then(json => setData(json))
        .then(json => setEditedData(json))
        .catch(error => console.error(error));
    }, []);

  
    const handleChange = (index, key, value) => {
      const newData = [...data];
      newData[index][key] = value;
      setEditedData(newData);
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8080/UpdateJobseekerEducation', {
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
            {data.map((item, index) => (
              
              <div key={index}>
                {Object.keys(item)?.map((key) => (
                  <div key={key}>
                    <label htmlFor={key}>{key} </label>
                    <input
                            type="text"
                            value={data[index][key] || ''}
                            onChange={(e) => handleChange(index, key, e.target.value)}
                          />
                  </div>
              ))}
                
          </div>
          ))}
        <button type="submit">Save</button>
        </form>
    
    : 'Loading...'}
    </div>
    );
  }
  
  
  export default UpdateJobseekerEducation;