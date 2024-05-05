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

  

  function UpdateJobseekerSkills() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [editedData, setEditedData] = useState([]);
  
    
    useEffect(() => {
      fetch('http://localhost:8080/GetJobseekerSkillsByID?ID=1', options)
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
        const response = await fetch('http://localhost:8080/UpdateJobseekerSkills', {
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
        <div class="job_details_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="apply_job_form white-bg">
                  <h4>Edit Skills</h4>
                  <div class="row">
                    <form onSubmit = {onSubmit}>
                      {data.map((item, index) => (
                        <div key={index}>
                            {Object.keys(item)?.map((key) => (
                              <div class="col-md-12">
                                <div class="input_field">
                                  <div key={key}>
                                  <label htmlFor={key}>{key} </label>
                                    <input
                                        type="text"
                                        value={data[index][key] || ''}
                                        onChange={(e) => handleChange(index, key, e.target.value)}
                                      />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      <div class="col-md-12">
                        <div class="submit_btn">
                          <button class="boxed-btn3 w-100" type="submit">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    : 'Loading...'}
    </div>
    );
  }
  
  
  export default UpdateJobseekerSkills;